
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider() 
const githubProvider = new GithubAuthProvider()

const FirebaseProvider = ({children}) => {

    // state 
    const [user, setUser] = useState(null)
    console.log(user)

    // create user 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
  
    
    // update user profile 
    const userProfile = (name, image) => {
        console.log(name, image)
      return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }


    // login in user
    const loginUser = (email, password) =>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // Github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // logout 
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }


    // observer 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUser(user)
            }
        })
    },[])




    const allValues = {user, createUser, loginUser, googleLogin, githubLogin, logOut, userProfile }

    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;