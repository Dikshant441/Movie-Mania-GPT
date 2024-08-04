import { useState, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LOGIN_BG_IMG, USER_PROFILE_LOGO } from "../utils/constant";
import {
  fullValidationSignUp,
  fullValidationSignIn,
} from "../utils/formValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch  = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // what value getting
    // console.log(name.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);

    // validation logic
    if (!isSignInForm) {
      const message = fullValidationSignUp(
        name.current?.value,
        email.current?.value,
        password.current.value
      );
      // console.log(message);
      setErrorMessage(message);
    } else {
      const message = fullValidationSignIn(
        email.current.value,
        password.current.value
      );
      // console.log(message);
      setErrorMessage(message);
    }

    if (!isSignInForm) {
      // logic for signUp form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_PROFILE_LOGO,
          })
            .then(() => {
              // profile updated here
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User already exist with this email.");
        });
    } else {
      // logic for signIn form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            "User doesn't exist : Please check Email or Password"
          );
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-full">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Header />
      </div>
      <img
        src={LOGIN_BG_IMG}
        alt="background"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute mb-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md h-auto p-4 mt-16 md:p-12 bg-black rounded-md bg-opacity-50 shadow-lg z-20 mx-4 sm:mx-6 md:mx-8 lg:mx-auto"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold py-4 md:py-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="mt-12">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Name"
                className="p-3 my-4 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="p-3 my-6 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold "
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 my-6 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold"
            />

            <p className="text-red-500 font-bold">{errorMessage}</p>

            <button
              onClick={handleButtonClick}
              type="submit"
              className="text-xl font-bold p-4 my-6 bg-red-600 text-white w-full rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            <p
              className="text-xl text-white text-center cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In Now."}
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
