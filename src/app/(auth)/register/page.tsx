'use client'
import React, { FormEvent, ChangeEvent } from 'react'
import { Logo } from '@/components/icons';
import { PageCover, InputError } from '@/components/general';
import { useState } from "react";
import { useAuth } from '@/util/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface RegisterErrors {
    firstname?: string[]
    lastname?: string[]
    email?: string[]
    password?: string[]
    password_confirmation?: string[]
}


const RegisterPage: React.FC = () => {


    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/user/dashboard',
    })

    const [loading, setLoading] = useState(false);


    const [firstname, setFirstName] = useState<string>('')
    const [lastname, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
    const [errors, setErrors] = useState<RegisterErrors>({})


    const registerForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true);
        try {
            register({
                firstname,
                lastname,
                email,
                password,
                password_confirmation: passwordConfirmation,
                setErrors,
            })
        } catch (err: any) {
            toast.error(err.message || 'Registration failed');
        } finally {
            setLoading(false);
        }
    }


    return (
        <PageCover>


            <div className="flex h-screen lg:h-auto items-center bg-gray-100 justify-center mt-10 md:py-32">
                <div className="m-auto w-full max-w-[420px] rounded-xl border  p-5 sm:p-8 shadow-sm bg-white">
                    <div className="mb-2 flex  flex-col justify-center items-center text-center">
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gradient-color'>Register</h2>
                        <p className='uppercase text-center text-[10px] font-semibold tracking-wide mt-2 text-gray-600'>For users &amp; consumers </p>
                    </div>

                    <div>
                        <form onSubmit={registerForm} className="mt-4 space-y-4">
                            <div className="mb-4">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="firstname"
                                >
                                    First name
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    placeholder='Enter your first name'
                                    value={firstname}
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    onChange={event => setFirstName(event.target.value)}
                                />

                                <InputError messages={errors.firstname} className="mt-2" />
                            </div>



                            <div className="mb-4">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="lastname"
                                >
                                    Last name
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    value={lastname}
                                    type="text"
                                    placeholder='Enter your last name'
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                    onChange={event => setLastName(event.target.value)}
                                />
                                <InputError messages={errors.lastname} className="mt-2" />
                            </div>

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
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <InputError messages={errors.email} className="mt-2" />

                            </div>


                            <div className="mb-4">
                                <div className="mb-3 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold leading-none text-gray-700"
                                    >
                                        Password
                                    </label>

                                </div>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder='Enter your password'
                                        type="password"
                                        className="ltr:pl-4 rtl:pr-4 ltr:pr-12 rtl:pl-12 py-3 border-gray-200 rounded-lg px-4 flex focus:border-blue-500 focus:ring-blue-500 items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  disabled:opacity-50 disabled:pointer-events-none border-border-base focus:border-accent"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
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
                                <InputError messages={errors.password} className="mt-2" />
                            </div>


                            <div className="mb-4">
                                <div className="mb-3 flex items-center justify-between">
                                    <label
                                        htmlFor="password_confirmation"
                                        className="text-sm font-semibold leading-none text-gray-700"
                                    >
                                        Confirm Password
                                    </label>

                                </div>
                                <div className="relative">
                                    <input
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        placeholder='Enter your password'
                                        value={passwordConfirmation}
                                        type="password"
                                        className="ltr:pl-4 rtl:pr-4 ltr:pr-12 rtl:pl-12 py-3 border-gray-200 rounded-lg px-4 flex focus:border-blue-500 focus:ring-blue-500 items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm  disabled:opacity-50 disabled:pointer-events-none border-border-base focus:border-accent"
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        onChange={event =>
                                            setPasswordConfirmation(event.target.value)
                                        }
                                        required
                                    />
                                    <label
                                        htmlFor="password_confirmation"
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
                                <InputError
                                    messages={errors.password_confirmation}
                                    className="mt-2"
                                />

                            </div>





                            <button
                                type="submit"

                                className={`inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700  border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full `}
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>

                            <div className="relative mt-8 mb-6 flex flex-col items-center justify-center text-sm text-heading sm:mt-11 sm:mb-8">
                                <hr className="w-full" />
                                <span className="absolute -top-2.5 bg-light px-2 -ms-4 start-2/4">
                                    Or
                                </span>
                            </div>
                            <div className="text-center text-sm text-body sm:text-base">
                                Already have an account?{" "}
                                <a
                                    className=" text-charistan text-accent underline transition-colors duration-200 ms-1 hover:text-accent-hover hover:no-underline focus:text-accent-700 focus:no-underline focus:outline-none"
                                    href="/login"
                                >
                                    Signin
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageCover>


    )
}


export default RegisterPage;