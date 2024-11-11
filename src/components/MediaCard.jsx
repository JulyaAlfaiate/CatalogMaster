import React, { useState } from 'react';

function MediaCard({ title, image, type, duration, episodes, seasons, wikiLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={wikiLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
        <div className="text-white text-center">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {isHovered && (
            <p>
              {type === 'movie' ? `Duration: ${duration}` : `${episodes} episodes, ${seasons} seasons`}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

export default MediaCard;
