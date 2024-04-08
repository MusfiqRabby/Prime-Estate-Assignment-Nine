import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

const Slider = () => {
  return (

    <div>

      <Swiper>
        <SwiperSlide>
        <div className="slide slide1"><h1>slide1</h1></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide2"><h1>slide2</h1></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide3"><h1>slide3</h1></div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide slide4"><h1>slide4</h1></div>
        </SwiperSlide>
      </Swiper>

    </div>


  );
};

export default Slider;