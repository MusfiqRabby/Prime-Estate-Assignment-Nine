import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Real-Estate | Home</title>
            </Helmet>
          <h2 className="text-3xl font-poppins font-bold">This is home </h2>  
        </div>
    );
};

export default Home;