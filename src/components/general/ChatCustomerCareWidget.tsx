'use client';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';


const ChatCustomerCareWidget = () => {
    // const handleChatOpen = () => {
    //     const phone = '1234567890'; // Replace with your customer care number
    //     const message = "Hello! I need assistance."; // Predefined message
    //     const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    //     window.open(url, '_blank');
    // };

    const phone = '2348141625004'; // Replace with your customer care number
    const message = 'Hello! I need assistance.';
    const chatUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const togglePopup = () => setIsOpen(!isOpen);

    const buttonElement = <>

        <button
            onClick={togglePopup}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 focus:outline-none"
            aria-label="Chat with Customer Care"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.63.39 3.17 1.08 4.57L2 22l5.43-1.08C8.83 21.61 10.37 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.05 17c-1.63 0-3.22-.44-4.6-1.27l-.33-.2-3.21.64.64-3.21-.2-.33C5.44 15.17 5 13.63 5 12c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-6.95 7zm3.82-5.32l-.64-.32c-.32-.16-.56-.29-.8.02-.23.3-.89.98-1.1 1.18-.2.2-.42.23-.76.08-.34-.16-1.44-.53-2.74-1.68-1-.9-1.67-2.01-1.87-2.34-.2-.34-.02-.52.15-.69.15-.15.34-.39.51-.58.17-.19.23-.3.34-.5.11-.19.05-.37-.02-.53-.08-.16-.8-1.92-1.1-2.63-.3-.7-.61-.6-.85-.6-.23 0-.46 0-.7.23-.23.23-.92.9-.92 2.2 0 1.3.92 2.56 1.06 2.74.15.19 1.81 2.8 4.39 3.92.61.26 1.08.41 1.44.53.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.21.23-.6.23-1.12.16-1.21-.08-.08-.29-.15-.61-.3z" />
            </svg>
        </button>

        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]"
                onClick={togglePopup}
            >
                <motion.div
                    onClick={(e) => e.stopPropagation()} // Prevent closing on inner modal click
                    className="bg-white w-11/12 md:w-1/2 h-3/4 rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="flex justify-end p-2">
                        <button
                            onClick={togglePopup}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close chat"
                        >
                            &times;
                        </button>
                    </div>
                    <iframe
                        src={chatUrl}
                        title="WhatsApp Chat"
                        className="w-full h-full"
                        allow="clipboard-write"
                    />
                </motion.div>
            </motion.div>
        )}
    </>




    if (typeof window !== 'undefined') {
        return ReactDOM.createPortal(buttonElement, document.body);
    }
    return null;

}

export default ChatCustomerCareWidget;


