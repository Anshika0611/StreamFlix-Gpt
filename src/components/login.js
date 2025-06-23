//rafce
import React from 'react'
import Header from './Header'
import {useState} from 'react'
import {checkValidation} from '../utilities/validation'
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utilities/userSlice';
import {UserIcon, BackgroundImage} from '../utilities/constants'; 

const Login = () => {
  const[isSignIn,setisSignIn]=useState(true);
  const[msg,setMsg]=useState(null)
  const dispatch=useDispatch(); 

  const ToggleSignInForm = () => {
    setisSignIn(!isSignIn) 
  } 
  const email=useRef(null) //hook used to get the value of input field by creating reference
  const password=useRef(null)
  const naam=useRef(null)

  const handleButtonClick = () => {
    //validate the form data here
     
     const nameValue=(!isSignIn)?naam.current.value:""; //if it is sign in, naam will be empty string
     
     
    const msg= checkValidation(email.current.value, password.current.value,nameValue);
     setMsg(msg);
     
     //sign in or sign up logic
     
     if(msg) return; //if there is an error message, return and do not proceed further 
      //create a new user
      if(!isSignIn){
        
        //signup logic
  createUserWithEmailAndPassword(
    auth, email.current.value, password.current.value)
      .then((userCredential) => {
   
        // user is Signed up 
   
        const user = userCredential.user;
    
        //update the user profile with name
    
        updateProfile(user, {
          displayName: nameValue, photoURL:UserIcon
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser; //get the current user details
        dispatch(addUser(
          {uid:uid,email:email,displayName:displayName,photoUrl:photoURL

          })); //add user to redux store        
        }).catch((error) => {
          setMsg(error.message);
         });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMsg(errorCode+"-"+errorMessage);
  });
  }
  else{
      //sign in logic
 signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMsg(errorCode+"-"+errorMessage);
  });
      }
  }
 return (
  <div className="relative w-screen min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage})` }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>

    {/* Header stays on top */}
    <div className="absolute top-0 left-0 right-0 z-10">
      <Header />
    </div>

    {/* Form Container */}
    <form
      onSubmit={(e) => e.preventDefault()}
      className="absolute z-20 bg-black bg-opacity-80 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-8 text-white rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h1 className="font-bold text-3xl py-4">
        {isSignIn ? "Sign In" : "Sign Up"}
      </h1>

      {!isSignIn && (
        <input
          ref={naam}
          type="text"
          placeholder="Enter Your Name"
          className="p-2 my-4 w-full text-white bg-gray-700 bg-opacity-50 rounded"
        />
      )}

      <input
        ref={email}
        type="text"
        placeholder="Email or phone number"
        className="p-2 my-4 w-full text-white bg-gray-700 bg-opacity-50 rounded"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="p-2 my-4 w-full text-white bg-gray-700 bg-opacity-50 rounded"
      />

      <p className="text-red-500 py-3">{msg}</p>

      <button
        type="submit"
        className="p-3 my-2 bg-red-700 w-full border rounded"
        onClick={handleButtonClick}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>

      <div className="flex items-center space-x-2 my-2">
        <input type="checkbox" />
        <label>Remember me</label>
      </div>

      <h3>
        <a
          href="#"
          className="text-white font-bold"
          onClick={ToggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign up now"
            : "Already a user? Sign In"}
        </a>
      </h3>
    </form>
  </div>
);

}

export default Login
