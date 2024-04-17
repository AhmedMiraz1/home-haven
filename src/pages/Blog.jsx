import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div className="my-24">
            <Helmet>
            <title>
              Blog
            </title>
           
          </Helmet>
        <div>
        <h2 className="text-center font-semibold lg:font-extrabold underline text-2xl lg:text-3xl text-green-700 my-9">Welcome to Haven Home</h2>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Single-Family Homes :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Explore our selection of single-family homes, perfect for individuals and families seeking spacious living and a sense of privacy. From charming bungalows to luxurious estates, find the perfect home to make lasting memories.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Townhouses :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Discover the convenience and community feel of townhouse living. Browse through our range of townHomes offering modern amenities and stylish designs, ideal for urban dwellers and those looking for low-maintenance living.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Apartments :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Experience the ultimate in urban living with our selection of apartments. From sleek studio apartments to spacious penthouses, find the perfect rental unit to suit your lifestyle and budget.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Student Housing :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Explore our range of student housing options designed to provide comfortable and convenient living spaces for students. From on-campus dormitories to off-campus apartments, find the perfect accommodation for your academic journey.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Senior Living Communities :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Discover vibrant senior living communities offering a range of amenities and services tailored to meet the needs of older adults. From independent living to assisted living and memory care, find the perfect community for your retirement lifestyle.
                </p>
            </div>
            <div className="mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-green-500 underline my-5">Vacation Rentals :</h3>
                <p className="text-slate-700 font-semibold font-mono my-4 ">
                    Plan your next getaway with our selection of vacation rentals. Whether you are  seeking a beachfront villa, a cozy mountain cabin, or a chic city apartment, we have the perfect vacation home for your next adventure.
                </p>
            </div>
        </div>
    </div>
    );
};

export default Blog;