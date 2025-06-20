export default function Navbar() {
    return (
        <header className="w-full bg-[#192026] shadow-lg sticky top-0 z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8 py-4">
                <div className="flex items-center space-x-2">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                        Anonime
                    </h1>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search anime or movie."
                            className="bg-gray-800 border border-gray-700 rounded-full px-4 py-2 pl-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent w-64"
                        />
                        <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};