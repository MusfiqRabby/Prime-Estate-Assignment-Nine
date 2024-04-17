import React, { useContext } from 'react';
import { FaGoogle, FaGithub  } from "react-icons/fa";
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { useLocation, useNavigate } from 'react-router-dom'

const SocialLogin = () => {
  
  const {googleLogin, githubLogin} = useContext(AuthContext)

   const navigate = useNavigate()
   const lacation = useLocation()
    const from = lacation?.state || "/";

    const handleSocialLoging = socialProvider =>{
        socialProvider()
        .then(result => {
          if(result.user){
            navigate(from)
          }
            // console.log(result.user)
            // // redirect("/")
        })
    }

  
    return (
        <>
        <div className='divider'>
        continue with
        </div>
        <div className='flex justify-around' >
            <button 
            onClick={() => handleSocialLoging(googleLogin)}
            className='btn btn-primary btn-outline btn-sm '> <FaGoogle></FaGoogle> </button>
            <button 
            onClick={() => handleSocialLoging(githubLogin)}
            className='btn btn-secondary btn-outline btn-sm '> <FaGithub></FaGithub> </button>
        </div>
        
        </>
    );
};

export default SocialLogin;