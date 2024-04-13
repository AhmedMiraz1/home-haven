import Banner from "../components/Banner";
import { useLoaderData} from "react-router-dom";
import HouseCard from "../components/HouseCard";


const Home = () => {
    const houses = useLoaderData()
    console.log(houses);
    return (
        <div>
            <Banner/>

            <div className="text-center my-24">

                <h1 className="text-xl md:text-2xl lg:text-4xl font-medium md:font-semibold lg:font-bold text-lime-950">Tranquil Retreats for Peaceful Escapes and Relaxation</h1>
                <p className="mt-8 mb-24 text-base md:text-lg lg:text-xl font-medium text-slate-500">Discover the epitome of urban living in luxurious downtown lofts. Breathtaking city views and unparalleled convenience await.</p>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {
                    houses.map(house => 
                    <HouseCard
                     key={house.id}
                     house={house }/>)
                }
              </div>
            
        </div>
    );
};

export default Home;