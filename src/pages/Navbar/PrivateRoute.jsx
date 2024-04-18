import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
        const {user, loading} = useContext(AuthContext)
        const location = useLocation();

        if(loading){
            return <div className='text-center items-center'>  
            <span className="loading loading-bars loading-lg "></span>
        </div>
            
        }

        if(!user){
            return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
        }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
// https://assignment9-firebase-auth.web.app/