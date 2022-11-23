const menu=document.querySelector('.menu-btn')
const navlink=document.querySelector('.navlinks')
    menu.addEventListener('click',()=>{
        navlink.classList.toggle('mobile-menu')
    })