'use client'
import React from 'react'
import { PageCover } from '@/components/general'

export default function page() {
    return (
        <PageCover>
            <div className="bg-gray-100 px-4 py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
                <div className='flex flex-col lg:flex-row'>
                    <div className="w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* Card */}
                        <div className="bg-white rounded-xl shadow p-4 sm:p-7 ">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ">
                                    Payment
                                </h2>
                                <p className="text-sm text-gray-600 ">
                                    Manage your payment methods.
                                </p>
                            </div>
                            <form>
                                {/* Section */}
                                <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 ">
                                    <label
                                        htmlFor="af-payment-billing-contact"
                                        className="inline-block text-sm font-medium "
                                    >
                                        Billing contact
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
                                <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200  ">
                                    <label
                                        htmlFor="af-payment-billing-address"
                                        className="inline-block text-sm font-medium "
                                    >
                                        Billing address
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
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                <option>City</option>
                                                <option>City 1</option>
                                                <option>City 2</option>
                                                <option>City 3</option>
                                            </select>
                                            <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none ">
                                                <option>State</option>
                                                <option>State 1</option>
                                                <option>State 2</option>
                                                <option>State 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                {/* End Section */}
                                {/* Section */}
                                <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                                    <label
                                        htmlFor="af-payment-payment-method"
                                        className="inline-block text-sm font-medium"
                                    >
                                        Payment method
                                    </label>
                                    <div className="mt-2 space-y-3">
                                        <input
                                            id="af-payment-payment-method"
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                                            placeholder="Name on Card"
                                        />
                                        <input
                                            type="text"
                                            className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
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
                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
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


                    <div className="w-full max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                    </div>


                </div>
            </div>
        </PageCover>
    )
}
