export default function Navbar() {
    return (
        <header className="w-full bg-[#232A32] shadow sticky top-0 z-50">
            <div className="max-w-screen-2xl mx-auto flex justify-between items-center px-6 lg:px-20 py-5">
                <h1 className="text-3xl font-bold tracking-wide text-indigo-500">MovieStream</h1>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="hidden md:block px-4 py-2 border border-gray-600 bg-[#1F2833] rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-indigo-400"
                    />
                    <div className="w-10 h-10 bg-gray-400 rounded-full" />
                </div>
            </div>
        </header>
    );
}