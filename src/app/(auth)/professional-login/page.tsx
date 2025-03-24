'use client'
import React from 'react'
import { Logo } from '@/components/icons';
import { PageCover } from '@/components/general';


const ProfessionalLoginPage: React.FC = () => {

    return (

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
                                placeholder='Enter your email address'
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                aria-invalid="false"
                            />
                        </div>
                        <div className="mb-4">
                            <div className="mb-3 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-semibold leading-none text-gray-700"
                                >
                                    Password
                                </label>
                                <a
                                    className="text-xs font-medium text-accent text-charistan hover:underline transition-colors duration-200 hover:text-accent-hover focus:font-semibold focus:text-accent-700 focus:outline-none"
                                    href="/professional-forget-password"
                                >
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    placeholder='Enter your password'
                                    type="password"
                                    // className="  text-sm   "

                                    className="ltr:pl-4 rtl:pr-4 ltr:pr-12 rtl:pl-12 py-3 border-gray-200 rounded-lg px-4 flex focus:border-blue-500 focus:ring-blue-500 items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  disabled:opacity-50 disabled:pointer-events-none border-border-base focus:border-accent"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                />
                                <label
                                    htmlFor="password"
                                    className="absolute top-5 -mt-2 text-body end-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <button
                            data-variant="normal"
                            className="inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700  border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full"
                        >
                            Login
                        </button>
                        <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
                            <hr className="w-full" />
                            <span className="absolute -top-2.5 bg-light px-2 -ms-4 start-2/4">
                                Or
                            </span>
                        </div>
                        <div className="text-center text-sm text-body sm:text-base">
                            Don`&apos;`t have any account?{" "}
                            <a
                                className=" text-charistan text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
                                href="/professional-register"
                            >
                                Register
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default ProfessionalLoginPage;