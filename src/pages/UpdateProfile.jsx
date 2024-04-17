// import { useContext } from "react";
import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../provider/AuthProvider";
// import {  useNavigate } from "react-router-dom";


const UpdateProfile = () => {
//   const {updateUserProfile}= useContext(AuthContext)
//   const navigate = useNavigate();
//   const handelUpdateProfile = e =>{
// e.preventDefault()
// const form = new FormData(e.currentTarget);
// const name = form.get("name");
// const photo = form.get("photo");
// const email = form.get("email");
// console.log(name,photo,  email, );
// updateUserProfile(name, photo)
// .then(() => {
//   navigate("/");
// });
// .catch()
//   }
  return (
    <div className="my-24">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <h1 className="text-center font-medium md:font-bold lg:font-extrabold text-xl md:text-2xl lg:text-3xl text-green-600 my-8">
            Update profile{" "}
          </h1>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-stone-400 mx-auto my24">
            <form //onSubmit={handelUpdateProfile()}
             className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  placeholder=" Enter you name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>{" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder=" Enter your photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">save change </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h1 className="text-center font-medium md:font-bold lg:font-extrabold text-xl md:text-2xl lg:text-3xl text-green-600 my-8">
            Current profile{" "}
          </h1>
          <img className="rounded-full " src="" alt="" />

          <p className="mt-12 mb-8">Name : </p>
          <p>Email : </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
