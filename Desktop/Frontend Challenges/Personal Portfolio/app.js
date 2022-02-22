// ================Menu hidden================
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

//=======================Remove Menu on clicking icon====
const navLink=document.querySelectorAll('.nav-link');

function linkAction(){
    navMenu.classList.remove('show-menu');
}
navLink.forEach( n => n.addEventListener('click',linkAction));