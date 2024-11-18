import { createContext, useEffect, useState } from "react";
import app from "../../Firebase.init";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)
    console.log(loding, user);
    const createNewUser = (email,password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
  
   
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoding(false)
        })
        return()=>{
            unsubcribe()
        }
    },[])

    const logOut = () =>{
        setLoding(true)
        return signOut(auth,)
        
    }
    const userLogIn = (email, password) =>{
        setLoding(true)
        signInWithEmailAndPassword(auth, email, password)

    }


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn,
        loding,
    }
   
    return (
        <AuthContext.Provider value={authInfo} >
            {
                 children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;



