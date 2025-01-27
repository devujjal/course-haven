import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import auth from "../firebase/Firebase.config";

const AuthProvider = ({ children }) => {

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const info = {
        createNewUser
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

// PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;