import React from 'react'
import {signOut } from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utilities/userSlice';
import { Logo, LoggedIcon } from '../utilities/constants';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store => store.user); //get user from redux store
  const handleSignOut=()=>{
  signOut(auth).then(() => {})
  .catch((error) => {
  navigate("/error")
});
  }
  //this will run everytime the user state changes, i.e., when user signs in or signs out
    useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // for user sign in and sign up create store
   const {uid,email,displayName,photoURL} = user;
   dispatch(addUser({uid:uid,email:email,displayName:displayName,photoUrl:photoURL})); //add user to redux store
    navigate('/browse')
  } else {
    // User is signed out
    dispatch(removeUser()); //remove user from redux store
    navigate('/')
  }
});
return ()=>unsubscribe(); //cleanup function to unsubscribe from the auth state change listener
  }, [])
  
  return (
    <div className='absolute flex justify-between w-full px-8 py-2 bg-gradient-to-b from-black'>
      <img
      className='w-44 h-13'
       src={Logo} alt="Header Logo" />
    {user &&(
      <div className='flex  right-0'>
      <img className='w-10 m-4'
      alt="userIcon" src={user?.photoURL || LoggedIcon}></img>
      <button onClick={handleSignOut}
    className='bg-red-600 text-white font-bold w-24 h-10 my-4 '>Sign out
    </button>
    </div>
  )}
    </div>
  )
}

export default Header
