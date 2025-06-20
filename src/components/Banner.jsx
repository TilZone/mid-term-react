export default function Banner({ movie }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
      <img
        src={movie.image}
        alt={movie.movieName}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="relative z-10 p-6 text-white flex flex-col justify-end h-full">
        <h1 className="text-2xl md:text-3xl font-bold line-clamp-2">{movie.movieName}</h1>
        <p className="text-sm mt-2 text-white/90 line-clamp-3">{movie.description}</p>
      </div>
    </div>
  );
}