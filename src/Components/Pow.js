import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCards, Pagination, Navigation } from 'swiper';

function Pow() {
  return (
    <div className="container">
      <Swiper
        effect={'cards'}
        grabCursor={false}
        centeredSlides={true}
        loop={false}
        slidesPerView={3}
        cardsEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCards, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="taketherapy" style={{display:"flex", justifyContent:"center", alignItems:"center", height:"275px", width:"410px" }}>
          <a href='https://www.behance.net/gallery/162367405/Take-Therapy' target='_blank' rel='noreferrer' ><img className="project1" style={{height:"100%", width:"100%", objectFit:"cover", borderRadius:"20px", cursor:"pointer" }} src="/Images/1.png" alt="slide_image" /> </a>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className="gradientanim" style={{height:"275px", width:"410px", borderRadius:"30px" }}>
          <img  className="project2" style={{height:"100%", width:"100%", objectFit:"cover", borderRadius:"20px" }}   src="/Images/7.png" alt="slide_image" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="moresoon" style={{height:"275px", width:"410px", borderRadius:"30px"}}>
          <img  className="project3" style={{height:"100%", width:"100%", objectFit:"cover", borderRadius:"20px" }}  src="/Images/8.png" alt="slide_image" />
        </div>   
         </SwiperSlide>        
      </Swiper>
    </div>
  );
}

export default Pow;