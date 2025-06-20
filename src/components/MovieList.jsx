import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect, selectedMovie }) {
  return (
    <div className="px-2 sm:px-4 md:px-0">
      <div className="flex gap-6 overflow-x-auto w-max">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} isSelected={selectedMovie?.id === movie.id} />
        ))}
      </div>
    </div>
  );
}
