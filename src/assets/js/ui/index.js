import {qs} from '../libs';

export function Ui(){
  open_phone_mobile_menu()
  open_mobile_menu()
  open_prods_in_mobile_menu()
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