import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <Link to="/suggest" className="text-blue-400 hover:underline">
          Suggest a Movie or Series
        </Link>
      </div>
    </footer>
  );
}

export default Footer;