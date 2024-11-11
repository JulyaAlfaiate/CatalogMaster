import React from 'react';
import MediaCard from '../components/MediaCard';

const seriesData = [
  { title: "Stranger Things", image: "/placeholder.svg", episodes: 34, seasons: 4, wikiLink: "https://en.wikipedia.org/wiki/Stranger_Things" },
  { title: "The Crown", image: "/placeholder.svg", episodes: 40, seasons: 4, wikiLink: "https://en.wikipedia.org/wiki/The_Crown_(TV_series)" },
  // Add more series data here
];

function Series() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {seriesData.map((series) => (
          <MediaCard
            key={series.title}
            title={series.title}
            image={series.image}
            type="series"
            episodes={series.episodes}
            seasons={series.seasons}
            wikiLink={series.wikiLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Series;