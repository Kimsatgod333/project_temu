const bnrSwiper = new Swiper('.bnr_swiper',{
    autoplay:{delay:2000},
    slidesPerView:4,
    loop:true,
    scrollbar:{
        el:'.bnr_swiper .swiper-scrollbar',
    }
})
const sssSwiper = new Swiper('.sss_swiper',{
    autoplay:{delay:2000},
    slidesPerView:5,
    spaceBetween:42.5,
    loop:true,
})