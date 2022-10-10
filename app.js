let cart=document.querySelector(".popup")
let close=document.querySelector(".close")
let button=document.querySelectorAll(".cart")
let list=Array.from(button)

list.map((btn)=>btn.addEventListener('click', showbutton))

close.addEventListener('click', ()=> cart.style.display="none");

function showbutton(){
    cart.style.display="block"
    setTimeout(()=>{cart.style.display="none"}, 3000)
}