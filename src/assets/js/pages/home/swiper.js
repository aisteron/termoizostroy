import { loadCSS, onloadCSS, qs } from "../../libs"

export let swiper = {
  async load() {
    return new Promise(resolve => {
      let script = document.createElement("script")
      script.src = "/vendors/swiper/swiper-bundle.min.js"
      qs(".scripts-area").appendChild(script)

      script.onload = () => {
        let style = loadCSS("/vendors/swiper/swiper-bundle.min.css")
        onloadCSS(style, () => {
          resolve(true)
        })
      }
    })

  },

  init() {
    let autoplay = {}
    process.env.NODE_ENV == 'development'
    ? autoplay = false
    : autoplay = {
      delay: 2500,
      disableOnInteraction: true,
    }
    var swiper = new Swiper(".swiper", {
      autoplay: autoplay,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) =>
          `<span class="${className}"></span>`
        ,
      },
    });
  },

  permit_init() {
    var swiper = new Swiper(".permit-swiper", {
      navigation: {
        nextEl: ".swiper-button-next.permit",
        prevEl: ".swiper-button-prev.permit",
      },
      slidesPerView: 3,
      spaceBetween: 30,
    });
  },

  interest_init() {
    if(innerWidth >= 1170){
      var swiper = new Swiper(".interest-swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
      });
    }
    
  }
}