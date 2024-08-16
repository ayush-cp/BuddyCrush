import React, { useContext } from 'react';
import Logo from '../assets/habits.png';
import defaultAvatar from "../assets/person.png"; // Default avatar image
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function Navbar() {
  const { user } = useContext(UserContext);
  
  // Uncomment below for debugging in development
  // console.log(user);

  return (
    <div className='navbar'>
      <div className="mainNav">
        <Link to="/dashboard" className='navbarLink'>
          <div className="logo">
            <img src={Logo} alt="Buddy Crush Logo" />
            <span>Buddy Crush</span>
          </div>
        </Link>
        {user && (
          <img
            className="userAvatar userName"
            src={user.photoURL || defaultAvatar}
            alt={user.displayName || "User Avatar"}

          />
        )}
      </div>
    </div>
  );
}
