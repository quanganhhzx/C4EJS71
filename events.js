function welcome(){
    alert("Welcome C4E JS 71");
}   
function changeColor(e){
   console.log(e.target);
   e.target.style.color = 'red'
   
}
function hiddenButton(e){
    e.target.style.display = 'none';
    // e.target.remove();
    
}