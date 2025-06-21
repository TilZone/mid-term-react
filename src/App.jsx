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

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return (
      <div 
        className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-Poppins flex items-center justify-center"
        style={{ 
          background: 'linear-gradient(to bottom right, #111827, #1f2937, #000000)',
          color: 'white'
        }}
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'white' }}>No movies available</h1>
          <p className="text-gray-400" style={{ color: '#9ca3af' }}>Please check your data source.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-Poppins"
      style={{ 
        background: 'linear-gradient(to bottom right, #111827, #1f2937, #000000)',
        color: 'white'
      }}
    >
      <div className="fixed top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="max-w-[1440px] mx-auto">
        <main className="pt-[88px] px-[83px] pb-[15px] space-y-12">
          <section>
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
                Explore
              </h1>
              <p className="text-gray-400 mt-2">What are you gonna watch today?</p>
            </div>

            <Banner movie={selectedMovie} />
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                New Realease
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
    </div>
  );
}