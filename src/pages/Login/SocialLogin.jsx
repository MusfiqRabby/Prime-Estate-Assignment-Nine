import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';

const SocialLogin = () => {
  
  const {googleLogin, githubLogin} = useContext(AuthContext)

    const handleSocialLoging = socialProvider =>{
        socialProvider()
        .then(result => {
            console.log(result.user)
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