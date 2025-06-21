import { useState } from 'react';
import { movies } from './data/movies';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieSelect = (movie) => {
    if (!movie || typeof movie !== 'object') {
      console.warn('Invalid movie object provided to handleMovieSelect');
      return;
    }
    
    if (!movie.id || !movie.movieName || !movie.image) {
      console.warn('Movie object missing required properties');
      return;
    }
    
    setSelectedMovie(movie);
  };

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-Poppins flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No movies available</h1>
          <p className="text-gray-400">Please check your data source.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-Poppins">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-[83px] py-[15px] space-y-16">
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