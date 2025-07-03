const bnrSwiper = new Swiper('.bnr_swiper',{
    autoplay:{delay:2000},
    slidesPerView:4,
    loop:true,
    pagination:{
        el:'.bnr_swiper .swiper-pagination',
        type:'progressbar',
    }
})
const sssSwiper = new Swiper('.sss_swiper',{
    slidesPerView:5,
    spaceBetween:42.5,
    scrollbar:{
        el:'.swiper-scrollbar',
    },
    pagination: {
        el:'.title_wrap .swiper-pagination',
        type: "fraction",
    },
    navigation:{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    }
})