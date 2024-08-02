import React from "react";
import { APP_LOGO } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-28 bg-opacity-10 p-4 bg-gradient-to-b from-slate-900">
      <img
        className="w-24 sm:w-44 md:w-40 lg:w-44 xl:w-56 opacity-"
        src={APP_LOGO}
        alt="logo"
      />
    </div>
  );
};

export default Header;
