import React, { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constant";
import { USER_PROFILE_LOGO } from "../utils/constant";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error, "Error while signOut");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
// unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="absolute flex justify-between top-0 left-0 w-full h-28 bg-opacity-10 p-4 bg-gradient-to-b from-slate-900">
      <img
        className="w-32 sm:w-40 md:w-40 lg:w-72 xl:w-56"
        src={APP_LOGO}
        alt="logo"
      />
      {user && (
        <div className="relative flex items-center">
          <img
            className=" w-8 h-8"
            alt="usericon"
            src={USER_PROFILE_LOGO}
          />
          <button
            onClick={toggleDropdown}
            className="p-2 font-semibold text-white text-md flex items-center"
          >
            Hi {user?.displayName}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-20 bg-white border rounded shadow-lg ">
              <button
                onClick={handleSignOut}
                className="flex justify-center items-center w-full p-2 font-semibold text-red-600  hover:bg-gray-100"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
