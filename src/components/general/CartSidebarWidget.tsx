'use client';
import { useCart } from "../context/CartContext";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';



interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartSideBarWidget: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {

    const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();

    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.count, 0);


    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    const cartElement = (
        <>


            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[1001]"
                    onClick={onClose}

                >
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-[1000] flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Prevent closing on inner sidebar click
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-lg font-semibold">Your Cart</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Close cart"
                            >
                                &times;
                            </button>
                        </div>



                        <header
                            className=" w-full z-10 flex max-w-md items-center justify-between border-b border-border-200 border-opacity-75 bg-light px-6 py-6">

                            <div className="flex items-center  gap-x-2">
                                <svg width={24} height={22} className="shrink-0 size-5 fill-charistan" viewBox="0 0 12.686 16">
                                    <g transform="translate(-27.023 -2)">
                                        <g transform="translate(27.023 5.156)">
                                            <g>
                                                <path
                                                    d="M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z"
                                                    transform="translate(-53.023 -101.005)"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </g>
                                        <g transform="translate(30.274 2)">
                                            <g>
                                                <path
                                                    d="M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z"
                                                    transform="translate(-157.039)"
                                                    fill="currentColor"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                                <h2 className="text-sm bg-charistan flex items-center vertical-baseline text-white px-2 py-1 rounded-full">
                                    {totalItems} {totalItems <= 1 ? "item" : "items"}
                                </h2>
                            </div>


                            <button className="bg-white size-6 lg:size-8 rounded-full" onClick={onClose}>
                                &times;
                            </button>



                        </header>

                        <div className="p-6">


                            {Object.keys(cart).length > 0 ? (
                                <div>
                                    <ul className="space-y-4">
                                        {Object.values(cart).map(({ product, count }) => (
                                            <li
                                                key={product.id}
                                                className="flex justify-between items-center transition-all scale-95 hover:scale-100 p-4 border rounded-lg shadow-sm shadow-blue-400/50 hover:shadow-md"
                                            >
                                                <div>
                                                    <p className="font-semibold">{product.name}</p>
                                                    <p className="text-gray-600">
                                                        ${product.price} &times; {count} = ${product.price * count}
                                                    </p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <button
                                                        className="bg-blue-500 rounded-full size-7 text-center text-white flex justify-center items-center"
                                                        onClick={() => removeFromCart(product.id)}
                                                    >
                                                        -
                                                    </button>
                                                    <span>{count}</span>
                                                    <button
                                                        className="bg-blue-500 rounded-full size-7 text-center text-white flex justify-center items-center"
                                                        onClick={() => addToCart(product)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-lg font-bold">
                                        Total: ${getTotalPrice().toFixed(2)}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-500">Your cart is empty.</p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t absolute bottom-0 left-0 right-0">
                            <Link href="/checkout" className="w-full flex items-center py-3 px-4 justify-between text-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
                                <div className="font-[500] tracking-wide">Checkout</div>
                                <div className="bg-white rounded-full p-2 text-charistan">

                                    ${getTotalPrice().toFixed(2)}

                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            )}
        </>
    );

    if (typeof window !== 'undefined') {
        return ReactDOM.createPortal(cartElement, document.body);
    }
    return null;

};

export default CartSideBarWidget;

