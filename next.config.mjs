/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/',
                search: '',
            },
        ],

    },

    // async headers() {
    //     return [
    //         {
    //             source: '/user/dashboard', // Apply CSP globally
    //             headers: [
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: "default-src 'self'; script-src 'self'; connect-src 'self' http://127.0.0.1:8000;"
    //                 },
    //             ],
    //         },
    //     ]
    // },
};

export default nextConfig;

