import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";


const Register = () => {

    const {createUser, userProfile} = useContext(AuthContext);

    const {register, handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => 
      {
        console.log(data)
        // createUser and update profile 
        const {email, password, 
            photoURL, 
            fullName} = data
        createUser(email, password)
        .then(() =>{
            userProfile( fullName, photoURL)
        })

      }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
    <div className="text-center">
       <h1 className="text-5xl font-bold">Please Register</h1>
     </div>
     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
     <div className="card-body">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
         <label className="label">
         <span className="label-text">Name</span>
          </label>
        <input type="text" name="name" placeholder="Name" className="input input-bordered" {...register("fullName", { required: true })} />
        {errors.fullName && <span className="text-red-600">This field is required</span>}
          </div>
         <div className="form-control">
          <label className="label">
         <span className="label-text">Photo URL</span>
        </label>
         <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" {...register("photoURL")} />
          </div>
        <div className="form-control">
          <label className="label">
        <span className="label-text">Email</span>
        </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
        <label className="label">
           <span className="label-text">Password</span>
         </label>
         <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
         {errors.password && <span className="text-red-600">This field is required</span>}
         <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
         <div className="form-control mt-6">
         <button className="btn btn-primary">Register</button>
       </div>
         </form>
         <p>Already have an account?<Link className="text-blue-600 font-bold" to='/login'> Login </Link>  </p> 
      </div>
     </div>
     </div>
    </div> 
    );
};

export default Register;