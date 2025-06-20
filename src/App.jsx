import { useState } from 'react';
import { movies } from './data/movies';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-16">
        <section>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Explore
            </h1>
          </div>

          <Banner movie={selectedMovie} />
        </section>

        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              New Releases
            </h2>         
          </div>

          <MovieList
            movies={movies.slice(1)}
            onSelect={handleMovieSelect}
            selectedMovie={selectedMovie}
          />
        </section>
      </main>
    </div>
  );
}