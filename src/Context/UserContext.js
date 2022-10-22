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

  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //login with created user
  const userLoginIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update User Profile
  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //   send Email verifiaction
  const emailVerification = () => {
    sendEmailVerification(auth.currentUser);
  };

  // sign in with google
  const signInWithGoogle = (provider) => {
    return signInWithPopup(auth, provider);
  };

  // handle logout
  const systemLogOut = () => {
    signOut(auth);
  };

  // send password reset email
  const passwordResetSystem = (email) => {
    sendPasswordResetEmail(auth, email);
  };
  //   hold user ,update user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
