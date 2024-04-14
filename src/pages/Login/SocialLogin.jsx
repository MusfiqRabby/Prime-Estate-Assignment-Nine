import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';

import { useNavigate } from 'react-router-dom'

const SocialLogin = () => {
  
  const {googleLogin, githubLogin} = useContext(AuthContext)

  const redirect = useNavigate()

    const handleSocialLoging = socialProvider =>{
        socialProvider()
        .then(result => {
            console.log(result.user)
            redirect("user-profile")
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
            className='btn btn-primary btn-outline btn-sm '>Google</button>
            <button 
            onClick={() => handleSocialLoging(githubLogin)}
            className='btn btn-secondary btn-outline btn-sm '>Github</button>
        </div>
        
        </>
    );
};

export default SocialLogin;