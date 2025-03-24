'use client';
import React, { useState, useEffect } from 'react'
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import CartSideBarWidget from './CartSidebarWidget';
import { HamburgerIcon, SearchIcon, PillsLogo, LocationLogo, Logo } from '../icons';
import SidebarWidget from './SidebarWidget';
import SmallLogo from '../../../public/images/pharmacy-paddi-small-logo.png';

import Link from 'next/link';
interface HeaderProps {
    className?: string
}


const HeaderWidget: React.FC<HeaderProps> = ({ className }) => {
    const { cart } = useCart();
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.count, 0);


    const [search, setSearch] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLocation, setIsLocation] = useState(false);

    const [isSidebar, setSidebar] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [query, setQuery] = useState('');


    const toggleSidebar = () => setSidebar(!isSidebar);
    const HandleSearch = () => setSearch(true);
    const HandleOpen = () => setIsOpen(true);
    const HandleClose = () => setIsOpen(false);
    const HandleSignup = () => setIsSignup(!isSignup);
    const HandleLocationPopup = () => setIsLocation(!isLocation);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                HandleClose();
            }
        };

        // Add the event listener
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsLocation(false);
            }
        };

        if (isLocation) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isLocation]);

    const results = [
        'Result 1',
        // 'Result 2',
        // 'Result 3',
        // 'Result 4',
        // 'Result 5',
    ];

    const filteredResults = results.filter((result) =>
        result.toLowerCase().includes(query.toLowerCase())
    );

    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);


    return <>
        <header className={`${className} fixed z-[2000] bg-white top-0 py-4 border-b border-charistan/10 flex items-center w-full`}>
            <div className='flex items-center justify-between w-full mx-3 md:mx-3 lg:mx-20'>
                <div className='flex items-center gap-x-4'>
                    <Link href="/" className='block'>
                        <div className="flex items-center gap-x-1 font-bold">
                            <Image className='size-10' src={SmallLogo} priority width={50} height={50} alt='Pharmacy Paddi Logo' />
                            <h2 className='text-sm'>
                                <span className='font-semibold text-gray-700'>
                                    Pharmacy
                                </span>
                                <span className='text-charistan'>Paddi</span>

                            </h2>
                        </div>
                    </Link>



                    <button
                        onClick={HandleLocationPopup}
                        className='flex items-center gap-x-1 bg-white border shadow-xs p-1 sm:p-2 rounded-md 
                        outline-none focus:outline-none focus:ring-[3px] focus:border-charistan focus:ring-charistan/20 
                        active:ring-[3px]
                        '>
                        <div>
                            <LocationLogo className='size-3 lg:size-4 fill-charistan' />

                        </div>
                        <span className='text-xs lg:text-sm'>
                            Location
                        </span>
                    </button>


                    {/* Desktop nav */}
                    <ul className='justify-between hidden lg:flex gap-x-10 text-sm font-[500]'>


                        <li>
                            <Link href="/professional-login"
                                className='text-gray-600 relative hover:text-charistan'
                            >
                                Professionals
                            </Link>
                        </li>

                        <li>
                            <Link href="/coming-soon"
                                className='text-gray-600 relative hover:text-charistan'

                            >
                                Medicare
                            </Link>
                        </li>
                    </ul>
                    {/* End of Desktop nav */}
                </div>




                <div className='flex items-center gap-x-1'>


                    <button
                        onClick={openCart}
                        className='flex relative items-center justify-center focus:border-charistan focus:text-charistan focus:ring-charistan 
                        focus:outline-none outline-none text-slate-700 hover:text-slate-900
                        hover:bg-gray-100/50 rounded-full size-[38px] lg:w-auto border
                         border-gray-100 p-2.5 flex-shrink'>
                        <svg
                            className="flex-shrink size-4 stroke-charistan"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                            <path d="M3 6h18" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        {(totalItems > 0) ? (
                            <span className="flex absolute top-0 z-10 -mt-1 -me-6">
                                <span className="relative  min-w-[20px] min-h-[20px] inline-flex justify-center items-center text-[10px] bg-gray-900 text-white rounded-full px-1"
                                >
                                    {totalItems}
                                </span>
                            </span>
                        ) : ''}
                    </button>



                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            >
                                <motion.div
                                    initial={{ y: '-100vh' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '-100vh' }}
                                    className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3"
                                >
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-2xl font-bold">Search</h2>
                                        <button
                                            onClick={HandleClose}
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            ✕
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        {/* Search Input */}
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                        />
                                    </div>

                                    {/* Search Results */}
                                    <div className="mt-4">
                                        {filteredResults.length > 0 ? (
                                            <ul className="space-y-2">
                                                {filteredResults.map((result, index) => (
                                                    <li
                                                        key={index}
                                                        className="bg-gray-100 p-2 rounded hover:bg-gray-200"
                                                    >
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-500 mt-2">No results found.</p>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {isLocation && (
                            <motion.div
                                className="fixed inset-0 lg:flex lg:items-center justify-center bg-black bg-opacity-50"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                            >
                                <div className="bg-white absolute lg:relative py-3 px-4 rounded-lg shadow-lg w-full lg:w-[600px] bottom-0">
                                    <div className='flex flex-col gap-y-4'>
                                        <div className='flex justify-between'>
                                            <div>
                                                <h1 className='text-sm lg:text-2xl font-[500]'>Set your Location</h1>
                                                <h3 className='text-xs lg:text-sm font-[500]'>Find a phamarcy location near you</h3>
                                            </div>

                                            <button
                                                onClick={HandleLocationPopup}
                                                className='rounded-full hover:bg-gray-200/20 size-10 border text-2xl shadow-charistan/20'
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className='flex flex-col gap-y-2 justify-center items-center '>
                                            <button className='flex gap-x-2 w-full lg:w-auto text-center justify-center p-3 rounded-full items-center bg-blue-700 hover:bg-charistan text-white'>
                                                <svg viewBox="0 0 24 24" className='size-4 fill-white'>
                                                    <path d="M17.4 12c0 2.98-2.42 5.4-5.4 5.4S6.6 14.98 6.6 12 9.02 6.6 12 6.6s5.4 2.42 5.4 5.4m5.6 0c0 .55-.45 1-1 1h-1.06A8.994 8.994 0 0 1 13 20.94V22c0 .55-.45 1-1 1s-1-.45-1-1v-1.06A8.994 8.994 0 0 1 3.06 13H2c-.55 0-1-.45-1-1s.45-1 1-1h1.06A8.994 8.994 0 0 1 11 3.06V2c0-.55.45-1 1-1s1 .45 1 1v1.06c4.17.46 7.48 3.77 7.94 7.94H22c.55 0 1 .45 1 1m-4 0c0-3.86-3.14-7-7-7s-7 3.14-7 7 3.14 7 7 7 7-3.14 7-7"></path>
                                                </svg>
                                                <h3>Use my current location</h3>
                                            </button>
                                            <p className='text-gray-600'>Note: Your browser will ask permission first </p>
                                            <p className=''>OR</p>
                                        </div>
                                        <div className='w-full flex flex-col gap-y-4'>
                                            {/* HERE */}
                                            <div className='relative w-full'>
                                                <div className="left-0 absolute inset-y-0 flex items-center justify-center pointer-events-none w-14">
                                                    <LocationLogo className='size-4 fill-black' />
                                                </div>
                                                <input id="locationModalAddress"
                                                    placeholder='Enter an address or ZIP code'

                                                    className="border rounded-md px-4 h-14 w-full outline-none transition-all 
                                                    duration-250 font-body-regular focus:ring-[3px] focus:border-charistan focus:ring-charistan/20 active:ring-[3px] 
                                                    active:ring-charistan/30 active:border-charistan disabled:pointer-events-none 
                                                     py-2 border-outline-default pl-14"

                                                    aria-autocomplete="none" aria-haspopup="false" aria-labelledby="locationModalAddress-label" aria-describedby="locationModalAddress-related-content" aria-invalid="false" type="text" name="location" />

                                                <div className="right-0 absolute inset-y-0 flex items-center justify-center pointer-events-none w-14"></div>
                                            </div>

                                            {/* END AHERE */}


                                            <div className='flex items-center w-full gap-x-2'>
                                                <button
                                                    onClick={HandleLocationPopup}

                                                    className='w-6/12 text-center p-3 rounded-full bg-white hover:bg-gray-100 border border-charistan text-charistan'>
                                                    Cancel
                                                </button>
                                                <button className='w-6/12 focus: text-center p-3 rounded-full bg-blue-700 hover:bg-charistan text-white'>
                                                    Set Location
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <h2 className="text-xl font-bold mb-4">Set Your Location</h2>
                                    <input
                                        type="text"
                                        placeholder="Enter your location"
                                        className="w-full p-2 border border-gray-300 rounded mb-4"
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                            onClick={HandleLocationPopup}
                                        >
                                            Cancel
                                        </button>
                                        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                            Confirm
                                        </button>
                                    </div> */}
                                </div>
                            </motion.div>

                        )}
                    </AnimatePresence>

                    <button onClick={HandleSignup} className='text-sm focus:border-charistan focus:text-charistan focus:ring-charistan focus:outline-none outline-none  items-center text-charistan hover:text-blue-600 justify-center hover:bg-gray-100/50
                     lg:justify-between hidden lg:flex p-1.5 rounded-full  lg:w-auto border border-charistan lg:px-2 lg:gap-x-1'>
                        Sign up
                        <span className='text-sm text-current'>/</span>
                        <span className=' text-sm text-current'>Sign in</span>
                    </button>

                    {isSignup && (

                        <div className='absolute hidden lg:flex flex-col gap-y-8  justify-center items-center border-t lg:border-none px-4 lg:px-6 top-16 lg:top-20 right-0 lg:right-20 z-[5000] bg-white shadow-md shadow-charistan/30 w-full lg:w-[350px] lg:rounded-md py-4'>
                            <div className='space-y-2 w-full'>

                                <div className='text-xs md:text-sm'>
                                    <p className='font-semibold text-center'>New to <span className='text-gray-500'>Pharmacy</span><span className='text-charistan'>Paddi</span></p>
                                </div>
                                <Link href="/register" className='block w-full text-white text-center bg-charistan hover:bg-charistan/90 rounded-full py-2 px-2  ring ring-charistan-light border-none'>
                                    Sign up for free
                                </Link>
                            </div>

                            <div className='space-y-2 w-full'>

                                <div className='text-xs md:text-sm'>
                                    <p className='font-semibold text-center text-gray-500'>
                                        Already have an account?
                                    </p>
                                </div>
                                <Link href="/login" className='block w-full text-charistan hover:bg-gray-100/50 text-center border border-charistan bg-white rounded-full py-2 px-2'>
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    )}


                    <button
                        onClick={toggleSidebar}
                        className='flex lg:hidden items-center text-slate-600 justify-center hover:bg-gray-100/50
                     lg:justify-between p-2 rounded-full  lg:w-auto border-none focus:outline-none outline-none focus:ring-0 ring-charistan lg:px-2 lg:gap-x-1'>
                        <HamburgerIcon className='size-6 fill-current' />
                    </button>


                    <motion.div
                        initial={{ x: '100%' }} // Initially hidden on the left
                        animate={{ x: isSidebar ? 0 : '100%' }} // Slide in when open
                        transition={{ stiffness: 120 }} // Smooth spring animation
                        className={`fixed top-0 right-0 w-64 h-full bg-white text-white z-50 transform 
                            ${isSidebar ? '-translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        {/* Sidebar Content */}
                        <div className="p-4 flex justify-between items-center">
                            <div className="flex items-center gap-x-1 font-bold">
                                <Image className='size-10' src={SmallLogo} priority width={50} height={50} alt='Pharmacy Paddi Logo' />
                                <h2 className='text-sm'>
                                    <span className='font-semibold text-gray-700'>
                                        Pharmacy
                                    </span>
                                    <span className='text-charistan'>Paddi</span>

                                </h2>
                            </div>
                            <button
                                onClick={toggleSidebar}
                                className="text-gray-400 rounded-full size-6 bg-gray-200 p-2 flex justify-center items-center hover:text-red-600"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Sidebar Navigation Links */}
                        <nav className="mt-4">
                            <ul className="space-y-4">
                                <li>
                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                        Prescription savings
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                        Telehealth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                        Professionals
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                        Medicare
                                    </Link>
                                </li>


                            </ul>

                            <div className='mt-[200px]'>
                                <Link href="/login" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                    Sign in
                                </Link>

                                <Link href="/register" className="block px-4 py-2 text-gray-600 hover:text-white hover:bg-charistan">
                                    Sign out
                                </Link>
                            </div>


                        </nav>
                    </motion.div>

                    {/* Overlay to close sidebar when clicking outside */}
                    {isSidebar && (
                        <div
                            onClick={toggleSidebar}
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        ></div>
                    )}
                </div>
            </div>
        </header>
        <CartSideBarWidget isOpen={isCartOpen} onClose={closeCart} />
    </>

}

export default HeaderWidget;
