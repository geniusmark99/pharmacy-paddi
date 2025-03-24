import React from 'react'
import { Menu, X, Home, ShoppingBag, User, LogOut, FileText, Search } from "lucide-react";


const Header = () => {
    return (
        <header className='flex justify-end px-4 items-center py-5 bg-white border-b border-gray-200'>
            <button
                className="size-10 hidden lg:flex justify-center items-center shadow-md  text-white rounded-full"
            // onClick={toggleSidebar}
            >
                <Search size={14} className="stroke-blue-600" />
                {/* {isOpen ? <X size={24} /> : <Search size={14} className="stroke-blue-600" />} */}
            </button>
        </header>
    )
}

export default Header
