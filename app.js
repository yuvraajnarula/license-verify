//card slider
$('.card-div').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
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
const close = document.querySelector('.video-close');
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
const overflow = document.querySelector('.overflow'); 

mobile_nav.addEventListener('click', ()=>{
    overflow.style.transform = 'translateX(0)';
    overflow.style.width = '100%';
    mobile_nav.style.opacity = 0;
})

const nav_close = document.querySelector('.overflow-x');

nav_close.addEventListener('click', ()=>{
    overflow.style.transform = 'translateX(-100%)';
    overflow.style.width = '0%';
    mobile_nav.style.opacity = 1;
})

// subscribe modal
const [subscribe, subscribe_close,form_subscribe] = [document.querySelector('.subscribe-btn'),document.querySelector('.subscribe-close'),document.querySelector('.form-modal')];
subscribe.addEventListener('click',()=>{
  form_subscribe.style.display = 'block';
})
subscribe_close.addEventListener('click',()=>{
  form_subscribe.style.display = 'none';
})

//gsap
