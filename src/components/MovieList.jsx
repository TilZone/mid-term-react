import MovieCard from './MovieCard';

export default function MovieList({ movies, onSelect }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onSelect={onSelect} />
      ))}
    </div>
  );
}