import {qs,loadCSS,onloadCSS, load_toast} from '../libs';
import { swiper } from '../pages/home/swiper';

export async function Ui(){

  open_phone_mobile_menu()
  open_mobile_menu()
  open_prods_in_mobile_menu()
  scroll_top_form()

  form_send()

  qs('[data-fancybox]')
  && fancy.load().then(_ => fancy.init())

  qs('.permits')
  && swiper.load().then(_ => swiper.permit_init())

  qs('.interest')
  && swiper.load().then(_ => swiper.interest_init())


}

function open_phone_mobile_menu(){
  qs('img.phone-big').addEventListener('click', event => {
    qs('header .cta').classList.toggle('open')
  })

  qs('.cta img.close').addEventListener("click", event => {
    qs('header .cta').classList.remove('open')
  })

}

function open_mobile_menu(){
  qs('img.menu-icon').addEventListener("click", event => {
    qs('.mobile-menu-wrap').classList.toggle('open')
  })

  qs('.mobile-menu-wrap img.close').addEventListener('click', event => {
    qs('.mobile-menu-wrap').classList.remove('open')
  })

  document.addEventListener("click", event =>{
    if(event.target == qs('img.menu-icon')) return
    if(event.target == qs('.mobile-menu-wrap .inner')) return
    if(qs('.mobile-menu-wrap .inner').contains(event.target)) return
    qs('.mobile-menu-wrap').classList.remove('open')
  })

}

function open_prods_in_mobile_menu(){
  if(!qs('ul.prods')) return

  qs('li.c').addEventListener('click', event => {
    qs('li.c').classList.toggle('open')
  })
}

let fancy = {
  async load(){
    return new Promise(resolve => {
      let script = document.createElement("script")
      script.src = "/vendors/fancy/fancybox.umd.js"
      qs(".scripts-area").appendChild(script)

      script.onload = () => {
        let style = loadCSS("/vendors/fancy/fancybox.css")
        onloadCSS(style, () => {
          resolve(true)
        })
      }
    })
  },
  init(){
    Fancybox.bind("[data-fancybox]");
  }
}

function scroll_top_form(){
  
  if(!qs('header .redbutton')) return
  if(!qs('#order')) return
  qs('header .redbutton').addEventListener("click", event => {

    qs('#order').scrollIntoView({ behavior: 'smooth', block: 'center'})
  })
}

function form_send(){
  if(!qs('#order')) return
  let obj = {
    name: qs('[name="name"]').value,
    phone: qs('[name="phone"]').value,
  }
  qs("#order form").addEventListener("submit", event => {
    event.preventDefault()
    
    fetch("/api/order",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(obj)
    })
    .then(r => r.json())
    .then(r => {
      if(r.success){
        load_toast()
        .then(_ => {
          new Snackbar("Успешно!")
          qs('[name="name"]').value = ''
          qs('[name="phone"]').value = ''
        })
        
      } else {
        load_toast()
        .then(_ => new Snackbar("Произошла ошибка!"))
        
      }
    })
  })

}