export default function MovieCard({ movie, onSelect }) {
  return (
    <div
      onClick={() => onSelect(movie)}
      className="w-[220px] cursor-pointer bg-[#232A32] rounded-xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition"
    >
      <div className="relative">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-60 object-cover"
        />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          Episode {movie.episode}
        </div>
      </div>
      <div className="py-3 px-2 text-center">
        <h3 className="text-sm font-semibold text-white line-clamp-2">{movie.movieName}</h3>
      </div>
    </div>
  );
}