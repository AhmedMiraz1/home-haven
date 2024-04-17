import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <h1>Update profile </h1>

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-stone-400 mx-auto my24">

        
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
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
              placeholder="email"
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
              placeholder="email"
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
  );
};

export default UpdateProfile;
