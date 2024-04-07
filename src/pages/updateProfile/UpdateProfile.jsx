import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const UpdateProfile = () => {
  
    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }
  
    return (
        <div>
            <Helmet>
                <title>Real-Estate | Update Profile</title>
            </Helmet>

    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onClick={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
         <p>Don't have an account <Link className="text-blue-600 font-bold" to='/user profile'> UserProfile </Link>  </p> 
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default UpdateProfile;