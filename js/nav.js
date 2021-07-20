const mobile_nav = document.querySelector('.hamburger');
const overflow = document.querySelector('.overlay'); 

mobile_nav.addEventListener('click', ()=>{
    overflow.style.transform = 'translateX(0)';
    overflow.style.width = '100%';
    mobile_nav.style.opacity = 0;
})

const nav_close = document.querySelector('.nav-close-btn');

nav_close.addEventListener('click', ()=>{
   overflow.style.transform = 'translateX(-100%)';
   overflow.style.width = '0%';
   mobile_nav.style.opacity = 1;
})