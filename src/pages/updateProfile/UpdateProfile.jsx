import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {

    const { } = useContext(AuthContext)
    const { logOut, user } = useContext(AuthContext);
    const redirect = useNavigate()
    useEffect(() => {
        if (!user) {
            redirect("/login")
        }
    }, [])


    return (
        <div>
            <Helmet>
                <title>Prime-Estate | Update Profile</title>
            </Helmet>

            <div className="items-center text-center bg-slate-200 rounded-lg">
                <div className="">
                <form className="card-body w-full max-w-sm shadow-2xl bg-base-100 m-auto my-8">

                <div >
                    <img className="m-auto" src={user?.photoURL || "https://i.ibb.co/cv8B8ws/19021605.jpg"} />
                </div>
                <div>
                    <p className="font-bold">Name: {user?.displayName || 'user name not found'}</p>
                </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
            <button  className="btn btn-primary my-5">Update Profile</button>
        </div>
        </form>
        </div>
                <div>
                    <button className="font-bold"></button>
                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;