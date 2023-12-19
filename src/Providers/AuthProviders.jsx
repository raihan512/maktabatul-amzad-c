import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUserEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUserGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // if (currentUser && currentUser.email) {
      //   const loggedUser = { email: currentUser.email };

      //   fetch("http://localhost:5000/jwt", {
      //     method: "POST",
      //     headers: {
      //       "content-type": "application/json",
      //     },
      //     body: JSON.stringify(loggedUser),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       localStorage.setItem("maktabatul-amzad-token", data.token);
      //     });
      // }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    loading,
    user,
    setUser,
    createUserEmail,
    signinUserGoogle,
    signInUser,
    signoutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
