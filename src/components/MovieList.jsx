import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect, selectedMovie }) {
  if (!movies || !Array.isArray(movies)) {
    console.warn('MovieList: movies prop must be an array');
    return (
      <div className="px-2 sm:px-4 md:px-0">
        <div className="text-center text-gray-400 py-8">
          <p>No movies available</p>
        </div>
      </div>
    );
  }

  if (typeof onSelect !== 'function') {
    console.warn('MovieList: onSelect prop must be a function');
    return (
      <div className="px-2 sm:px-4 md:px-0">
        <div className="text-center text-gray-400 py-8">
          <p>Invalid selection handler</p>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="px-2 sm:px-4 md:px-0">
        <div className="text-center text-gray-400 py-8">
          <p>No movies to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 sm:px-4 md:px-0">
      <div className="flex gap-6 overflow-x-auto w-max">
        {movies.map((movie) => (
          <MovieCard 
            key={movie?.id || Math.random()} 
            movie={movie} 
            onSelect={onSelect} 
            isSelected={selectedMovie?.id === movie?.id} 
          />
        ))}
      </div>
    </div>
  );
}
