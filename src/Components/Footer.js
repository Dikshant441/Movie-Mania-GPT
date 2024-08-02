import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-6">
          <p className="text-lg">
            Questions? Call <span className="text-red-600">000-800-919-1694</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <ul className="list-none flex flex-col md:flex-row md:space-x-6 mb-6 md:mb-0">
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
            <li>
              <Link to="/help-centre" className="hover:underline">Help Centre</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">Terms of Use</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">Privacy</Link>
            </li>
          </ul>
          <p className="text-sm">&copy; {new Date().getFullYear()} DIkshant Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

