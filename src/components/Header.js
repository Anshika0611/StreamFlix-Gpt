import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from "../utilities/firebase";
import { addUser, removeUser } from '../utilities/userSlice';
import { Logo, LoggedIcon } from '../utilities/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .catch((error) => {
        console.error("Sign out error:", error);
        navigate("/error");
      });
  };

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
    <div className="absolute top-0 left-0 flex justify-between items-center w-full px-8 py-4 bg-gradient-to-b from-black z-50">
      <img
        className="w-44"
        src={Logo}
        alt="Header Logo"
      />
      {user && (
        <div className="flex items-center gap-4">
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
