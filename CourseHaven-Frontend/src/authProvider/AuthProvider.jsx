import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import auth from "../firebase/Firebase.config";
import { useEffect, useState } from "react";
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    const userSignOut = () => {
        setIsLoading(true);
        return signOut(auth);
    }


    //Saved in DB
    // const savedUser = async (info) => {
    //     const newUser = {
    //         email: info,
    //         role: 'student',
    //     }

    // }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setIsLoading(false)
            const userEmail = { email: currentUser?.email }

            if (currentUser) {
                const res = await  axios.post('http://localhost:5000/jwt', userEmail)
                console.log(res.data)
            }


        });

        return () => {
            unSubscribe();
        }

    }, [])

    console.log(user)


    const info = {
        createNewUser,
        userSignIn,
        updateUserProfile,
        userSignOut,
        user,
        isLoading,
        setIsLoading
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
            {/* {!isLoading && children} */}
        </AuthContext.Provider>
    );
};

// PropTypes validation
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;