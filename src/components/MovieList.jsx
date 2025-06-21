import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect, selectedMovie }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="w-full">
        <div className="text-center text-gray-400 py-8">
          <p>No movies to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-evenly gap-6">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id}
            movie={movie} 
            onSelect={onSelect} 
            isSelected={selectedMovie?.id === movie.id} 
          />
        ))}
      </div>
    </div>
  );
}
