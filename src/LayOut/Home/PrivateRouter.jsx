import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loding from './Loding';

const PrivateRouter = ({children}) => {
    const {user, loding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loding){
       return <Loding></Loding>
    }
    if(user && user?.email ){
        return children
    }
    return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>
};

export default PrivateRouter;