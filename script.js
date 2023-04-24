const text=document.getElementsByClassName("input");
const btn=document.querySelectorAll(".btn");
const search = document.querySelector('.search');

btn[0].addEventListener(("click"),() =>{
    
    search.classList.toggle("active");
    text.focus();
})

