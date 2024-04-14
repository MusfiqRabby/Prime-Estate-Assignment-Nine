import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { Helmet } from "react-helmet-async";

import {useNavigate} from 'react-router-dom'

const Login = () => {
   
   const {loginUser} = useContext(AuthContext)

   
   const {register, handleSubmit,
    formState: { errors },
  } = useForm();

  const redirect = useNavigate()

  const onSubmit = (data) => 
  {
    const {email, password} = data;
        loginUser(email, password)
        .then(result => {
            redirect("/user-profile")
        })
        .catch(error =>{
            console.log(error)
        })

  }
  
   
    return (
          <div className="hero min-h-screen bg-base-200">
            <Helmet>
              <title>Real-Estate | Login </title>
            </Helmet>
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login Now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.Email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
          {errors.Password && <span className="text-red-600">This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
         <p>Don't have an account <Link className="text-blue-600 font-bold" to='/register'> Register </Link> </p> 
         
         <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div> 
    );
};

export default Login;