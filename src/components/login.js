//rafce
import React from 'react'
import Header from './Header'
import {useState} from 'react'
const Login = () => {
  const[isSignIn,setisSignIn]=useState(true);
  const ToggleSignInForm = () => {
    setisSignIn(!isSignIn)
    
  }
  return (
    <div>
      <div className='absolute inset-0 bg-black bg-opacity-50'>
      <Header/>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" alt="bg logo"/>
      </div>
      <form className="absolute bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 p-10 text-white rounded-lg">
        <h1 className='font-bold text-3xl py-4 '>
          {isSignIn?"Sign In":"Sign Up"}</h1>
          {!isSignIn &&(<input type="text" placeholder='Enter Your Name' className='p-2 my-4 w-full  text-black bg-gray-700 bg-opacity-50'/>)}
         
        <input type="text" placeholder='Email or phone number' className='p-2 my-4 w-full text-black bg-gray-700 bg-opacity-50 '/>
        <input type="password" placeholder='Password' className='p-2 my-4 w-full  text-black bg-gray-700 bg-opacity-50'/>
        <button type='submit' className='p-3 my-2 bg-red-700 w-35 border w-full '>
            {isSignIn?"Sign In":"Sign Up"}</button><br></br>
        <input type="checkbox" className='my-2'/>  Remember me
         <h3><a href="#" className='text-white-400 font-bold ' onClick={ToggleSignInForm}>{isSignIn?"New to Netflix?  Sign up now":"Already a user, Sign In"}</a></h3>
        <h6>This page is protetcted by Google reCAPTCHA to ensure you're not a bot.<a href="#" className='text-blue-300'>Learn More</a></h6  >
      </form>
    </div>
    
  )
}

export default Login
