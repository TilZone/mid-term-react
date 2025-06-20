import { useState } from 'react';
import { movies } from './data/movies';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Explore</h1>
      <Banner movie={selectedMovie} />
      <h2 className="text-2xl font-semibold text-gray-700">New Releases</h2>
      <MovieList movies={movies} onSelect={setSelectedMovie} />
    </div>
  );
}