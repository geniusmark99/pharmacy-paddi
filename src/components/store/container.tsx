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

                    {/* <footer className="mt-auto bg-white shadow">
                        <div className="mx-auto w-full">
                            <div className="flex items-center justify-between bg-white px-5 py-6 md:px-8">
                                <span className="text-sm text-body sm:text-center">
                                    ©2024{" "}
                                    <a
                                        className="font-medium text-heading"
                                        href="https://pharmacyPaddi.com"
                                    >
                                        PharmacyPaddi
                                    </a>
                                    . Copyright © Charistan. All rights reserved worldwide.{" "}
                                    <a className="font-medium text-heading" href="https://charistan.com">
                                        Charistan
                                    </a>
                                </span>
                                <div className="flex space-x-6 text-sm font-medium text-body sm:justify-center" />
                            </div>
                        </div>
                    </footer> */}

                </main>
            </div>
        </div>

    );

}


export default Container;