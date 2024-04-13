const HouseCard = ({ house }) => {
  const { image, title, price, status, area, location, description } = house;
  return (
    <div>
      <div className=" p-6 rounded-lg h-full shadow-2xl">
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
            <button className="btn btn-outline bg-green-500 border-none text-white text-lg md:text-xl font-medium md:font-semibold">View Property</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
