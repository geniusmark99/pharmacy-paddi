'use client'
import React, { useState } from 'react'
import { Logo } from '@/components/icons';
import { PageCover } from '@/components/general';


const ProfessionalRegister: React.FC = () => {

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedState, setSelectedState] = useState('');

    return (

        <>
            <div className='bg-gray-100'>

                <div className="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
                    <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                        <div className="text-center mb-8 flex justify-center flex-col items-center">
                            <Logo />
                            <div className='mt-4'>
                                <h2 className="text-base md:text-xl font-bold text-gray-800">
                                    For Healthcare Professional
                                </h2>
                                <p className="text-sm text-gray-600">
                                    Create your account
                                </p>
                            </div>

                        </div>
                        <form>
                            {/* Section */}
                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                                <label
                                    htmlFor="af-payment-billing-contact"
                                    className="inline-block text-sm font-semibold tracking-wide"
                                >
                                    Your Information
                                </label>
                                <div className="mt-2 space-y-3">
                                    <input
                                        id="af-payment-billing-contact"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="First Name"
                                    />
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Last Name"
                                    />
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>
                            {/* End Section */}
                            {/* Section */}
                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                                <label
                                    htmlFor="af-payment-billing-address"
                                    className="inline-block text-sm font-semibold tracking-wide"
                                >
                                    Your office address
                                </label>
                                <div className="mt-2 space-y-3">
                                    <input
                                        id="af-payment-billing-address"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                        placeholder="Street Address"
                                    />
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                        placeholder="Apt, Syuite, Building (Optional)"
                                    />
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                            placeholder="Zip Code"
                                        />
                                        {/* <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                                        <option selected="">City</option>
                                        <option>City 1</option>
                                        <option>City 2</option>
                                        <option>City 3</option>
                                    </select> */}

                                        <select
                                            className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            value={selectedCity}
                                            onChange={(e) => setSelectedCity(e.target.value)}
                                        >
                                            <option value="" disabled>
                                                City
                                            </option>
                                            <option value="city1">City 1</option>
                                            <option value="city2">City 2</option>
                                            <option value="city3">City 3</option>
                                        </select>
                                        <select
                                            className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            value={selectedState}
                                            onChange={(e) => setSelectedState(e.target.value)}
                                        >
                                            <option value="" disabled>
                                                State
                                            </option>
                                            <option value="state1">State 1</option>
                                            <option value="state2">State 2</option>
                                            <option value="state3">State 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* End Section */}

                            {/* Section */}
                            <div className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                                <div className="sm:col-span-12">
                                    <h2 className="text-sm font-semibold tracking-wide inline-block text-gray-900">
                                        Profile &amp; Certification
                                    </h2>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="af-submit-application-resume-cv"
                                        className="inline-block text-sm font-medium text-gray-500 mt-2.5 dark:text-neutral-500"
                                    >
                                        Certification
                                    </label>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <label htmlFor="af-submit-application-resume-cv" className="sr-only">
                                        Choose file
                                    </label>
                                    <input
                                        type="file"
                                        name="af-submit-application-resume-cv"
                                        id="af-submit-application-resume-cv"
                                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:bg-gray-100 file:me-4 file:py-2 file:px-4"
                                    />
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-3">
                                    <div className="inline-block">
                                        <label
                                            htmlFor="af-submit-application-bio"
                                            className="inline-block text-sm font-medium text-gray-500 mt-2.5 "
                                        >
                                            Personal summary
                                        </label>
                                    </div>
                                </div>
                                {/* End Col */}
                                <div className="sm:col-span-9">
                                    <textarea
                                        id="af-submit-application-bio"
                                        className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                        rows={6}
                                        placeholder="Add a cover letter or anything else you want to share."
                                        defaultValue={""}
                                    />
                                </div>
                                {/* End Col */}
                            </div>
                            {/* End Section */}


                            {/* Section */}
                            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                                <label
                                    htmlFor="af-payment-payment-method"
                                    className="inline-block text-sm font-semibold tracking-wide"
                                >
                                    Your Payment method
                                </label>
                                <div className="mt-2 space-y-3">
                                    <input
                                        id="af-payment-payment-method"
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Name on Card"
                                    />
                                    <input
                                        type="text"
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                        placeholder="Card Number"
                                    />
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="Expiration Date"
                                        />
                                        <input
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            placeholder="CVV Code"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* End Section */}
                        </form>
                        <div className="mt-5 flex justify-end gap-x-2">
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Card Section */}
            </div>

        </>


    )
}


export default ProfessionalRegister;