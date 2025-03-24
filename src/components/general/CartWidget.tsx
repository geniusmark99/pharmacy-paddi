"use client"
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const CartWidget = () => {
    const { getTotalPrice } = useCart();

    return (
        <Link href="/carts">
            <div className="relative">
                <button className="text-gray-600 hover:text-gray-900">
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M17 13l1.5 6M9 21h6"
                        ></path>
                    </svg>
                </button>
                {getTotalPrice() > 0 && (
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                        {getTotalPrice()}
                    </span>
                )}
            </div>
        </Link>
    );
};

export default CartWidget;
