//image Slider
//^^^ have to create image slider using slider/glider js
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
//video popup
const modal = document.querySelector('.video-modal');
const close = document.querySelector('.fa-times');
const modal_btn = document.querySelector('.header-btn');

modal_btn.addEventListener('click', ()=>{
    modal.style.display = 'block';
})
close.addEventListener('click',()=>{
    modal.style.display='none';
})
//solution tabs
const [para1, para2, para3] =[ document.querySelector('#para1'), document.querySelector('#para2'), document.querySelector('#para3')];
const [sol1 , sol2 , sol3 ] = [ document.querySelector('#sol1'), document.querySelector('#sol2'), document.querySelector('#sol3')];

sol1.addEventListener('click', ()=>{
    para1.classList.add('active-para');
    para2.classList.remove('active-para');
    para3.classList.remove('active-para');
    sol1.style.color = '#6097E2';
    sol2.style.color = '#ECF2FA';
    sol3.style.color = '#ECF2FA';
})
sol2.addEventListener('click',()=>{
    para1.classList.remove('active-para');
    para2.classList.add('active-para');
    para3.classList.remove('active-para');
    sol2.style.color = '#6097E2';
    sol1.style.color = '#ECF2FA';
    sol3.style.color = '#ECF2FA';
})
sol3.addEventListener('click', ()=>{
    para1.classList.remove('active-para');
    para2.classList.remove('active-para');
    para3.classList.add('active-para');
    sol3.style.color = '#6097E2';
    sol1.style.color = '#ECF2FA';
    sol2.style.color = '#ECF2FA';
})
//mobile-nav
const mobile_nav = document.querySelector('.mobile-nav');
const nav_ul = document.querySelector('.navbar-ul');
const [line1,line2,line3] = [document.querySelector('.line-1'), document.querySelector('.line-2'),document.querySelector('.line-3')];
mobile_nav.addEventListener('click',()=>{
    line1.style.transform = 'rotate(45deg) translateX(10px) translateY(10px)';
    line2.style.opacity = '0';
    line3.style.transform = 'rotate(-45deg)  translateY(-5px) translateX(5px)';
})
//^^^ have to create card slider using slider/glider js
//gsap