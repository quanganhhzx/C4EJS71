//1 . Tính chu vi và diện tích hình tròn
let r = parseFloat(prompt("Nhập bán kính"));
let d = parseFloat(prompt("Nhập đường kính hình tròn"));

let s = r**r * Math.PI;
let p = d * Math.PI ;
console.log(s);

console.log(p);
alert("Chu vi của hình tròn là " + p );
alert("Diện tích của hình tròn là " + s);

//2 . Tính chu vi và diện tích hình chữ nhật

let a = parseInt(prompt("Nhập a"));

let b = parseInt(prompt("Nhập b"));

let p1 = Number(a + b ) * 2; 
let S1 = Number(a * b );

console.log(p1);
console.log(S1);

alert("Chu vi của hình chữ nhật là" + p1);
alert("Diện tích của hình chữ nhật là " + S1);

//3  .Tính giá trị biểu thức
let x = parseInt(prompt("Nhập x"));

let y1 = 4 * (x**x + 10* x * Math.sqrt( x + 3*x +1));

let y2 = (Math.sin(Math.PI * x**x ) + Math.sqrt(x**x + 1)) / (Math.pow(Math.E, 2*x) + Math.cos(Math.PI / 4 * x));

console.log(y1);
console.log(y2);

alert("Giá trị y1 " + y1);
alert("Giá trị y2 " + y2);
// Bài 4 chưa làm được
//5 . Tính tổng các chữ số
let x =parseInt(prompt("Nhập chữ số có 3 số bất kỳ"));
let a = parseInt(prompt("Nhập hàng đơn vị"));
let b =  parseInt(prompt("Nhập hàng chục"));
let c = parseInt(prompt("Nhập hàng trăm"))

let s = Number(a + b + c)
console.log(s);
alert("Kết quả tổng ba số là" + s);

