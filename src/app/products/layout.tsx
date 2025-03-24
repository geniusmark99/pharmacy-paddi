import React from 'react'
import Container from '@/components/store/container';



export default function ProductLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Container>
            {children}
        </Container>
    )
}
