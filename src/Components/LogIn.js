import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LOGIN_BG_IMG } from "../utils/constant";

const LogIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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
        <form className="w-full max-w-md h-auto p-4 mt-16 md:p-12 bg-black rounded-md bg-opacity-50 shadow-lg z-20 mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
          <h1 className="text-white text-4xl md:text-5xl font-bold py-4 md:py-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="mt-12">
            {!isSignInForm && (
              <input
                type="text"
                required
                placeholder="Name"
                className="p-3 my-4 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              required
              className="p-3 my-6 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold "
            />

            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 my-6 w-full rounded-md bg-gray-500 border-2 border-solid border-b-orange-600 focus:outline-none focus:border-orange-500 placeholder-white text-lg font-semibold"
            />

            <p className="text-red-500 font-bold">{/* Error message */}</p>

            <button
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
