// Khai báo biến có kiểu dữ liệu

let valid: boolean = true;
let x: number = 101;
let a: null = null;
let result2 = undefined;

//union type: biến nhận được nhiều type
let result3: string | undefined = undefined;

interface Product {
  id: number | string;
  name: string;
  price: boolean | number;
}

interface Product2 extends Product {
  description: string;
}

// Hai interface cùng tên -> gộp thuộc tính
// Interface có thể kế thừa bằng extends

let product: Product = { id: "101", name: "Samsung Galaxy", price: 101 };
let product2: Product2 = { id: 1, name: "", price: 0, description: "" };

// type tương tự interface, dùng để định nghĩa format của object
// không merge, không kế thừa
type Student = {
  id: string;
  name: string;
};

let s: Student = {
  id: "101",
  name: "ABC",
};

class Person {
  id: string = "";
  name: string = "Default";
  constructor() {}
}

let per = new Person();

// Class dùng để format data thường sử dụng để khởi tạo obj gửi về server

// Kiểu đặc biệt: any, unknown
// any: chấp nhận tất cả kiểu
let re4: any = "";
// unknown: chấp nhận tất cả kiểu, tuy nhiên cần kiểm tra lại kiểu dữ liệu khi gọi hàm hoặc dùng toán tử

let y: unknown = 5;

// instanceof

// function: kiểu dữ liệu cho các callback

function main(callback: (title: string) => void) {
  callback("Cybersoft");
}

let renderH4 = (title: string): number => {
  return 1;
};

main(renderH4);

// Array type
let arrNumber: number[] = [1, 2, 3, 4];
//optional type: cho phép 1 thuộc tính có thể có hoặc không

interface Phone {
  id: number;
  name: string;
  description?: string;
}

let p1: Phone = { id: 1, name: "" };

//enum: định nghĩa các type hoặc giá trị
enum GioiTinh {
  Nam = "Nam",
  Nu = "Nữ",
}
interface NhanVien {
  ma: string;
  ten: string;
  gioiTinh: GioiTinh.Nam;
}

// Generic: cho phép truyền động type vào 1 interface, type, class
