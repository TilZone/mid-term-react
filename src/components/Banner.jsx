export default function Banner({ movie }) {
  if (!movie) {
    return (
      <div className="relative w-full h-[500px] rounded-2xl bg-gray-800" />
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-900">
      <img
        src={movie.image}
        alt={movie.movieName}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      
      <div 
        className="absolute inset-0 z-10 flex flex-col justify-end pb-12 pl-24 pr-12 bg-gradient-to-t from-black/80 to-transparent"
      >
        <div className="w-7/12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {movie.movieName}
            </h1>
            <p className="text-base text-gray-200 leading-relaxed line-clamp-4">
              {movie.description || 'No description available.'}
            </p>
        </div>
      </div>
    </div>
  );
}