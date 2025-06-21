import { useState } from 'react';
import { movies } from './data/movies';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [currentView, setCurrentView] = useState('home');

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
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

  const renderHomeView = () => (
    <>
      <div className="px-4 sm:px-6 lg:px-[83px] pb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
          Explore
        </h1>
        <p className="text-gray-400 mt-2">What are you gonna watch today?</p>
      </div>
      <Banner movie={selectedMovie} />
      <div className="p-4 sm:p-6 lg:px-[83px] lg:py-8">
        <h2 className="text-2xl font-bold text-white mb-6">New Release</h2>
        <MovieList movies={movies.slice(1)} onSelect={handleMovieSelect} selectedMovie={selectedMovie} />
      </div>
    </>
  );

  const renderListView = () => (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-2xl font-bold text-white mb-6">All Anime ({movies.length})</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {movies.map(movie => (
          <MovieList key={movie.id} movies={[movie]} onSelect={handleMovieSelect} selectedMovie={selectedMovie} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black font-Poppins">
      <Navbar onNavigate={handleNavigate} />
      <main className="max-w-screen-2xl mx-auto pt-[88px]">
        {currentView === 'home' ? renderHomeView() : renderListView()}
      </main>
    </div>
  );
}