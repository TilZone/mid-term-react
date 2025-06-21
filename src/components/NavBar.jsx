import React, { useState } from 'react';

const SearchIcon = () => (
  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default function Navbar({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (onNavigate) {
      onNavigate(tab);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-[88px] flex items-center bg-[#192026] z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center w-full px-4 sm:px-6 lg:px-[83px] text-white">
        <div className="flex items-center space-x-10">
          <h1 
            className="text-3xl font-bold text-white cursor-pointer"
            onClick={() => handleTabClick('home')}
          >
            Anonime
          </h1>
          <nav className="flex items-center space-x-8">
            <a 
              href="#" 
              className={`text-gray-400 hover:text-white transition-colors cursor-pointer ${activeTab === 'home' ? 'text-white' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('home');
              }}
            >
              Home
            </a>
            <a 
              href="#" 
              className={`text-gray-400 hover:text-white transition-colors cursor-pointer ${activeTab === 'list' ? 'text-white' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('list');
              }}
            >
              List anime
            </a>
          </nav>
        </div>

        <div className="flex-shrink-0">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search anime or movie"
              className="h-[48px] w-[280px] sm:w-[320px] lg:w-[375px] rounded-full bg-[#252A31] py-2 pl-[45px] pr-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all"
            />
            <div className="absolute left-4">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}