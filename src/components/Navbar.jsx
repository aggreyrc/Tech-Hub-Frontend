import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">Tech Hub</Link>
        <Link to="/login" className="text-white mr-4">Login</Link>
        <Link to="/register" className="text-white">Register</Link>
      </div>
    </nav>
  );
}
export default Navbar