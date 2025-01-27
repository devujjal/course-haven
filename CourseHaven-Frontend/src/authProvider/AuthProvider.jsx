import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import auth from "../firebase/Firebase.config";
import { useState } from "react";

const AuthProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const createNewUser = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userSignIn = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }


    const info = {
        createNewUser,
        userSignIn,
        updateUserProfile,
        isLoading,
        setIsLoading
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