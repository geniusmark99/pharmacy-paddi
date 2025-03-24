"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Home, ShoppingBag, User, LogOut, FileText, Search } from "lucide-react";
import SmallLogo from '../../../public/images/pharmacy-paddi-small-logo.png';


const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const menuItems = [
        { name: "Dashboard", href: "/user/dashboard", icon: <Home size={20} /> },
        { name: "Orders", href: "/user/orders", icon: <ShoppingBag size={20} /> },
        { name: "Profile", href: "/user/profile", icon: <User size={20} /> },
        { name: "Prescriptions", href: "/user/prescriptions", icon: <FileText size={20} /> },
        { name: "Logout", href: "/user/logout", icon: <LogOut size={20} /> },
    ];

    return (
        <div className="relative">
            {/* Toggle Button for Mobile */}
            <header className="lg:hidden fixed px-4 py-2 flex justify-between left-0 w-full bg-white shadow-sm z-50">

                <div className="flex items-center gap-x-1 font-bold">
                    <Image className='size-10' src={SmallLogo} priority width={50} height={50} alt='Pharmacy Paddi Logo' />
                    <h2 className='text-sm'>
                        <span className='font-semibold text-gray-700'>
                            Pharmacy
                        </span>
                        <span className='text-charistan'>Paddi</span>

                    </h2>
                </div>


                <div className="flex items-center gap-x-1">
                    <button
                        className="size-10 flex justify-center items-center shadow-md  text-white rounded-full"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? <X size={24} /> : <Search size={14} className="stroke-blue-600" />}
                    </button>

                    <button
                        className="size-10 flex justify-center items-center bg-blue-600 text-white rounded-md"
                        onClick={toggleSidebar}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>



            {/* Sidebar */}
            <aside
                className={`fixed top-14 lg:top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-64"
                    } transition-transform lg:translate-x-0 lg:static lg:w-60 z-40`}
            >

                <div className="hidden lg:flex items-center gap-x-1 font-bold p-4">
                    <Image className='size-10' src={SmallLogo} priority width={50} height={50} alt='Pharmacy Paddi Logo' />
                    <h2 className='text-sm'>
                        <span className='font-semibold text-gray-700'>
                            Pharmacy
                        </span>
                        <span className='text-charistan'>Paddi</span>

                    </h2>
                </div>


                <nav className="mt-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-5 py-3 text-gray-700 transition hover:bg-blue-50 ${pathname === item.href ? "bg-blue-100 text-blue-600 font-semibold" : ""
                                }`}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );

    // return (
    //     <aside className="bg-charistan hidden lg:block lg:w-1/12 p-5">
    //         <div className='flex flex-col justify-center items-center h-16'>
    //             <img src="/images/smiling-woman.jpg" alt="logo" className="size-14 rounded-full object-fill border-2 shadow-md border-white" />
    //             <p><h2>Hello, Marj</h2></p>
    //         </div>

    //         <div className='flex justify-center'>
    //             <div className='flex flex-col items-center'>
    //                 <h2 className='text-gray-200 uppercase'>Categories</h2>
    //             </div>
    //             <div></div>
    //         </div>
    //     </aside>
    // )
}

export default Sidebar
