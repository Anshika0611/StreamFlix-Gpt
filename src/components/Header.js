import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from '../utilities/userSlice';
import { LoggedIcon, SUPPORTED_LANGUAGES } from '../utilities/constants';
import { toggleGptSearchView } from '../utilities/gptSlice';
import { changeLanguage } from '../utilities/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

const handleGptSearchClick=()=>{
  dispatch(toggleGptSearchView()); 
}

  const handleSignOut = () => {
    signOut(auth)
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 left-0 flex flex-col md:flex-row sm:flex-row justify-between items-center w-full px-8 py-4 bg-gradient-to-b from-black z-50">
      <img
        className="w-44"
        src="/Logo.png"
        alt="Header Logo"
      />
      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch &&(
          <select className='p-2 m-2 bg-gray-800 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))}:
          </select>
          )}
          <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-pink-700' onClick={handleGptSearchClick}>
           {showGptSearch?"Home Page":"GPT Search"} 
          </button>
          <img
            className="w-10 h-10  object-cover"
            src={user.photoURL || LoggedIcon}
            alt="User Icon"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
