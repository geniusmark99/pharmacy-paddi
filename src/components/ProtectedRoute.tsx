'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { isAuthenticated } from '@/util/auth';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/admin/login');
        } else {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-screen">
            <svg
                className="size-12 animate-spin text-white mx-auto"
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

        </div>;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
