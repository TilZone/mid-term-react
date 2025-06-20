export default function Banner({ movie }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center px-12 lg:px-16">
        <div className="w-[40%]">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {movie.movieName}
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed line-clamp-4">
            {movie.description}
          </p>
        </div>
      </div>
    </div>
  );
};