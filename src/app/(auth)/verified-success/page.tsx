'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VerifiedSuccess() {
    const router = useRouter();

    useEffect(() => {
        // Auto-redirect to dashboard after verification success
        const timer = setTimeout(() => {
            router.push('/user/dashboard');
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-green-100">
            <h1 className="text-2xl font-bold text-green-700">✅ Email Verified Successfully!</h1>
            <p className="mt-4 text-green-600">Redirecting to your dashboard...</p>
        </div>
    );
}
