import { useState } from 'react';

export default function Banner({ movie }) {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  if (!movie || typeof movie !== 'object') {
    console.warn('Banner: Invalid movie prop provided');
    return (
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h2 className="text-2xl font-bold mb-2">No movie selected</h2>
          <p>Please select a movie to display</p>
        </div>
      </div>
    );
  }

  if (!movie.id || !movie.movieName || !movie.image) {
    console.warn('Banner: Movie object missing required properties');
    return (
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h2 className="text-2xl font-bold mb-2">Invalid movie data</h2>
          <p>Movie information is incomplete</p>
        </div>
      </div>
    );
  }

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="text-center text-gray-400">
              <svg 
                className="w-16 h-16 mx-auto mb-4" 
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
              <p className="text-lg">Image not available</p>
            </div>
          </div>
        ) : (
          <img
            src={movie.image}
            alt={movie.movieName}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover opacity-40 ${
              imageLoading ? 'opacity-0' : 'opacity-40'
            }`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center px-12 lg:px-16">
        <div className="w-[40%]">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {movie.movieName}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed line-clamp-4">
            {movie.description || 'No description available'}
          </p>
        </div>
      </div>
    </div>
  );
}