import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);

  // update profile
  const handelUpdateProfile = async (e) => {
    e.preventDefault();
    
    const form = new FormData(e.currentTarget);
    e.target.reset()
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(name, photo);
    const profile = await updateUserProfile(name, photo);

    return profile;
  };

  return (
    <div className="my-24">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="shadow-2xl p-4 rounded-xl">
          <h1 className="text-center font-medium md:font-bold lg:font-extrabold text-xl md:text-2xl lg:text-3xl text-green-600 my-8 ">
            Update profile{" "}
          </h1>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-stone-400 mx-auto my24">
            <form onSubmit={handelUpdateProfile} className="card-body">
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
                <button className="btn btn-secondary text-xl">
                  save change{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl p-8 shadow-2xl">
          <h1 className="text-center font-medium md:font-bold lg:font-extrabold text-xl md:text-2xl lg:text-3xl text-green-600 my-8 ">
            Current profile{" "}
          </h1>
          <img className="rounded-full w-32  " src={user?.photoURL} alt="" />

          <p className="mt-12 mb-8 text-lg md:text-xl font-medium md:font-bold ">
            Name : {user?.displayName}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
