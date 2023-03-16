var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,

    },
    pagination: {
      el: ".swiper-pagination",
    
      clickable: true,
    //   hideOnClick:true,
    },
  });