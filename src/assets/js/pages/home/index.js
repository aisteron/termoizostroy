import { qs } from "../../libs"
import { swiper } from "./swiper"

export async function Home(){
  if(!qs('.index-page')) return
  await swiper.load_swiper()
  swiper.init_swiper()
}