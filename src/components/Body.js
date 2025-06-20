import React, { useEffect } from 'react'
import Login from './login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilities/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utilities/userSlice';

const Body = () => {
  const dispatch=useDispatch();

  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login />
    },
    {
      path:"/browse",
      element:<Browse />
    },
  ])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // for user sign in and sign up
   const {uid,email,displayName,photoURL} = user;
   dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoURL})); //add user to redux store
    
  } else {
    // User is signed out
    dispatch(removeUser()); //remove user from redux store
  
  }
});
  }, [])
  

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
