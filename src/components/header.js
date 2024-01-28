// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between container mx-auto">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/course" className="hover:text-gray-300">Course</Link>
        <Link to="/assignments" className="hover:text-gray-300">Assignments</Link>
      </nav>
    </header>
  );
};

export default Header;
