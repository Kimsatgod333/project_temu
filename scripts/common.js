//광고 닫기
const adClose = document.querySelector('header .top .close')
const ad = document.querySelector('header .top')
const main = document.querySelector('main')
adClose.addEventListener('click',()=>{
    ad.style.display = 'none';
    main.style.paddingTop = 'calc(110px - 42px)';
})
//lnb js
const cate = document.querySelector('.cate')
const lnb = document.querySelector('.cate .lnb');
cate.addEventListener('mouseover', ()=>{
    lnb.style.transform = 'scaleY(1)';
})
cate.addEventListener('mouseout', ()=>{
    lnb.style.transform = 'scaleY(0)';
})
// 언어 활성화 js
const lang = document.querySelector('.lang');
const langSelect = document.querySelector('.lang .lang_select')
lang.addEventListener('mouseover', ()=>{
    langSelect.style.transform = 'scaleY(1)'
})
lang.addEventListener('mouseout', ()=>{
    langSelect.style.transform = 'scaleY(0)'
})
//사이트이동JS
const logo = document.querySelector('.logo')
const login = document.querySelector('.login')
const cart = document.querySelector('.cart')
logo.addEventListener('click', ()=>{
    window.location.href = './index.html'
})
login.addEventListener('click', ()=>{
    window.location.href = './login.html'
})
cart.addEventListener('click', ()=>{
    window.location.href = './login.html'
})