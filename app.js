let cart=document.querySelector(".popup")
let close=document.querySelector(".close")
let button=document.querySelectorAll(".cart")
console.log(button)

button.addEventListener('click', showbutton);
close.addEventListener('click', ()=> cart.style.display="none");

function showbutton(){
    cart.style.display="block"
    setTimeout(()=>{cart.style.display="none"}, 3000)
}