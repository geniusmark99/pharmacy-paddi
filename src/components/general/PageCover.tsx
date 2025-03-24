import React from 'react'
import HeaderWidget from './HeaderWidget'
import FooterWidget from './FooterWidget'

interface PageCoverProps {
    children: React.ReactNode;
}

const PageCover: React.FC<PageCoverProps> = ({ children }) => {
    return <>
        <main>
            <HeaderWidget />
            {children}
            <FooterWidget />
        </main>
    </>
}

export default PageCover
