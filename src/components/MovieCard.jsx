export default function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect(movie)}
      className="min-w-[160px] cursor-pointer bg-white rounded-xl shadow hover:shadow-md hover:scale-105 transition"
    >
      <img src={movie.image} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-2">
        <h3 className="text-sm font-semibold truncate">{movie.movieName}</h3>
        <p className="text-xs text-gray-500">Episode {movie.episode}</p>
      </div>
    </div>

  );
}