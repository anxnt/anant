import React from 'react'
import { useSwiper } from 'swiper/react'

export const Buttons = () => {
    const swiper = useSwiper();

    return (
    <div className='swiper-nav-btns' style={{display:"flex", alignItems:"center", position:"absolute"}}>
    <ion-icon name="caret-forward-outline" onClick={()=> swiper.slidePrev()} style={{}}></ion-icon>

    <ion-icon name="caret-back-outline" onClick={()=> swiper.slideNext()} style={{}}></ion-icon>
    </div>
  )
}
 
