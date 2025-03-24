import { Roboto } from 'next/font/google'
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>{children}</main>
    )
}