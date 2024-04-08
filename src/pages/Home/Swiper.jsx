import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from 'swiper/modules';

const Swiperr = () => {
    return (
     


<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/42dMyRQ/aerial-shot-city-buildings-toa-payoh-singapore-blue-sky.jpg " className="w-full object-cover rounded-lg  lg:h-[90vh]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src=" https://i.ibb.co/3c828r8/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fNYbT84/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/tB4fNFD/relaxation-pool-umbrella-lounge-sky.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

     /**{/* <Swiper 
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
           >
            <SwiperSlide> <div><img src="https://i.ibb.co/42dMyRQ/aerial-shot-city-buildings-toa-payoh-singapore-blue-sky.jpg" /></div></SwiperSlide>

            <SwiperSlide> <div><img src="https://i.ibb.co/3c828r8/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg" /></div></SwiperSlide>

            <SwiperSlide> <div><img src="https://i.ibb.co/fNYbT84/villa-house-model-key-drawing-retro-desktop-real-estate-sale-concept.jpg" /></div></SwiperSlide>

            <SwiperSlide> <div><img src="https://i.ibb.co/tB4fNFD/relaxation-pool-umbrella-lounge-sky.jpg" /></div></SwiperSlide>
           </Swiper>
    */  
           
    );
};

export default Swiperr;