import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CatalogMaster</h1>
      <p className="mb-4">Explore our collection of movies and series.</p>
      <div className="space-x-4">
        <Link to="/movies" className="text-blue-500 hover:underline">Movies</Link>
        <Link to="/series" className="text-blue-500 hover:underline">Series</Link>
        <Link to="/in-theaters" className="text-blue-500 hover:underline">In Theaters</Link>
      </div>
    </div>
  );
}

export default Home;