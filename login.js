function login(){
   
    const username =
         document.getElementById('username').value;
    const password =
         document.getElementById('password').value;

    if(username === ''){
        alert("Enter username");
        return;
    }
    if(password ===''){
        alert("Enter password");
        return;
    }

   
    if(username === 'admin' && password === '123456'){
        alert("Nhập đúng");
        // location.replace("index.html")
        window.location.href = "index.html";

        return;
    }
      alert('User or password is incorect') 
    

}
function submit(e){
      if(e.key === 'Enter'){
          login();
      }
      
}

let s = "Hello world";
let n =10;
let b = true;
let arr= [1,2,3,4,5];
let o = {name:'Hung','age':22,"school":'HUBT',"farvorite":["1","2","3"] };

console.log(o);

console.log( JSON.stringify(o));

let stringify = '{{"name":"Hung","age":22,"school":"HUBT","farvorite":["1","2","3"]}';
// let object = JSON.parse(stringify);
// console.log(object);

// console.log(object.name);
// console.log(object.age);
// console.log(object.school);
let person = '{{"name":"Hung","age":22,"school":"HUBT","farvorite":["1","2","3"]}';
//quá trình lưu vào localstorage
//sử dụng stringify
localStorage.setItem('person',JSON.stringify(person));

//detail.html
//quá trình parse dữ liệu string trong localStorage
//về 1 object trong js
let personSelected = JSON.parse(localStorage.getItem('person'));
console.log(personSelected);
