import React from 'react';
import MediaCard from '../components/MediaCard';

const moviesData = [
  { title: "Inception", image: "/placeholder.svg", duration: "2h 28min", wikiLink: "https://en.wikipedia.org/wiki/Inception" },
  { title: "The Shawshank Redemption", image: "/placeholder.svg", duration: "2h 22min", wikiLink: "https://en.wikipedia.org/wiki/The_Shawshank_Redemption" },
  // Add more movie data here
];

function Movies() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {moviesData.map((movie) => (
          <MediaCard
            key={movie.title}
            title={movie.title}
            image={movie.image}
            type="movie"
            duration={movie.duration}
            wikiLink={movie.wikiLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
