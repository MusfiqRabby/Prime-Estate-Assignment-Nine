import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import RealEstate from "./RealEstate";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Real-Estate | Home</title>
            </Helmet>
            <Slider></Slider>
            <RealEstate></RealEstate>

        </div>



    );
};

export default Home;