import { useState } from 'react';
import { movies } from './data/movies';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-gray-900">Explore</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <img src={selectedMovie.image} className="rounded-xl w-full h-auto object-cover shadow-lg" />
        </div>

        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">{selectedMovie.movieName}</h2>
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-6">{selectedMovie.description}</p>
          <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition w-max">
            ▶ Watch Now
          </button>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8">New Releases</h2>
      <MovieList movies={movies} onSelect={setSelectedMovie} />
    </div>
  );
}