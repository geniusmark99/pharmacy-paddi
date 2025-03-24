'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

type CartItem = {
    product: Product;
    count: number;
};


type CartContextType = {
    cart: Record<number, CartItem>;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    getTotalPrice: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Record<number, CartItem>>({});

    // Load cart from localStorage on mount
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const currentItem = prevCart[product.id];
            const updatedCount = currentItem ? currentItem.count + 1 : 1;

            return {
                ...prevCart,
                [product.id]: { product, count: updatedCount },
            };
        });
    };

    const removeFromCart = (productId: number) => {

        setCart((prevCart) => {
            const currentItem = prevCart[productId];
            if (!currentItem) return prevCart; // If the item doesn't exist, no changes
            const updatedCart = { ...prevCart };
            if (currentItem.count > 1) {
                updatedCart[productId] = {
                    ...currentItem,
                    count: currentItem.count - 1,
                };
            } else {
                delete updatedCart[productId];
            }
            return updatedCart;
        });
        // setCart((prevCart) => {
        //     const updatedCart = { ...prevCart };
        //     if (updatedCart[productId]?.count > 1) {
        //         updatedCart[productId].count -= 1;
        //     } else {
        //         delete updatedCart[productId];
        //     }
        //     return updatedCart;
        // });
    };

    const getTotalPrice = () =>
        Object.values(cart).reduce((total, item) => total + item.product.price * item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
