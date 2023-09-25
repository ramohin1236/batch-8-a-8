import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Cart from "./Card/Cart";


const Home = () => {
    const datas = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
                {
                    datas.map(data=><Cart 
                    
                    key={data.id} data={data}>

                    </Cart>)
                }
            </div>
        </div>
    );
};

export default Home;