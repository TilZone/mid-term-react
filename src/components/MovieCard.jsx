export default function MovieCard({ movie, onSelect }) {
    return (
      <div onClick={() => onSelect(movie)}
           className="cursor-pointer bg-white rounded-xl shadow hover:scale-105 transition">
        <img src={movie.image} alt={movie.movieName}
             className="h-40 w-full object-cover rounded-t-xl" />
        <div className="p-3">
          <h3 className="text-base font-semibold">{movie.movieName}</h3>
          <p className="text-sm text-gray-500">Episode {movie.episode}</p>
        </div>
      </div>
    );
  }
  