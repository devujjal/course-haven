import { createContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
    const auth = createContext(AuthContext)
    return auth;
};

export default useAuth;