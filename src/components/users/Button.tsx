"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
        []
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();

        setRipples((prev) => [...prev, { x, y, id }]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 600);
    };

    const buttonStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-600 text-white hover:bg-gray-700",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            {...props}
            onClick={handleClick}
            className={`relative overflow-hidden px-4 py-2 rounded-md transition-all duration-300 ease-in-out ${buttonStyles[variant]} ${className}`}
        >
            {children}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute bg-white opacity-50 rounded-full"
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 5, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "ease-out" }}
                    style={{
                        top: ripple.y - 10,
                        left: ripple.x - 10,
                        width: 20,
                        height: 20,
                    }}
                />
            ))}
        </button>
    );
}
