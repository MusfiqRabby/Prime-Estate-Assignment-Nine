import React, { useContext } from 'react';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   
        const {user} = useContext(AuthContext)
        const location = useLocation();

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