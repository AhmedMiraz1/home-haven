import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const HouseCard = ({ house }) => {
  const { image, title, price, status, area, location, description, id } = house;
  return (
    <div>
      <div data-aos="zoom-in-down"  data-aos-duration="1000" className=" p-6 rounded-lg h-full shadow-2xl">
        <div>
          <img
            className="rounded-lg w-full md:h-[20vh] lg:h-[20vh]"
            src={image}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-center font-medium md:font-semibold lg:font-bold text-lg md:text-xl lg:text-2xl my-6 text-slate-600">
            {title}
          </h1>
          <p className="text-stone-500 text-base md:text-lg  font-medium">{description.slice(0,100)}</p>
          <div className="flex justify-between text-lg md:text-xl font-medium md:font-semibold my-6 text-orange-800">
            <p> Price : {price}$</p>
            <p> Status : {status}</p>
          </div>
          <div className=" my-6 text-lg md:text-xl font-medium md:font-semibold text-orange-800">
            <p> Area :{area}</p>
            <p className="my-6"> Location : {location}</p>
          </div>
          <div className="text-center">
            <Link to ={`/house/${id}`}>
            <button className="btn btn-outline bg-green-500 border-none text-white text-lg md:text-xl font-medium md:font-semibold">View Property</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;

HouseCard.propTypes ={
  house:PropTypes.object
}
