'use client'
import React from 'react'
import { Logo } from '@/components/icons';
import { PageCover } from '@/components/general';


const professionalForgetPage: React.FC = () => {

    return (
        // <PageCover>
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="m-auto w-full max-w-[420px] rounded-xl border bg-light p-5 sm:p-8 shadow-sm bg-white">
                <div className="mb-2 flex  flex-col justify-center items-center text-center">
                    <Logo />
                    <p className='uppercase text-center text-[10px] font-semibold tracking-wide mt-2 text-gray-600'>For Healthcare professionals</p>
                </div>

                <div>
                    <form>
                        <div className="mb-4">
                            <label
                                className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Enter your email address '
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                aria-invalid="false"
                            />
                        </div>

                        <button
                            data-variant="normal"
                            className="inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700  border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full"
                        >
                            Reset password
                        </button>

                        <div className="text-center mt-4 text-sm text-body  sm:text-sm text-gray-700">

                            Did you just remember?{" "}
                            <a
                                className=" text-charistan text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
                                href="/professional-login"
                            >
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        // </PageCover>


    )
}


export default professionalForgetPage