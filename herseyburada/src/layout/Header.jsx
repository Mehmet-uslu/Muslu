
import React from "react";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1>My App</h1>
      {user ? (
        <div className="flex items-center space-x-4">
          <Gravatar email={user.email} size={40} className="rounded-full" />
          <span>{user.email}</span>
        </div>
      ) : (
        <Link to='/login'>Please Login</Link>
      )}
    </div>
  );
};

export default Header;
