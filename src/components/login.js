//rafce
import React from 'react'
import Header from './Header'
import {useState} from 'react'
import {checkValidation} from '../utilities/validation'
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilities/userSlice';

const Login = () => {
  const[isSignIn,setisSignIn]=useState(true);
  const[msg,setMsg]=useState(null)
  const navigate=useNavigate()
  const dispatch=useDispatch(); 

  const ToggleSignInForm = () => {
    setisSignIn(!isSignIn) 
  } 
  const email=useRef(null) //hook used to get the value of input field by creating reference
  const password=useRef(null)
  const naam=useRef(null)

  const handleButtonClick = () => {
    //validate the form data here
     
     console.log(email.current.value);
     console.log(password.current.value);
     const nameValue=(!isSignIn)?naam.current.value:""; //if it is sign in, naam will be empty string
     
     
    const msg= checkValidation(email.current.value, password.current.value,nameValue);
     setMsg(msg);
     //sign in or sign up logic
     if(msg) return; //if there is an error message, return and do not proceed further 
      //create a new user
      if(!isSignIn){
        
        //signup logic
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
   
        // user is Signed up 
   
        const user = userCredential.user;
    
        //update the user profile with name
    
        updateProfile(user, {
          displayName: nameValue, photoURL:"https://cdn-icons-png.flaticon.com/512/149/149071.png"
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser; //get the current user details
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoURL})); //add user to redux store
              
           navigate("/browse")
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
    console.log(user);
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setMsg(errorCode+"-"+errorMessage);
  });
      }
  }
  return (
    <div>
      <div className='absolute bg-black bg-opacity-50 '>
      <Header/>
      <img className='w-full h-full'
      alt="bg logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" />
      </div>
      <form onSubmit={(e)=>e.preventDefault() } className="absolute bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 p-10 text-white rounded-lg">
        <h1 className='font-bold text-3xl py-4 '>
          {isSignIn?"Sign In":"Sign Up"}</h1>
          {!isSignIn &&(<input ref={naam} type="text" placeholder='Enter Your Name' className='p-2 my-4 w-full  text-white bg-gray-700 bg-opacity-50'/>)} 
        <input ref={email}
        type="text" placeholder='Email or phone number' className='p-2 my-4 w-full text-white bg-gray-700 bg-opacity-50 '/>
        <input ref={password}
        type="password" placeholder='Password' className='p-2 my-4 w-full  text-white bg-gray-700 bg-opacity-50'/>
       <p className='text-red-500 py-3'> {msg}</p> 
        <button type='submit' className='p-3 my-2 bg-red-700 w-35 border w-full' onClick={handleButtonClick}>
            {isSignIn?"Sign In":"Sign Up"}</button><br></br>
        <input type="checkbox" className='my-2'/>  Remember me
         <h3><a href="#" className='text-white-400 font-bold ' onClick={ToggleSignInForm}>{isSignIn?"New to Netflix?  Sign up now":"Already a user, Sign In"}</a></h3>
       
      </form>
    </div>
    
  )
}

export default Login
