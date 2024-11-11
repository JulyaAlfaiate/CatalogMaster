import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CatalogMaster</Link>
        <ul className="flex space-x-4">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/series">Series</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/in-theaters">In Theaters</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;