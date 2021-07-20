AOS.init();

//image btn preview
const [img_1, img_2, img_3] = [document.querySelector('#img-1'), document.querySelector('#img-2'), document.querySelector('#img-3')];
const [btn_1, btn_2, btn_3] = [document.querySelector('#btn-1'), document.querySelector('#btn-2'), document.querySelector('#btn-3')];

btn_1.addEventListener('click',()=>{
    img_1.style.display = 'block';
    img_2.style.display = 'none';
    img_3.style.display = 'none';
    if (img_1.style.display == 'block'){
        btn_1.style.opacity = '1';
        btn_1.style.transform = 'translateY(-2.5px)';
        btn_2.style.opacity = '0.2';
        btn_2.style.transform = 'translateY(0)';
        btn_3.style.opacity = '0.2';
        btn_3.style.transform = 'translateY(0)';
    }
})
btn_2.addEventListener('click',()=>{
    img_1.style.display = 'none';
    img_2.style.display = 'block';
    img_3.style.display = 'none';
    if (img_2.style.display == 'block'){
        btn_2.style.opacity = '1';
        btn_2.style.transform = 'translateY(-2.5px)';
        btn_1.style.opacity = '0.2';
        btn_1.style.transform = 'translateY(0)';
        btn_3.style.opacity = '0.2';
        btn_3.style.transform = 'translateY(0)';
    }
    
})
btn_3.addEventListener('click',()=>{
    img_1.style.display = 'none';
    img_2.style.display = 'none';
    img_3.style.display = 'block';
    if (img_3.style.display == 'block'){
        btn_3.style.opacity = '1';
        btn_3.style.transform = 'translateY(-2.5px)';
        btn_2.style.opacity = '0.2';
        btn_2.style.transform = 'translateY(0)';
        btn_1.style.opacity = '0.2';
        btn_1.style.transform = 'translateY(0)';
    }
    
})

//mobile-nav
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

