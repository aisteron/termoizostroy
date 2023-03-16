import { swiper } from "../home/swiper";
import { qs } from "../../libs";

export async function About(){
  if(!qs('.about-page')) return

  if(qs('.permits')){
    await swiper.load_swiper()
    swiper.permit_swiper()
  }
}