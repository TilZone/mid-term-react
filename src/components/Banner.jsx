export default function Banner({ movie }) {
  if (!movie) return null;
  return (
    <div className="relative w-full h-[480px] rounded-xl overflow-hidden shadow-xl">
      <img
        src={movie.image}
        alt={movie.movieName}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="relative z-10 px-16 pb-20 pt-10 flex flex-col justify-end items-start h-full w-[40%]">
        <h1 className="text-4xl md:text-5xl font-bold line-clamp-2 mb-4">{movie.movieName}</h1>
        <p className="text-base text-white/90 line-clamp-4 mb-6">{movie.description}</p>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 text-sm w-max">
          ▶ Watch Now
        </button>
      </div>
    </div>
  );
}