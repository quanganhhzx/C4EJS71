// // SS4 Điều kiện 
// //Kiểm tra năm đó có bao nhiêu ngày
// let year = parseInt(prompt("Nhập năm"));
// if((year % 4 === 0 && year % 100 !== 0) 
//     || (year % 100 === 0 && year % 400 === 0)){
//     console.log("là năm nhuận có 366 ngày");
//     }else{
//         console.log("Năm đó có 365 ngày");   
//     }
    
// // // Kiểm tra số ngày của một tháng

// let year = parseInt(prompt("Nhập năm"));
// let month = parseInt(prompt("Nhập tháng"))
//     if(month === 1 || month === 3 ||month === 5 ||month === 7 ||month === 8 ||
//     month === 10 ||month === 12 ){
//         console.log("Có 31 ngày");      
//     }else if(month === 2){
//     console.log("Thì có 28,29 ngày");    
// }else if (month === 4 || month === 6 ||month === 9 ||month === 11 ){
//     console.log("Có 30 ngày"); 
// }

// // Kiểm tra mùa của một tháng trong năm
// let month = parseInt(prompt("Nhập tháng"));
// if(month === 2 || month === 3 ||month === 4){
//     console.log(" Là mùa xuân");
    
// }else if(month === 5 ||month === 6 ||month === 7 ){
//     console.log("Là mùa hè");
    
// }else if(month === 8 ||month === 9 ||month === 10 ){
//     console.log("Là mùa thu");
    
// }else if(month === 11 ||month === 12 ||month === 1 ){
//     console.log("Là mùa đông");
    
// }
// // Nhập 3 số in theo thứ tự tăng dần

// let a = parseInt(prompt("Nhập số đầu tiên"));
// let b = parseInt(prompt("Nhập số thứ 2 "));
// let c = parseInt(prompt("Nhập số thứ 3"));

// if(a > b || b > c ){
//     console.log(" theo thứ thự tăng dần là"+ c + b + a);
    
// }else if( a < b || b < c ){
//     console.log(" Theo thứ tự tăng dần là " + a + b + c );
    
// }else if( a > b || b <  c){
//     console.log(" Theo thứ tự tăng dần là " + b + c  + a);
    
// }else if ( a < b || b > c || a < c){
//     console.log(" Theo thứ tự tăng dần là " + a + c + b );
    
// }else if ( a === b || a >c || b > c){
//     console.log(" Kết quả là " + c + b + a);
    
// }else if( b === c || b > a || c > a){
//     console.log("kết quả là " + a + b + c);
    
// }else if ( a === c || b < a || b < c ){
//     console.log(" Kết quả là " + b + c + a);
    
// }
// // Tính tam giác 
// let a = parseInt(prompt(" Nhập cạnh tam giác a"));
// let b = parseInt(prompt(" Nhập cạnh tam giác b"));
// let c = parseInt(prompt(" Nhập cạnh tam giác c"));

// if(a != b || b != c || a != c ){
//     console.log(" Là tam giác thường");
    
// }else if ( c ===b || a !== c && a !== b ){
//     console.log(" là tam giác cân ")+ a ;
    
// }else if ( a === b || a === c || b === c){
//     console.log("tam giác đều " + c);
    
// }

// // Tiền điện phải trả 
// let a = parseInt(prompt("Nhập số điện"));

// if( a * 1.678){
//     console.log(" Số điện phải trả của bậc 1 là " + (a * 1.678));
//     console.log(" Số điện phải trả của bậc 2 là " + (a * 1.734));
//     console.log(" Số điện phải trả của bậc 3 là " + (a * 2.014));
//     console.log(" Số điện phải trả của bậc 4 là " + (a * 2.536));
//     console.log(" Số điện phải trả của bậc 5 là " + (a * 2.834));
//     console.log(" Số điện phải trả của bậc 6 là " + (a * 2.927));
// }

//Tính chỉ số BMI
let a = parseFloat(prompt(" Nhập chiều cao của bạn bằng m vidu 1.6"));
let b = parseFloat(prompt(" Nhập cân nặng của bạn bằng kilogam vi du 50 "));

let x = Number(b / a**a);
if( x < 18.5){
console.log("Bạn là người gầy " );

} else if( 18.5 < x && x < 24.9){
    console.log("Bạn là người bình thường " +x );
    
}else if ( 25 <x && x < 29.9 ){
    console.log(" Bạn là người  thừa cân " + x);
    
}else if ( 30 < x && x <34.9){
    console.log("Bạn là người béo phì cấp độ 1 "+ x);
    
}else if ( 35 <  x && x <39.9){
    console.log(" Bạn là người béo phì cấp độ 2 " + x);
    
    
}else if (x >= 40){
    console.log("Bạn là người béo phì cấp độ 3" + x);
    
}
alert(x)