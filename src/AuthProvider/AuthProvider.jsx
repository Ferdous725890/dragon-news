import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = () => {
    const [user, setUser] = useState({
        name:'ferdous',
        email:"ferodus@gmail.com"
    })
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;



