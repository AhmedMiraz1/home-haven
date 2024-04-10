import { Link } from "react-router-dom";


const Login = () => {

    const handelLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form);
    }
    return (
        <div className="border-4 w-full md:w-3/4 lg:w-1/2 mx-auto my-20 rounded-xl bg-stone-300 shadow-2xl shadow-blue-200 ">
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mt-8 underline">Please LogIn</h1>
            <form onSubmit={handelLogin} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-medium">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-medium">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
        <button className="btn bg-blue-600 text-slate-200 font-medium text-xl">Log In</button>
        </div>
      </form>
      <p className="text-center mb-6 text-lg font-medium">Do not have an account please? <Link to='/register' className="text-xl font-bold text-blue-600 btn-link">Register</Link></p>
        </div>
    );
};

export default Login;