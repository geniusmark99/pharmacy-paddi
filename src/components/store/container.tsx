import React, { ReactNode } from 'react'
import Header from './header'
import Sidebar from './sidebar'


interface ParentComponentProps {
    children: ReactNode;
}


const Container: React.FC<ParentComponentProps> = ({ children }) => {
    return (
        <div
            className="flex min-h-screen flex-col  transition-colors duration-150"
            dir="ltr"
        >
            <Header />

            <div className="flex flex-1">
                <Sidebar />
                <main className="relative bg-light flex w-full flex-col justify-start transition-[padding] duration-300 pt-[72px] lg:pt-20 ltr:xl:pl-76 rtl:xl:pr-76 ltr:lg:pl-72 rtl:lg:pr-72 rtl:lg:pl-0">
                    {children}
                </main>
            </div>
        </div>

    );

}


export default Container;