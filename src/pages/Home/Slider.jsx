import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

const Slider = () => {
  return (

    <div className="" data-aos="flip-right" data-aos-duration="1000">

      <Swiper 
      navigation={true}
      pagination={
        {clickable:true}
      }
       modules={[Navigation, Autoplay, Pagination]}
      loop={true}
      autoplay={{
        delay: 2000,
      }}
      >
        <SwiperSlide>
          <div className="slide slide1 " >
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/42dMyRQ/aerial-shot-city-buildings-toa-payoh-singapore-blue-sky.jpg)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">The Better Way to Buy Real-Estate</h1>
                  <p className="mb-5">Transforming dreams into luxurious realities. <br />
                  Exprience the epitome of luxury living. Elevating lifestyle, one exquisite property at a time</p>
                  <button className="btn btn-primary"> <Link to="/Details">Explore Properties</Link> </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2"><h1>  <div className="slide slide1">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3c828r8/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge.jpg)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">The Better Way to Buy Real-Estate</h1>
                  <p className="mb-5">Transforming dreams into luxurious realities. <br />
                  Exprience the epitome of luxury living. Elevating lifestyle, one exquisite property at a time</p>
                  <button className="btn btn-primary"> <Link to="/Details">Explore Properties</Link> </button>
                </div>
              </div>
            </div>
          </div></h1></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3">  <div className="slide slide1">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tB4fNFD/relaxation-pool-umbrella-lounge-sky.jpg)' }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">The Better Way to Buy Real-Estate</h1>
                  <p className="mb-5">Transforming dreams into luxurious realities. <br />
                  Exprience the epitome of luxury living. Elevating lifestyle, one exquisite property at a time</p>
                  <button className="btn btn-primary"> <Link to="/Details">Explore Properties</Link> </button>
                </div>
              </div>
            </div>
          </div></div>
        </SwiperSlide>
      </Swiper>

    </div>


  );
};

export default Slider;