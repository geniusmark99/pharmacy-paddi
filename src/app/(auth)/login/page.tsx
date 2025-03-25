'use client'
import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { Logo } from '@/components/icons';
import { PageCover } from '@/components/general';
import { useAuth } from "../../../util/api";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/useToast";

interface LoginErrors {
    email?: string[]
    password?: string[]
}



const LoginPage: React.FC = () => {

    const router = useRouter()
    // const searchParams = useSearchParams()

    // const { login } = useAuth({
    //     middleware: 'guest',
    //     redirectIfAuthenticated: '/user/dashboard',
    // })

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [shouldRemember, setShouldRemember] = useState<boolean>(false)
    const [errors, setErrors] = useState<LoginErrors>({})
    const [status, setStatus] = useState<string | null>(null)
    const [passwordVisible, setPasswordVisible] = useState(false);



    // useEffect(() => {
    //     const resetParam = searchParams.get('reset')
    //     if (resetParam && Object.keys(errors).length === 0) {
    //         setStatus(atob(resetParam))
    //     } else {
    //         setStatus(null)
    //     }
    // }, [searchParams, errors])



    const loginForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // login({
        //     email,
        //     password,
        //     setErrors,
        //     setStatus,
        // })
    }

    return (
        <PageCover>
            <div className="flex h-screen items-center justify-center bg-gray-100">
                {/* {ToastComponent} */}

                <div className="m-auto w-full max-w-[420px] rounded-xl border p-5 sm:p-8 shadow-sm bg-white">
                    <div className="mb-2 flex  flex-col justify-center items-center text-center">
                        <Logo />
                        <p className='uppercase text-center text-[10px] font-semibold tracking-wide mt-2 text-gray-600'>For users &amp; consumers </p>
                    </div>

                    <div>
                        <form onSubmit={loginForm}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                        href="/forgot-password"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder='Enter your password'
                                        type={passwordVisible ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}

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

                                        <button
                                            type="button"
                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                        >

                                            {passwordVisible ?

                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-charistan" viewBox="0 0 48 48">
                                                    <path d="M42.470703 3.9863281 A 1.50015 1.50015 0 0 0 41.439453 4.4394531L4.4394531 41.439453 A 1.50015 1.50015 0 1 0 6.5605469 43.560547L16.916016 33.205078C18.6847 35.119215 21.200325 36.330078 24 36.330078C29.33 36.330078 33.669922 31.989922 33.669922 26.669922C33.669922 23.870103 32.45923 21.347142 30.544922 19.576172L35.052734 15.068359C39.90447 17.90912 43.668811 22.496845 45.050781 27.869141C45.220781 28.549141 45.83 29 46.5 29C46.62 29 46.749141 28.989219 46.869141 28.949219C47.679141 28.749219 48.159219 27.930859 47.949219 27.130859C46.409379 21.128251 42.461227 16.073087 37.277344 12.84375L43.560547 6.5605469 A 1.50015 1.50015 0 0 0 42.470703 3.9863281 z M 23.990234 9C12.820234 9 2.7507813 16.620859 0.05078125 27.130859C-0.15921875 27.930859 0.32085937 28.749219 1.1308594 28.949219C1.9308594 29.159219 2.7492187 28.679141 2.9492188 27.869141C5.2792187 18.819141 14.330234 12 23.990234 12C25.700234 12 27.389531 12.209141 29.019531 12.619141L31.480469 10.160156C29.090469 9.4001562 26.570234 9 23.990234 9 z M 24 17C18.67 17 14.339844 21.339922 14.339844 26.669922C14.339844 26.869922 14.349375 27.079297 14.359375 27.279297L18.150391 23.490234C18.760391 22.360234 19.700078 21.420547 20.830078 20.810547L24.619141 17.019531C24.409141 17.009531 24.21 17 24 17 z M 28.425781 21.695312C29.796425 22.916506 30.669922 24.687458 30.669922 26.669922C30.669922 30.339922 27.68 33.330078 24 33.330078C22.025372 33.330078 20.255983 32.456581 19.035156 31.085938L28.425781 21.695312 z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5 fill-charistan" viewBox="0 0 48 48">
                                                    <path d="M23.986328 9C12.666705 9 2.6928719 16.845918 0.046875 27.126953 A 1.5002454 1.5002454 0 0 0 2.953125 27.873047C5.2331281 19.014082 14.065951 12 23.986328 12C33.906705 12 42.767507 19.01655 45.046875 27.873047 A 1.5002454 1.5002454 0 0 0 47.953125 27.126953C45.306493 16.84345 35.305951 9 23.986328 9 z M 24.001953 17C18.681885 17 14.337891 21.343999 14.337891 26.664062C14.337891 31.984127 18.681885 36.330078 24.001953 36.330078C29.322021 36.330078 33.667969 31.984126 33.667969 26.664062C33.667969 21.343999 29.322021 17 24.001953 17 z M 24.001953 20C27.700702 20 30.667969 22.965317 30.667969 26.664062C30.667969 30.36281 27.700702 33.330078 24.001953 33.330078C20.303205 33.330078 17.337891 30.362809 17.337891 26.664062C17.337891 22.965317 20.303205 20 24.001953 20 z" />
                                                </svg>
                                            }

                                        </button>

                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700  border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full"
                                disabled={loading}
                            >
                                {loading ?
                                    <svg
                                        className="w-5 h-5 animate-spin text-white mx-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                        ></path>
                                    </svg>

                                    : "Login"}
                            </button>
                            <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
                                <hr className="w-full" />
                                <span className="absolute -top-2.5 bg-light px-2 -ms-4 start-2/4">
                                    Or
                                </span>
                            </div>
                            <div className="text-center text-sm text-body sm:text-base">
                                Don`&apos;`t have any account?{" "}
                                <Link
                                    className=" text-charistan text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
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


    )
}


export default LoginPage;