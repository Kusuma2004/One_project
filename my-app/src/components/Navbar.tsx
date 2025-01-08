import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src="logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
                    <span className="font-bold text-lg">VIBREC</span>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Home</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Living</a>
                        <ul className="absolute left-0 hidden group-hover:block bg-white text-black shadow-md mt-2 py-2 w-40">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">TV Units</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Sofas</a></li>
                        </ul>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Storage</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Dining</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Bedroom</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Mattress</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Study</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Office</a>
                    </li>
                    <li className="relative group">
                        <a href="#" className="hover:text-yellow-500">Outdoor</a>
                    </li>
                </ul>

                {/* Icons */}
                <div className="flex items-center space-x-4">
                    <button className="hover:text-yellow-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405a2.032 2.032 0 00-.573-1.369L18 14V7a3 3 0 00-6 0v7l-.022.03c-.21.284-.382.624-.548.94L10 17h5z"></path>
                        </svg>
                    </button>

                    <button className="hover:text-yellow-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 5.121a3 3 0 014.242 0L12 7.757l2.637-2.636a3 3 0 114.242 4.242L16.243 12l2.636 2.637a3 3 0 11-4.242 4.242L12 16.243l-2.637 2.636a3 3 0 11-4.242-4.242L7.757 12 5.121 9.363a3 3 0 010-4.242z"></path>
                        </svg>
                    </button>

                    <button className="hover:text-yellow-500">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 00-8 0v2m8-4a4 4 0 01-8 0 4 4 0 018 0zm6-2v-5a4 4 0 00-4-4H6a4 4 0 00-4 4v5a2 2 0 002 2h16a2 2 0 002-2z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
