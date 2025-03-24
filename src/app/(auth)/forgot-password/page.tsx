'use client';

import { Logo } from '@/components/icons';
import { PageCover } from '@/components/general';
import Link from 'next/link';

const ForgetPage: React.FC = () => {
    return (
        <PageCover>
            <div className="flex h-screen items-center justify-center bg-gray-100 border shadow-sm">
                <div className="m-auto w-full max-w-[420px] rounded-xl border border-gray-200 p-5 sm:p-8 shadow-sm bg-white">
                    <div className="mb-2 flex justify-center items-center text-center">
                        <Logo />
                    </div>

                    <h3 className="block text-base lg:text-2xl font-bold text-gray-800 mb-6 mt-4 text-center">
                        Forgot password?
                    </h3>
                    <div>
                        <form>
                            <div className="mb-4">
                                <label
                                    className="flex text-gray-700 text-[13px] leading-none mb-3"
                                    htmlFor="email"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full"
                            >
                                Reset password
                            </button>
                            <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
                                <hr className="w-full" />
                                <span className="absolute -top-2.5 bg-light px-2 -ms-4 start-2/4">
                                    Or
                                </span>
                            </div>
                            <div className="text-center text-sm text-body sm:text-base">
                                Don&apos;t have an account?
                                <Link
                                    className="text-charistan text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
                                    href="/register"
                                >
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageCover>
    );
};

export default ForgetPage;
