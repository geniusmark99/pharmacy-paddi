'use client';
import Image from 'next/image'
import { useCart } from "../context/CartContext";
import ProductDetailsModal from "./ProductDetailsModal";
import { useState } from "react";
import { Product } from "./types"; // Assuming you have a Product type defined



const products: Product[] = [
    {
        id: 1, name: "Paracetamol", description: "Pain relief medicine", price: 10, image: "./paracetaamol.jpg",
        images: [
            "paracetaamol.jpg",
            "paracetaamol.jpg",
            "paracetaamol.jpg",
        ],

    },
    {
        id: 2, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },

    {
        id: 3, name: "Aspirin2", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 4, name: "Aspirin3", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 5, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 6, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 7, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 8, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 9, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 10, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 11, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },


    {
        id: 12, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },

    {
        id: 13, name: "Aspirin", description: "Fever reducer", price: 8, image: "./paracetaamol.jpg",
        images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150/0000FF",
            "https://via.placeholder.com/150/FFFF00",
        ],

    },

];

const ProductList = () => {
    const { cart, addToCart, removeFromCart, getTotalPrice } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <>
            {products.map((product) => (

                <article
                    key={product.id}
                    className=" h-full transform overflow-hidden rounded border border-border-200 
                    border-opacity-70 bg-light transition-all duration-200 hover:-translate-y-0.5 hover:border-transparent
                     hover:shadow">
                    <div className="relative flex w-auto cursor-pointer items-center justify-center sm:h-64 m-4 mb-0">
                        <span className="sr-only">Product Image</span>
                        <Image src={`/images/${product.image}`} alt='Drug Image' width={300} height={300} quality={100} />
                        {/* <div className="h-full w-full bg-cover bg-no-repeat" style={{ backgroundImage: `url(./images/${product.image})` }}>
                        </div> */}

                    </div>
                    <header className="p-3 md:p-6">
                        <div className="flex items-center justify-between">

                            <h3 className="cursor-pointer truncate text-xs text-body md:text-sm">
                                {product.name}
                            </h3>

                            <button className="flex items-center gap-x-2 transition-all scale-95 hover:scale-100 text-center bg-charistan rounded-full shadow-md shadow-blue-500/40 text-sm text-white px-2 py-1"
                                onClick={() => setSelectedProduct(product)}
                            >
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                    <path d="M24 9C12.701887 9 2.7325422 16.815632 0.048828125 27.121094 A 1.50015 1.50015 0 1 0 2.9511719 27.878906C5.2674578 18.984368 14.098113 12 24 12C33.901887 12 42.732542 18.984368 45.048828 27.878906 A 1.50015 1.50015 0 1 0 47.951172 27.121094C45.267458 16.815632 35.298113 9 24 9 z M 24 17C18.660602 17 14.300781 21.359825 14.300781 26.699219C14.300781 32.038612 18.660602 36.400391 24 36.400391C29.339398 36.400391 33.699219 32.038612 33.699219 26.699219C33.699219 21.359825 29.339398 17 24 17 z M 24 20C27.718078 20 30.699219 22.981143 30.699219 26.699219C30.699219 30.417295 27.718078 33.400391 24 33.400391C20.281922 33.400391 17.300781 30.417295 17.300781 26.699219C17.300781 22.981143 20.281922 20 24 20 z" fill="#ECE8E8" />
                                </svg>

                                View
                            </button>


                        </div>


                        <div className="mt-2 flex  items-center justify-between">
                            <div className="flex flex-col md:flex-row md:items-center gap-x-2">
                                <span className="text-sm font-semibold text-heading md:text-base">
                                    &#8358;{product.price}
                                </span>
                                <del className="mt-1 text-xs text-gray-400 md:mt-0 ltr:md:ml-2 rtl:md:mr-2">
                                    &#8358;45.00
                                </del>
                            </div>

                            <div className="flex overflow-hidden rounded text-white bg-charistan items-center">
                                {cart[product.id] && (
                                    <>
                                        <button
                                            className="flex h-7 w-7 items-center justify-center rounded border-none outline-none bg-charistan text-sm text-heading transition-colors 
                                            hover:border-accent hover:bg-blue-700 hover:text-light focus:border-accent 
                                            focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:w-9"
                                            onClick={() => removeFromCart(product.id)}>
                                            <span className="sr-only">minus</span>
                                            <svg
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                className="size-5 stroke-2 stroke-white"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <div className="flex flex-1 items-center text-white justify-center px-3 text-sm font-semibold">
                                            {cart[product.id].count}
                                        </div>

                                    </>
                                )}

                                <button
                                    onClick={() => addToCart(product)}
                                    className="flex h-7 w-7 border-none outline-none items-center justify-center rounded 
                                    bg-charistan text-sm text-heading transition-colors 
                                     hover:bg-blue-700 hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 md:w-9"

                                >
                                    <svg

                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="size-5 stroke-2 stroke-white"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>


                            </div>
                        </div>
                    </header>
                </article>

            ))}


            {selectedProduct && (
                <ProductDetailsModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

        </>
    );
};

export default ProductList;
