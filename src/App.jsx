import { useState } from 'react';
import { movies } from './data/movies';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  return (
    <div className="min-h-screen bg-[#192026] text-[#FFFFFF] font-Poppins">
      <Navbar />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 py-16 space-y-12">
        <h1 className="text-6xl font-bold tracking-tight">Explore</h1>

        <Banner movie={selectedMovie} />

        <h2 className="text-3xl font-semibold mt-12">New Releases</h2>
        <MovieList movies={movies.slice(1)} onSelect={setSelectedMovie} />
      </main>
    </div>
  );
}