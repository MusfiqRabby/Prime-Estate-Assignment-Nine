import { Helmet } from "react-helmet-async";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Real-Estate | Home</title>
            </Helmet>
          <Slider></Slider>
        </div>
    );
    // <div class="swiper-slide">Slide 1</div>
};

export default Home;