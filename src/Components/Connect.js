import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function Skills() {
  return (
    <div className="skillscontainer">
      <Swiper
        direction='vertical'
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        style={{ width: "450px", height: "100px", display: "flex",  justifyContent: "center"}}
      >

        <SwiperSlide>
          <div className="myskills" >
            <a href='https://twitter.com/anant715' target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"white", margin:"auto"}}> Twitter </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="myskills" >
            <a href='https://peerlist.io/anant7' target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"white", margin:"auto"}}> Peerlist </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills" >
          <a href='https://instagram.com/anant7' target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"white", margin:"auto"}}> Instagram </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills" >
          <a href='https://www.linkedin.com/in/anant-b68484218/' target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"white", margin:"auto"}}> Linkedin </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills" >
          <a href='https://www.behance.net/anantkumar11' target='_blank' rel="noreferrer" style={{textDecoration:"none", color:"white", margin:"auto"}}> Behance </a>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Skills;

