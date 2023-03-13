import { loadCSS, onloadCSS, qs } from "../../libs"

export let swiper = {
  async load_swiper() {
    return new Promise(resolve => {
      let script = document.createElement("script")
      script.src = "/vendors/swiper/9swiper-bundle.min.js"
      qs(".scripts-area").appendChild(script)

      script.onload = () => {
        let style = loadCSS("/vendors/swiper/9swiper-bundle.min.css")
        onloadCSS(style, () => {
          resolve(true)
        })
      }
    })

  },

  init_swiper() {
    var swiper = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          
          //return '<span class="' + className + '">' + (index + 1) + "</span>";
          return `<span class="${className}"></span>`;
        },
      },
    });
  }
}