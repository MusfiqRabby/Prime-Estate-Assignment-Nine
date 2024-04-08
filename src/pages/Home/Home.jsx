import { Helmet } from "react-helmet-async";
import Swiper from "./Swiper";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Real-Estate | Home</title>
            </Helmet>
            <Swiper></Swiper> 
        </div>
    );
};

export default Home;