import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect }) {
  return (
    <div className="px-8 pb-4">
      <div className="flex flex-wrap gap-8 justify-between">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
