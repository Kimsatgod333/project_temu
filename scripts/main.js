//a태그 기능 초기화 JS
const aAll = document.querySelectorAll('a')
for(let i=0 ; i < 65 ; i++){
    aAll[i].addEventListener('click', (e)=>{
        e.preventDefault()
    })
}
//제품 HTML 추가 js
const adClose = document.querySelector('header .top .close')
const ad = document.querySelector('header .top')
const main = document.querySelector('main')
adClose.addEventListener('click',()=>{
    ad.style.display = 'none';
    main.style.paddingTop = 'calc(111px - 42px)';
})
//여름할인
const sssList = document.querySelectorAll('.sss_swiper .swiper-slide a')
//베스트
const bestTop1 = document.querySelector('#best .left_wrap a')
const bestTop5 = document.querySelector('#best .top5')
//오직테무
const onlyList = document.querySelector('.only_list')
//신상품
const newList = document.querySelector('.new_product_list')
//여성
const womanList = document.querySelector('.woman_cloth_list')
//남성
const manList = document.querySelector('.man_cloth_list')
//innerHTML 함수
inProduct()
function inProduct(){
    for(let i = 0 ; i < 9 ; i++){
        sssList[i].innerHTML = `<img src="${sssDB[i].src}" alt="${sssDB[i].name}">`
        sssList[i].innerHTML += `<span class="name">${sssDB[i].name}</span>`
        sssList[i].innerHTML += `<span class="price">${(sssDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(sssDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        onlyList.appendChild(product)
        product.innerHTML = `<img src="${onlyDB[i].src}" alt="${onlyDB[i].name}">`
        product.innerHTML += `<span class="name">${onlyDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(onlyDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(onlyDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        newList.appendChild(product)
        product.innerHTML = `<img src="${newDB[i].src}" alt="${newDB[i].name}">`
        product.innerHTML += `<span class="name">${newDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(newDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(newDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        womanList.appendChild(product)
        product.innerHTML = `<img src="${womanDB[i].src}" alt="${womanDB[i].name}">`
        product.innerHTML += `<span class="name">${womanDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(womanDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(womanDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        manList.appendChild(product)
        product.innerHTML = `<img src="${manDB[i].src}" alt="${manDB[i].name}">`
        product.innerHTML += `<span class="name">${manDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(manDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(manDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    bestTop1.innerHTML = `<img src="${bestDB[0].src}" alt="${bestDB[0].name}">`
    bestTop1.innerHTML += `<span class="name">${bestDB[0].name}</span>`
    bestTop1.innerHTML += `<span class="price">${(bestDB[0].salePrice).toLocaleString('ko-kr')}원<del>${(bestDB[0].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    for(let i = 1; i < 5 ; i++){
        const product = document.createElement('a')
        bestTop5.appendChild(product)
        product.innerHTML = `<img src="${bestDB[i].src}" alt="${bestDB[i].name}">`
        product.innerHTML += `<span class="name">${bestDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(bestDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(bestDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
}
// 카테고리 활성화 js
const cateBtn = document.querySelectorAll('.cate_btn');
btnActive()
function btnActive(){
    for(let i = 0; i < 6 ; i++){
        cateBtn[i].children[0].children[0].children[0].classList.add('btn_active');
    }
}
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