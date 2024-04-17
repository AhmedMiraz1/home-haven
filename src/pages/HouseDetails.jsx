import { useParams, useLoaderData } from "react-router-dom";
import 'animate.css';
import { Helmet } from "react-helmet-async";

const HouseDetails = () => {
  const houseDetails = useLoaderData();
  const { id } = useParams();
  const inInt = parseInt(id);
  const houseDetail = houseDetails.find(
    (houseDetail) => houseDetail.id === inInt
  );

  const {
    image,
    title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = houseDetail;
  return (
    <div>
       <Helmet>
            <title>
            House Details
            </title>
           
          </Helmet>
      <div className="flex flex-col gap-8 justify-between my-24 p-8 shadow-2xl rounded-xl">
        <div className="w-full  animate__animated animate__animate__backInLeft animate__delay-1000">
          <img className="rounded-xl shadow-2xl p-2  h-full  animate__animated animate__backInLeft animate__delay-2000" src={image} alt="" />
        </div>
        <div className="w-full  h-full  animate__animated animate__backInRight animate__delay-2000">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-normal md:font-medium  lg:font-bold text-green-800">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600 my-6">{description}</p>
            <div className="flex justify-between my-6">
                <p className="font-bold text-lg ">Home category : <span className="font-normal text-orange-900"> {segment_name}</span> </p>
            <p className="font-bold text-lg ">Price : <span className="font-normal text-orange-900">{price}$</span></p>
            </div>
            <div className="flex justify-between my-6">
                <p className="font-bold text-lg" >Status : <span className="font-normal text-orange-900">{status}</span></p>
                <p className="font-bold text-lg">Area : <span className="font-normal text-orange-900">{area}</span></p>
            </div>
            <p className="font-bold text-lg"> Location : <span className="font-normal text-orange-900">{location}</span></p>

            <p className="text-[#131313] font-bold mt-8 text-lg ">
            Facilities : 
            {facilities.map((facilities, idx) => (
              <span
                className="mr-3 text-green-600 bg-[#23BE0A0D] px-3 py-2 rounded-xl font-medium shadow-2xl"
                key={idx}
              >
              {facilities}
              </span>
            ))}
          </p>

        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
