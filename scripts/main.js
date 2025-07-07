//제품 HTML 추가 js
//a태그 기능 초기화 JS
const aAll = document.querySelectorAll('a')
for(let i=0 ; i < 92 ; i++){
    aAll[i].addEventListener('click', (e)=>{
        e.preventDefault()
    })
}
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
    //sss
    for(let i = 0 ; i < 9 ; i++){
        sssList[i].innerHTML = `<img src="${sssDB[i].src}" alt="${sssDB[i].name}">`
        sssList[i].innerHTML += `<span class="name">${sssDB[i].name}</span>`
        sssList[i].innerHTML += `<span class="price">${(sssDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(sssDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        sssList[i].addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
    //only
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        onlyList.appendChild(product)
        product.innerHTML = `<img src="${onlyDB[i].src}" alt="${onlyDB[i].name}">`
        product.innerHTML += `<span class="name">${onlyDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(onlyDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(onlyDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        product.addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
    //new
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        newList.appendChild(product)
        product.innerHTML = `<img src="${newDB[i].src}" alt="${newDB[i].name}">`
        product.innerHTML += `<span class="name">${newDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(newDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(newDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        product.addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
    //woman
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        womanList.appendChild(product)
        product.innerHTML = `<img src="${womanDB[i].src}" alt="${womanDB[i].name}">`
        product.innerHTML += `<span class="name">${womanDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(womanDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(womanDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        product.addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
    //man
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        manList.appendChild(product)
        product.innerHTML = `<img src="${manDB[i].src}" alt="${manDB[i].name}">`
        product.innerHTML += `<span class="name">${manDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(manDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(manDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        product.addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
    //best
    bestTop1.innerHTML = `<img src="${bestDB[0].src}" alt="${bestDB[0].name}">`
    bestTop1.innerHTML += `<span class="name">${bestDB[0].name}</span>`
    bestTop1.innerHTML += `<span class="price">${(bestDB[0].salePrice).toLocaleString('ko-kr')}원<del>${(bestDB[0].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    bestTop1.addEventListener('click', ()=>{
        window.location.href="./buy.html"
    })
    for(let i = 1; i < 5 ; i++){
        const product = document.createElement('a')
        bestTop5.appendChild(product)
        product.innerHTML = `<img src="${bestDB[i].src}" alt="${bestDB[i].name}">`
        product.innerHTML += `<span class="name">${bestDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(bestDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(bestDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
        bestTop5.addEventListener('click', ()=>{
            window.location.href="./buy.html"
        })
    }
}
// 카테고리 활성화 js
const cateBtn1 = document.querySelector('.btn1 ul');
cateBtn1.children[0].children[0].classList.add('btn_active')
const cateBtn2 = document.querySelector('.btn2 ul');
cateBtn2.children[0].children[0].classList.add('btn_active')
const cateBtn3 = document.querySelector('.btn3 ul');
cateBtn3.children[0].children[0].classList.add('btn_active')
const cateBtn4 = document.querySelector('.btn4 ul');
cateBtn4.children[0].children[0].classList.add('btn_active')
const cateBtn5 = document.querySelector('.btn5 ul');
cateBtn5.children[0].children[0].classList.add('btn_active')
const cateBtn6 = document.querySelector('.btn6 ul');
cateBtn6.children[0].children[0].classList.add('btn_active')
btnActive()
function btnActive(){
    for(let i = 0; i < 5 ; i++){
        //sss
        cateBtn1.children[0].children[0].addEventListener('click', ()=>{
            cateBtn1.children[i].children[0].classList.remove('btn_active')
            cateBtn1.children[0].children[0].classList.add('btn_active')
        })
        cateBtn1.children[1].children[0].addEventListener('click', ()=>{
            cateBtn1.children[i].children[0].classList.remove('btn_active')
            cateBtn1.children[1].children[0].classList.add('btn_active')
        })
        cateBtn1.children[2].children[0].addEventListener('click', ()=>{
            cateBtn1.children[i].children[0].classList.remove('btn_active')
            cateBtn1.children[2].children[0].classList.add('btn_active')
        })
        cateBtn1.children[3].children[0].addEventListener('click', ()=>{
            cateBtn1.children[i].children[0].classList.remove('btn_active')
            cateBtn1.children[3].children[0].classList.add('btn_active')
        })
        cateBtn1.children[4].children[0].addEventListener('click', ()=>{
            cateBtn1.children[i].children[0].classList.remove('btn_active')
            cateBtn1.children[4].children[0].classList.add('btn_active')
        })
        //best
        cateBtn2.children[0].children[0].addEventListener('click', ()=>{
            cateBtn2.children[i].children[0].classList.remove('btn_active')
            cateBtn2.children[0].children[0].classList.add('btn_active')
        })
        cateBtn2.children[1].children[0].addEventListener('click', ()=>{
            cateBtn2.children[i].children[0].classList.remove('btn_active')
            cateBtn2.children[1].children[0].classList.add('btn_active')
        })
        cateBtn2.children[2].children[0].addEventListener('click', ()=>{
            cateBtn2.children[i].children[0].classList.remove('btn_active')
            cateBtn2.children[2].children[0].classList.add('btn_active')
        })
        cateBtn2.children[3].children[0].addEventListener('click', ()=>{
            cateBtn2.children[i].children[0].classList.remove('btn_active')
            cateBtn2.children[3].children[0].classList.add('btn_active')
        })
        cateBtn2.children[4].children[0].addEventListener('click', ()=>{
            cateBtn2.children[i].children[0].classList.remove('btn_active')
            cateBtn2.children[4].children[0].classList.add('btn_active')
        })
        //only
        cateBtn3.children[0].children[0].addEventListener('click', ()=>{
            cateBtn3.children[i].children[0].classList.remove('btn_active')
            cateBtn3.children[0].children[0].classList.add('btn_active')
        })
        cateBtn3.children[1].children[0].addEventListener('click', ()=>{
            cateBtn3.children[i].children[0].classList.remove('btn_active')
            cateBtn3.children[1].children[0].classList.add('btn_active')
        })
        cateBtn3.children[2].children[0].addEventListener('click', ()=>{
            cateBtn3.children[i].children[0].classList.remove('btn_active')
            cateBtn3.children[2].children[0].classList.add('btn_active')
        })
        cateBtn3.children[3].children[0].addEventListener('click', ()=>{
            cateBtn3.children[i].children[0].classList.remove('btn_active')
            cateBtn3.children[3].children[0].classList.add('btn_active')
        })
        cateBtn3.children[4].children[0].addEventListener('click', ()=>{
            cateBtn3.children[i].children[0].classList.remove('btn_active')
            cateBtn3.children[4].children[0].classList.add('btn_active')
        })
        //new
        cateBtn4.children[0].children[0].addEventListener('click', ()=>{
            cateBtn4.children[i].children[0].classList.remove('btn_active')
            cateBtn4.children[0].children[0].classList.add('btn_active')
        })
        cateBtn4.children[1].children[0].addEventListener('click', ()=>{
            cateBtn4.children[i].children[0].classList.remove('btn_active')
            cateBtn4.children[1].children[0].classList.add('btn_active')
        })
        cateBtn4.children[2].children[0].addEventListener('click', ()=>{
            cateBtn4.children[i].children[0].classList.remove('btn_active')
            cateBtn4.children[2].children[0].classList.add('btn_active')
        })
        cateBtn4.children[3].children[0].addEventListener('click', ()=>{
            cateBtn4.children[i].children[0].classList.remove('btn_active')
            cateBtn4.children[3].children[0].classList.add('btn_active')
        })
        cateBtn4.children[4].children[0].addEventListener('click', ()=>{
            cateBtn4.children[i].children[0].classList.remove('btn_active')
            cateBtn4.children[4].children[0].classList.add('btn_active')
        })
        //woman
        cateBtn5.children[0].children[0].addEventListener('click', ()=>{
            cateBtn5.children[i].children[0].classList.remove('btn_active')
            cateBtn5.children[0].children[0].classList.add('btn_active')
        })
        cateBtn5.children[1].children[0].addEventListener('click', ()=>{
            cateBtn5.children[i].children[0].classList.remove('btn_active')
            cateBtn5.children[1].children[0].classList.add('btn_active')
        })
        cateBtn5.children[2].children[0].addEventListener('click', ()=>{
            cateBtn5.children[i].children[0].classList.remove('btn_active')
            cateBtn5.children[2].children[0].classList.add('btn_active')
        })
        cateBtn5.children[3].children[0].addEventListener('click', ()=>{
            cateBtn5.children[i].children[0].classList.remove('btn_active')
            cateBtn5.children[3].children[0].classList.add('btn_active')
        })
        cateBtn5.children[4].children[0].addEventListener('click', ()=>{
            cateBtn5.children[i].children[0].classList.remove('btn_active')
            cateBtn5.children[4].children[0].classList.add('btn_active')
        })
        //man
        cateBtn6.children[0].children[0].addEventListener('click', ()=>{
            cateBtn6.children[i].children[0].classList.remove('btn_active')
            cateBtn6.children[0].children[0].classList.add('btn_active')
        })
        cateBtn6.children[1].children[0].addEventListener('click', ()=>{
            cateBtn6.children[i].children[0].classList.remove('btn_active')
            cateBtn6.children[1].children[0].classList.add('btn_active')
        })
        cateBtn6.children[2].children[0].addEventListener('click', ()=>{
            cateBtn6.children[i].children[0].classList.remove('btn_active')
            cateBtn6.children[2].children[0].classList.add('btn_active')
        })
        cateBtn6.children[3].children[0].addEventListener('click', ()=>{
            cateBtn6.children[i].children[0].classList.remove('btn_active')
            cateBtn6.children[3].children[0].classList.add('btn_active')
        })
        cateBtn6.children[4].children[0].addEventListener('click', ()=>{
            cateBtn6.children[i].children[0].classList.remove('btn_active')
            cateBtn6.children[4].children[0].classList.add('btn_active')
        })
    }
}