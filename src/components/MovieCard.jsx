export default function MovieCard({ movie, onSelect, isSelected }) {
  return (
    <div
      onClick={() => onSelect(movie)}
      className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 ${isSelected ? 'ring-2 ring-red-500' : ''
        }`}
    >
      <div className="relative w-72 h-96 rounded-xl overflow-hidden shadow-lg bg-gray-800">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="mb-3">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Ep {movie.episode}
            </span>
          </div>

          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
            {movie.movieName}
          </h3>

          <p className="text-gray-300 text-sm line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {movie.description}
          </p>
        </div>

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};