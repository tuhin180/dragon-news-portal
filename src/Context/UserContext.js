import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthUserContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with created user
  const userLoginIn = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  //update User Profile
  const updateUserProfile = (name, photoUrl) => {
    setLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //   send Email verifiaction
  const emailVerification = () => {
    setLoading(true);

    sendEmailVerification(auth.currentUser);
  };

  // sign in with google
  const signInWithGoogle = (provider) => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  // handle logout
  const systemLogOut = () => {
    setLoading(true);

    signOut(auth);
  };

  // send password reset email
  const passwordResetSystem = (email) => {
    setLoading(true);

    sendPasswordResetEmail(auth, email);
  };
  //   hold user ,update user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  const authInfo = {
    user,
    createUser,
    userLoginIn,
    updateUserProfile,
    emailVerification,
    signInWithGoogle,
    systemLogOut,
    passwordResetSystem,
    loading,
  };
  return (
    <div>
      <AuthUserContext.Provider value={authInfo}>
        {children}
      </AuthUserContext.Provider>
    </div>
  );
};

export default UserContext;
