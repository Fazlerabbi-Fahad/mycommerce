import React, { createContext, useState } from 'react';
import app from "./../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const registerWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authinfo = {
        user,
        createUser,
        signInWithPopup,
        logIn,
        registerWithGoogle
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;