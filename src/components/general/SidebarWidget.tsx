'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const SidebarWidget = () => {

    const [isOpen, setIsOpen] = useState(false);


    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Hamburger Menu Button */}
            <button
                className="p-3 bg-gray-700 text-white rounded-md focus:outline-none"
                onClick={toggleSidebar}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>

            {/* Animated Sidebar */}
            <motion.div
                initial={{ x: '-100%' }} // Initially hidden on the left
                animate={{ x: isOpen ? 0 : '-100%' }} // Slide in when open
                transition={{ type: 'spring', stiffness: 120 }} // Smooth spring animation
                className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Sidebar Content */}
                <div className="p-4 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Menu</h2>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-400 hover:text-white"
                    >
                        ✕
                    </button>
                </div>

                {/* Sidebar Navigation Links */}
                <nav className="mt-4">
                    <ul className="space-y-4">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </motion.div>

            {/* Overlay to close sidebar when clicking outside */}
            {isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                ></div>
            )}
        </div>
    )
}

export default SidebarWidget;

