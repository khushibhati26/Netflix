import React, { useState, useRef } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidate } from "../utils/validate";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGOURL, USERURL } from "../utils/constant";
import Footer from "./Footer";

const Login = () => {
  const dispatch = useDispatch();
  const [err, setErr] = useState(null);
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
 

  const handleButton = (e) => {
    e.preventDefault();
    console.log('handleButton called');

    const msg = checkValidate(email.current.value, password.current.value);
    setErr(msg);
    if (msg) return;

    const userCredentials = {
      email: email.current.value,
      password: password.current.value,
    };

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USERURL,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            
            })
            .catch((error) => {
              console.error('Profile update error:', error);
              setErr(error.message);
            });
        })
        .catch((error) => {
          console.error('Signup error:', error);
          setErr(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .then((userCredential) => {
          console.log('User signed in:', userCredential.user);
         
        })
        .catch((error) => {
          console.error('Signin error:', error);
          setErr(`${error.code} - ${error.message}`);
        });
    }
  };

  const Toggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="h-screen">
      <Header />
      <div className="absolute w-full h-screen brightness-50">
        <img
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
          src={LOGOURL}
          alt="background"
        />
      </div>
      <form
        className="absolute w-3/12 h-auto bg-opacity-80 bg-black my-40 mx-auto right-0 left-0 p-10  pt-10"
        onSubmit={handleButton}
      >
        <h1 className="text-3xl text-white font-bold ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            name="name"
            className="w-full p-2  py-4 mt-4  bg-gray-50 bg-opacity-10 text-white font-medium"
            type="text"
            placeholder="Username"
          />
        )}
        <input
          ref={email}
          name="email"
          className="w-full p-2  py-4 mt-4  bg-gray-50 bg-opacity-10 text-white font-medium"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          name="password"
          className="w-full p-2 py-4 mt-4  bg-gray-50 bg-opacity-10 font-medium"
          type="password"
          placeholder="Password"
        />
        {err && <p className="text-red-500 font-semibold">{err}</p>}
        <button className="w-full p-2  py-3 m-5 ml-1 bg-red-700  text-white font-semibold" type="submit">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={Toggle} className="text-white py-5 cursor-pointer text-center">
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}
        </p>
      </form>
      </div>
      <Footer/>

    </div>
  );
};

export default Login;
