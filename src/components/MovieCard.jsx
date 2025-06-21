export default function MovieCard({ movie, onSelect, isSelected }) {
  if (!movie || !movie.id || !movie.movieName || !movie.image) {
    return null; 
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onSelect(movie);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      onClick={() => onSelect(movie)}
      onKeyDown={handleKeyDown}
      className="w-[192px] h-[320px] rounded-lg"
    >
      <div className="relative w-full h-[288px] rounded-lg overflow-hidden bg-gray-800">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-3 text-white text-center">
        <p className="text-sm text-gray-400">Episode {movie.episode || 'N/A'}</p>
        <h3 className="font-semibold text-base line-clamp-2">{movie.movieName}</h3>
      </div>
    </div>
  );
}