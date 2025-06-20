export default function Banner({ movie }) {
  if (!movie) return null;

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
      <img src={movie.image} alt={movie.movieName}
        className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="relative z-10 p-6 flex flex-col justify-end h-full text-white">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">{movie.movieName}</h1>
        <p className="text-sm md:text-base text-white/90 mt-2 line-clamp-3">{movie.description}</p>
        <button className="mt-4 w-max bg-white text-black font-semibold px-4 py-2 rounded-md shadow hover:bg-gray-100 transition">
          ▶ Watch Now
        </button>
      </div>
    </div>
  );
}