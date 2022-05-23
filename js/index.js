// Khai báo biến có kiểu dữ liệu
let valid = true;
let x = 101;
let a = null;
let result2 = undefined;
//union type: biến nhận được nhiều type
let result3 = undefined;
// Hai interface cùng tên -> gộp thuộc tính
// Interface có thể kế thừa bằng extends
let product = { id: "101", name: "Samsung Galaxy", price: 101 };
let product2 = { id: 1, name: "", price: 0, description: "" };
let s = {
    id: "101",
    name: "ABC",
};
class Person {
    constructor() {
        this.id = "";
        this.name = "Default";
    }
}
let per = new Person();
// Class dùng để format data thường sử dụng để khởi tạo obj gửi về server
// Kiểu đặc biệt: any, unknown
// any: chấp nhận tất cả kiểu
let re4 = "";
// unknown: chấp nhận tất cả kiểu, tuy nhiên cần kiểm tra lại kiểu dữ liệu khi gọi hàm hoặc dùng toán tử
let y = 5;
// instanceof
// function: kiểu dữ liệu cho các callback
function main(callback) {
    callback("Cybersoft");
}
let renderH4 = (title) => {
    return 1;
};
main(renderH4);
// Array type
let arrNumber = [1, 2, 3, 4];
let p1 = { id: 1, name: "" };
//enum: định nghĩa các type hoặc giá trị
var GioiTinh;
(function (GioiTinh) {
    GioiTinh["Nam"] = "Nam";
    GioiTinh["Nu"] = "N\u1EEF";
})(GioiTinh || (GioiTinh = {}));
// Generic: cho phép truyền động type vào 1 interface, type, class
