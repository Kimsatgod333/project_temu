const aAll = document.querySelectorAll('a')
for(let i=0 ; i < 65 ; i++){
    aAll[i].addEventListener('click', (e)=>{
        e.preventDefault()
    })
}
const adClose = document.querySelector('header .top .close')
const ad = document.querySelector('header .top')
const main = document.querySelector('main')
adClose.addEventListener('click',()=>{
    ad.style.display = 'none';
    main.style.paddingTop = 'calc(111px - 42px)';
})
const sssList = document.querySelectorAll('.sss_swiper .swiper-slide')
const onlyList = document.querySelector('.only_list')
const newList = document.querySelector('.new_product_list')
const womanList = document.querySelector('.woman_cloth_list')
const manList = document.querySelector('.man_cloth_list')
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
        console.log(product)
        product.innerHTML = `<img src="${onlyDB[i].src}" alt="${onlyDB[i].name}">`
        product.innerHTML += `<span class="name">${onlyDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(onlyDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(onlyDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        newList.appendChild(product)
        console.log(product)
        product.innerHTML = `<img src="${newDB[i].src}" alt="${newDB[i].name}">`
        product.innerHTML += `<span class="name">${newDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(newDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(newDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        womanList.appendChild(product)
        console.log(product)
        product.innerHTML = `<img src="${womanDB[i].src}" alt="${womanDB[i].name}">`
        product.innerHTML += `<span class="name">${womanDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(womanDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(womanDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
    for(let i = 0 ; i < 10 ; i++){
        const product = document.createElement('a')
        manList.appendChild(product)
        console.log(product)
        product.innerHTML = `<img src="${manDB[i].src}" alt="${manDB[i].name}">`
        product.innerHTML += `<span class="name">${manDB[i].name}</span>`
        product.innerHTML += `<span class="price">${(manDB[i].salePrice).toLocaleString('ko-kr')}원<del>${(manDB[i].rawPrice).toLocaleString('ko-kr')}원</del></span>`
    }
}