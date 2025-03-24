'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isUserAuthenticated } from '@/util/auth';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

const UserProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (!isUserAuthenticated()) {
            router.push('/login'); // Redirect to login if not authenticated
        } else {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    return <>{children}</>; // Render children (admin pages)
};

export default UserProtectedRoute;
