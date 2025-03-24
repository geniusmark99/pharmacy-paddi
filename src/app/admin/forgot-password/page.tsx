"use client";
import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/useToast";
// import { forgotPassword } from "../../../util/api";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const { showToast, ToastComponent } = useToast();
    const [loading, setLoading] = useState(false);

    // const handleForgotPassword = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     try {
    //         await forgotPassword(email);
    //     } catch (error: any) {
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // return (
    //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //         <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    //             <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
    //             <form onSubmit={handleForgotPassword} className="space-y-4">
    //                 <input
    //                     type="email"
    //                     placeholder="Enter your email"
    //                     className="w-full p-3 border rounded-md"
    //                     value={email}
    //                     onChange={(e) => setEmail(e.target.value)}
    //                     required
    //                 />
    //                 <button
    //                     type="submit"
    //                     className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
    //                     disabled={loading}
    //                 >
    //                     {loading ? "Sending..." : "Send Reset Link"}
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // );

    return <>
        <div className="flex h-screen items-center justify-center bg-gray-100">
            {ToastComponent}
            <div className="m-auto w-full max-w-[420px] rounded-xl border p-5 sm:p-8 shadow-sm bg-white">
                <div className="mb-2 flex  flex-col justify-center items-center text-center">
                    <p className='text-center text-[10px] md:text-base font-semibold tracking-wide mt-2 text-transparent bg-clip-text bg-gradient-to-r from-charistan to-emerald-400'>Admin Forget password</p>
                </div>

                <div>
                    <form>
                        <div className="mb-4">
                            <label
                                className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                htmlFor="email"
                            >
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder='Enter your email address'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                autoComplete="off"
                                autoCorrect="off"
                                autoCapitalize="off"
                                spellCheck="false"
                                aria-invalid="false"
                            />
                        </div>



                        <button
                            type="submit"
                            className="inline-flex bg-charistan text-white items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700  border border-transparent hover:bg-charistan-light px-5 py-0 h-12 w-full"

                            disabled={loading}
                        >
                            {loading ? "Loging in..." : "Login"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </>

}
