import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { useNavigate } from "react-router-dom";



const UpdateProfile = () => {
  
  // const { logOut, user } = useContext(AuthContext);

  // const redirect = useNavigate()
  // useEffect(() => {
  //     if (!user) {
  //         redirect("/login")
  //     }
  // }, [])
  const {} = useContext(AuthContext)
  const {logOut, user} = useContext(AuthContext);
  const redirect = useNavigate()
  useEffect(() => {
      if (!user) {
          redirect("/login")
      }
  }, [])
   
  
    return (
        <div>
            <Helmet>
                <title>Real-Estate | Update Profile</title>
            </Helmet>

        <div className="items-center text-center">
          <div>
          <img src={user?.photoURL || "https://i.ibb.co/cv8B8ws/19021605.jpg" } />
            </div> 
          <div>
         <button className="btn btn-sm  btn-ghost">{user?.displayName || 'user name not found'}</button>
            </div> 
        </div>

</div>
    );
};

export default UpdateProfile;