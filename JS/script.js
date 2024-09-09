
const navBar= document.querySelector(".nav");
const menu= document.getElementById("drop").addEventListener('click', function(){
navBar.classList.toggle("show_nav")
});

const drop = document.querySelector(".all_p_element");
const dropIt = document.querySelector(".all_p_icon").addEventListener("click", function(){
    drop.classList.toggle("_show")
});


const date_year = document.getElementById("date")
date_year.innerHTML = new Date().getFullYear();

console.log(date_year)
