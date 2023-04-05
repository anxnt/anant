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
          <div className="myskills1" >
            <p> Javascript </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> HTML & CSS </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> React</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> Next JS</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> UI/UX Design</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> Figma </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="myskills1" >
            <p> Blender </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Skills;
