const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const count = document.querySelector('.count p')
const totalPrice = document.querySelector('.total_price p em')
let countRaw = 1;
let totalPriceWon = 39900
count.innerHTML = countRaw;
totalPrice.innerHTML = totalPriceWon.toLocaleString('ko-kr');
minusBtn.addEventListener('click',()=>{
    if(countRaw <= 1){
        alert('1개 이상 선택이 필요합닏다.')
    }else{
        countRaw--;
        count.innerHTML = countRaw;
        
        totalPrice.innerHTML = (totalPriceWon * countRaw).toLocaleString('ko-kr');
    }
})
plusBtn.addEventListener('click',()=>{
    countRaw++
    count.innerHTML = countRaw;
    totalPrice.innerHTML = (totalPriceWon * countRaw).toLocaleString('ko-kr');
    
})
const option = document.querySelector('#product_option')
const cartBtn = document.querySelector('#cart')
const buyBtn = document.querySelector('#buy')
cartBtn.addEventListener('click',()=>{
    if(option.value == ''){
        alert('옵션을 선택해주세요.')
    }else{
        alert('장바구니에 담았습니다.')
    }
})
buyBtn.addEventListener('click',()=>{
    if(option.value == ''){
        alert('옵션을 선택해주세요.')
    }else{
        alert('알수 없는 오류가 발생하였습니다. 추후에 다시 시도해주세요')
    }
})
const leftImgs = document.querySelectorAll('.left_img img')
const rightImg = document.querySelector('.right_img img')
for(let i = 0 ; i < 5 ; i++){
    function imgChange(ind){
        leftImgs[ind].addEventListener('mouseover',()=>{
            return rightImg.src = leftImgs[ind].src;
        })
    }
    imgChange(i);
}
const moreImg = document.querySelector('.more_img')
const viewMore = document.querySelector('.view_more')
viewMore.addEventListener('click',(e)=>{
    moreImg.style.height = 'max-content'
    e.preventDefault()
    viewMore.style.display = 'none'
})