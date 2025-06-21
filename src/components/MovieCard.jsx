import { useState } from 'react';

export default function MovieCard({ movie, onSelect, isSelected }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  if (!movie || typeof movie !== 'object') {
    console.warn('MovieCard: Invalid movie prop provided');
    return null;
  }

  if (!movie.id || !movie.movieName || !movie.image) {
    console.warn('MovieCard: Movie object missing required properties');
    return null;
  }

  if (typeof onSelect !== 'function') {
    console.warn('MovieCard: onSelect prop must be a function');
    return null;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect(movie);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      onClick={() => onSelect(movie)}
      onKeyDown={handleKeyDown}
      className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 ${
        isSelected ? 'ring-2 ring-red-500' : ''
      }`}
    >
      <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg bg-gray-800">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
            <div className="text-center text-gray-400">
              <svg 
                className="w-12 h-12 mx-auto mb-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                />
              </svg>
              <p className="text-sm">Image not available</p>
            </div>
          </div>
        ) : (
          <img
            src={movie.image}
            alt={movie.movieName}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="mb-3">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Ep {movie.episode || 'N/A'}
            </span>
          </div>

          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {movie.movieName}
          </h3>

          <p className="text-gray-300 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {movie.description || 'No description available'}
          </p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}