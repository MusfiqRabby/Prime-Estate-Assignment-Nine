import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../FirebaseProvider/FirebaseProvider';
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {

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
                <title>Real-Estate | User Profile</title>
            </Helmet>
             <div className='text-center p-8 '>
                <div>
                    Photo:
                </div>
                <div>
                    Name:
                </div>
                <div>
                    Email:
                </div>

            </div> 
        </div>

    );
};

export default UserProfile;