import React, { ReactNode } from 'react'
import HeaderNull from './HeaderNull';


interface ParentComponentProps {
    children: ReactNode;
    headerContent: ReactNode;
}


const ContainerNoSideBar: React.FC<ParentComponentProps> = ({ children, headerContent }) => {
    return (
        <div
            className="flex min-h-screen flex-col  transition-colors duration-150"
            dir="ltr"
        >
            <HeaderNull>
                <div>
                    {headerContent}
                </div>
            </HeaderNull>

            <div className="flex flex-1">
                <aside className="fixed bottom-0 z-10 hidden h-full w-72 bg-white shadow transition-[width] duration-300 ltr:left-0 ltr:right-auto rtl:right-0 rtl:left-auto lg:block pt-20 lg:w-76">
                    {headerContent}
                </aside>
                <main className="relative bg-light flex w-full flex-col justify-start transition-[padding] duration-300 pt-[72px] lg:pt-20 ltr:xl:pl-76 rtl:xl:pr-76 ltr:lg:pl-72 rtl:lg:pr-72 rtl:lg:pl-0">
                    {children}
                </main>
            </div>
        </div>

    );

}


export default ContainerNoSideBar;