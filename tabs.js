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
//lightbox
