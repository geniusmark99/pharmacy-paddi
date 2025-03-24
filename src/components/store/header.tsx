'use client';
import LogoImage from '../../../public/images/pharmacy-paddi-small-logo.png';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogOut, Menu, Settings, User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { logout } from '@/util/auth';
// import { fetchAdminProfile } from "@/util/api";
import Sidebar from './sidebar';
import SidebarInner from './sidebarInner';



export default function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const [adminName, setAdminName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const [mobileMenu, setMobileMenu] = useState(false);

    const handleClickOutside = (e: MouseEvent) => {
        if ((e.target as HTMLElement).id === "sidebar-overlay") {
            setMobileMenu(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setMobileMenu(false);
        }
    };


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    useEffect(() => {
        async function getAdminData() {
            // const token = localStorage.getItem("admin_token"); // Ensure token is stored after login
            // if (!token) {
            //     console.error("No admin token found");
            //     return;
            // }

            // const admin = await fetchAdminProfile(token);
            // if (admin) setAdminName(admin.name);
            // setLoading(false);
        }

        getAdminData();
    }, []);


    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <header className="fixed top-0 z-40 w-full bg-white shadow">
                <nav className="flex items-center px-5 md:px-8">
                    <div className="relative flex w-full flex-1 items-center">
                        <div className="flex items-center">
                            <button
                                onClick={() => setMobileMenu(!mobileMenu)}
                                className="group flex h-5 w-5 shrink-0 cursor-pointer flex-col justify-center space-y-1 me-4 focus:text-accent focus:outline-none lg:hidden"
                            >
                                <Menu className='size-7 stroke-charistan' />
                            </button>
                            <div className="flex h-16 shrink-0 transition-[width] duration-300 me-4 lg:h-[76px] lg:border-solid lg:border-gray-200/80 lg:me-8 lg:border-e lg:w-[257px]">

                                <div className="inline-flex items-center gap-1">
                                    <Image src={LogoImage} alt='PharmacyPaddy Logo' priority className='size-10' width={50} height={50} />
                                    <span className='font-semibold '>
                                        Pharmacy<span className='text-charistan'>Paddy</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="relative ml-auto mr-1.5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-gray-50 py-4 text-gray-600 hover:border-transparent hover:border-gray-200 hover:bg-white hover:text-accent sm:mr-6 lg:hidden xl:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <div className="relative hidden w-full max-w-[710px] py-4 me-6 lg:block 2xl:me-auto">
                            <div className="fixed inset-0 hidden" />
                            <div className="relative w-full max-w-lg rounded-3xl group text-gray-500 hover:text-charistan focus-within:text-charistan transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="absolute inset-y-0 left-4 my-auto h-4 w-4 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    className='
                                py-1.5 sm:py-2 ltr:pl-12 rtl:pr-12  px-3 pe-11 block w-full border-gray-200 shadow-2xs rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 
                                disabled:pointer-events-none'

                                    placeholder="Search your route..."
                                    defaultValue=""
                                />
                            </div>
                        </div>

                        <div
                            ref={dropdownRef}
                            className="relative inline-block shrink-0 grow-0 basis-auto py-2 text-left ps-1.5 sm:border-solid sm:border-gray-200 sm:py-3 sm:ps-6 sm:border-s lg:py-4 xl:py-2"
                            data-headlessui-state=""
                        >
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex max-w-[150px] items-center gap-2 focus:outline-none lg:py-0.5 xl:py-2.5"
                                id="headlessui-menu-button-:rp:"
                                type="button"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-headlessui-state=""
                            >
                                <span
                                    title="avatar"
                                    className="inline-flex items-center justify-center  border text-accent border-border-100 bg-accent/10 overflow-hidden relative text-sm rounded-full font-semibold shrink-0 grow-0 basis-auto drop-shadow"
                                    style={{ width: 40, height: 40 }}
                                >
                                    A
                                </span>
                                <div className="hidden w-[calc(100%-48px)] flex-col items-start space-y-0.5 truncate text-sm ltr:text-left rtl:text-right xl:flex">
                                    {/* */}

                                    {loading ? (
                                        <svg
                                            className="w-5 h-5 animate-spin text-white mx-auto"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                            ></path>
                                        </svg>

                                    ) : (
                                        <h1 className="text-2xl font-bold">Welcome, {adminName}!</h1>
                                    )}


                                    {/* <span className="w-full truncate font-semibold capitalize text-black">
                                    Jhon Doe
                                </span>
                                <span className="w-full truncate text-xs capitalize text-gray-400">
                                    super admin
                                </span> */}
                                </div>
                            </button>

                            {dropdownOpen && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute t-10 right-0 mt-2 w-48 bg-white text-black p-3 shadow-lg rounded-lg overflow-hidden"
                                >
                                    <li className="px-4 py-2 hover:bg-charistan/10 group cursor-pointer transition-all rounded-md">

                                        <Link href="#" className='flex items-center gap-2 group-hover:text-charistan text-sm'>
                                            <User className='size-5 stroke-current group-hover:stroke-charistan' />
                                            Profile
                                        </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-charistan/10 group cursor-pointer transition-all rounded-md">

                                        <Link href="#" className='flex items-center gap-2 group-hover:text-charistan text-sm'>
                                            <Settings className='size-5 stroke-current group-hover:stroke-charistan' />
                                            Settings
                                        </Link>
                                    </li>
                                    <li className="px-4 py-2 hover:bg-charistan/10 group cursor-pointer transition-all rounded-md">

                                        <button className='flex items-center gap-2 group-hover:text-charistan text-sm' onClick={logout}>
                                            <LogOut className='size-5 stroke-current group-hover:stroke-charistan' />
                                            Logout
                                        </button>
                                    </li>
                                </motion.ul>
                            )}
                        </div>
                    </div>
                </nav>
            </header>

            {mobileMenu && (
                <div
                    id="sidebar-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                />
            )}

            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: mobileMenu ? "0%" : "-100%" }}
                transition={{ type: "spring", stiffness: 50 }}
                className="fixed top-0 left-0 bg-white lg:hidden h-full w-6/12 shadow-lg z-50"
            >
                {/* Close Button */}
                <button
                    className="absolute top-4 right-4 text-white"
                    onClick={() => setMobileMenu(false)}
                >
                    <X size={24} />
                </button>
                <SidebarInner />


            </motion.div>
        </>

    )
}
