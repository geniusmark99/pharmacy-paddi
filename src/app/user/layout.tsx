import { Roboto } from 'next/font/google'
import { Sidebar, Header } from '@/components/users'

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex w-full bg-gray-100 h-screen '>
            <Sidebar />
            <div className="flex-1 overflow-y-auto bg-white">
                <Header />
                {children}
            </div>
        </main>
    )
}