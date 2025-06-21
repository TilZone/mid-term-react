export default function Navbar() {
    return (
        <header 
            className="w-full h-[88px] flex items-center"
            style={{ backgroundColor: '#192026' }}
        >
            <div className="max-w-[1440px] mx-auto flex justify-between items-center w-full px-[83px] text-white">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold">
                        Anonime
                    </h1>
                </div>

                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#" className="hover:text-gray-300">Home</a>
                    <a href="#" className="hover:text-gray-300">List anime</a>
                </nav>

                <div className="flex-shrink-0">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search anime or movie"
                            className="h-[48px] w-[375px] rounded-full bg-[#374151] py-2 px-[18px] text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};