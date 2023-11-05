let swiperProjects = new Swiper(".projets_global", {
    loop: true,
    spaceBetween:24,
    navigation: {
        nextEl: ".swiper-button-next",
      
        prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    // mousewheel: true,
    // keyboard: true,

    
    // breakpoints: {
    //     1200: {
    //       slidesPerView: 2,
    //       spaceBetween: 10,
    //     },
    //   },
  });