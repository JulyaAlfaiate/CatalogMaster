import React from 'react';
import MediaCard from '../components/MediaCard';

const inTheatersData = [
  { title: "Dune: Part Two", image: "/placeholder.svg", duration: "2h 46min", wikiLink: "https://en.wikipedia.org/wiki/Dune:_Part_Two" },
  { title: "Oppenheimer", image: "/placeholder.svg", duration: "3h", wikiLink: "https://en.wikipedia.org/wiki/Oppenheimer_(film)" },
  // Add more in-theaters movie data here
];

function InTheaters() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">In Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {inTheatersData.map((movie) => (
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

export default InTheaters;