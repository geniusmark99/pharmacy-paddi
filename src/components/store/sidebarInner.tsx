'use client';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SidebarInner() {
    const pathname = usePathname();
    return (
        <div className="sidebar-scrollbar h-full w-full overflow-x-hidden">
            <div className="h-full w-full">

                <div
                    style={{
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 0,
                        top: 0,
                        right: "auto",
                        left: 0,
                        width: "calc(100% + 0px)",
                        padding: 0
                    }}
                >
                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Main
                        </div>
                        <div className="space-y-2">
                            <Link
                                title="Dashboard"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                    text-gray-700 text-start focus:text-accent  font-medium 
                                    ${pathname === '/admin/dashboard' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                    `}
                                href="/admin/dashboard"

                            >
                                <span className="transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.75 4.375v3.75a.625.625 0 0 1-.625.625h-3.75a.625.625 0 0 1-.625-.625v-3.75a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625Zm6.875-.625h-3.75a.625.625 0 0 0-.625.625v3.75a.625.625 0 0 0 .625.625h3.75a.625.625 0 0 0 .625-.625v-3.75a.625.625 0 0 0-.625-.625Zm-7.5 7.5h-3.75a.625.625 0 0 0-.625.625v3.75a.625.625 0 0 0 .625.625h3.75a.625.625 0 0 0 .625-.625v-3.75a.625.625 0 0 0-.625-.625Zm7.5 0h-3.75a.624.624 0 0 0-.625.625v3.75a.624.624 0 0 0 .625.625h3.75a.624.624 0 0 0 .625-.625v-3.75a.624.624 0 0 0-.625-.625Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M15.625 10.625h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm-7.5-12.5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm7.5-5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm-7.5 2.5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Dashboard</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Shop management
                        </div>
                        <div className="space-y-2">


                            <Link
                                title="My Shops"


                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/shops' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/shops"
                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5 me-3 fill-current"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m17.5 5.625-2.228 7.243a1.25 1.25 0 0 1-1.196.882H6.568a1.25 1.25 0 0 1-1.202-.906L3.304 5.625H17.5Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M7.5 16.875a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm6.875-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.723-9.816-2.23 7.243a1.866 1.866 0 0 1-1.791 1.323H6.568a1.883 1.883 0 0 1-1.802-1.36l-2.827-9.89H.625a.625.625 0 0 1 0-1.25h1.314a1.256 1.256 0 0 1 1.202.906L3.775 5H17.5a.625.625 0 0 1 .598.809Zm-1.444.441H4.132l1.835 6.422a.625.625 0 0 0 .601.453h7.509a.625.625 0 0 0 .597-.441l1.98-6.434Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Shops</span>
                            </Link>

                            <Link
                                title="My Shops"

                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/my-shop' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/my-shop"

                            >
                                <span className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M17.5 4.375V6.25h-15V4.375a.625.625 0 0 1 .625-.625h13.75a.625.625 0 0 1 .625.625Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M16.875 3.125H3.125a1.25 1.25 0 0 0-1.25 1.25v11.25a1.25 1.25 0 0 0 1.25 1.25h13.75a1.25 1.25 0 0 0 1.25-1.25V4.375a1.25 1.25 0 0 0-1.25-1.25Zm0 1.25v1.25H3.125v-1.25h13.75Zm0 11.25H3.125v-8.75h13.75v8.75ZM13.75 8.75a3.75 3.75 0 0 1-7.5 0 .625.625 0 0 1 1.25 0 2.5 2.5 0 0 0 5 0 .625.625 0 1 1 1.25 0Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">My Shops</span>
                            </Link>

                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Product management
                        </div>
                        <div className="space-y-2">
                            <Link
                                title="Products"
                                href="/admin/products"


                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/products' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Products</span>
                            </Link>
                            <Link
                                title="Inventory"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/inventory' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/inventory"

                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={20}
                                        height={20}
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M17.5 6.25 10 10.625 2.5 6.25 10 1.875l7.5 4.375Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M18.04 13.437a.625.625 0 0 1-.227.853l-7.5 4.375a.625.625 0 0 1-.63 0l-7.5-4.375a.625.625 0 0 1 .63-1.08L10 17.401l7.188-4.19a.625.625 0 0 1 .852.226Zm-.852-3.977L10 13.651l-7.188-4.19a.625.625 0 0 0-.624 1.079l7.5 4.375a.625.625 0 0 0 .63 0l7.5-4.375a.627.627 0 0 0 .068-1.043.626.626 0 0 0-.698-.037ZM1.874 6.25a.625.625 0 0 1 .313-.54l7.5-4.375a.625.625 0 0 1 .63 0l7.5 4.375a.625.625 0 0 1 0 1.08l-7.5 4.375a.625.625 0 0 1-.63 0l-7.5-4.375a.625.625 0 0 1-.313-.54Zm1.866 0L10 9.902l6.26-3.652L10 2.598 3.74 6.25Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Inventory</span>
                            </Link>
                            <Link
                                title="Categories"
                                href="/products/categories"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/categories' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="m5 5 3.125 9.375h-6.25L5 5Zm10.625.938a3.438 3.438 0 1 0-6.875 0 3.438 3.438 0 0 0 6.875 0Zm-5 5.937v4.375H17.5v-4.375h-6.875Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M17.5 11.25h-6.875a.625.625 0 0 0-.625.625v4.375a.625.625 0 0 0 .625.625H17.5a.625.625 0 0 0 .625-.625v-4.375a.625.625 0 0 0-.625-.625Zm-.625 4.375H11.25V12.5h5.625v3.125ZM5.593 4.802a.625.625 0 0 0-1.186 0l-3.125 9.375a.625.625 0 0 0 .593.823h6.25a.625.625 0 0 0 .593-.823L5.593 4.802Zm-2.85 8.948L5 6.977l2.258 6.773H2.742ZM16.25 5.937a4.062 4.062 0 1 0-8.125 0 4.062 4.062 0 0 0 8.125 0Zm-6.875 0a2.812 2.812 0 1 1 5.625 0 2.812 2.812 0 0 1-5.625 0Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Categories</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Order management
                        </div>
                        <div className="space-y-2">
                            <Link
                                title="Orders"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/orders' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/orders"
                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M16.875 5v10h-8.75V5h8.75Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M17.5 10a.625.625 0 0 1-.625.625h-8.75a.625.625 0 0 1 0-1.25h8.75A.625.625 0 0 1 17.5 10ZM8.125 5.625h8.75a.625.625 0 0 0 0-1.25h-8.75a.625.625 0 0 0 0 1.25Zm8.75 8.75h-8.75a.625.625 0 1 0 0 1.25h8.75a.625.625 0 0 0 0-1.25ZM3.405 4.309l.345-.173v3.989a.625.625 0 0 0 1.25 0v-5a.625.625 0 0 0-.905-.56l-1.25.626a.625.625 0 0 0 .56 1.118Zm2.827 7.935a1.855 1.855 0 0 0-.75-1.246 1.942 1.942 0 0 0-2.665.367 1.846 1.846 0 0 0-.279.505.625.625 0 1 0 1.172.427.614.614 0 0 1 .092-.167.685.685 0 0 1 1.108.058.597.597 0 0 1-.044.694l-2.242 2.994a.626.626 0 0 0 .501.999h2.5a.625.625 0 0 0 0-1.25h-1.25l1.49-1.995a1.833 1.833 0 0 0 .367-1.386Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Orders</span>
                            </Link>
                            <Link
                                title="Create Order"

                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/create-order' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/create-order"

                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M15.625 6.875 10 12.5H7.5V10l5.625-5.625 2.5 2.5Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="m17.942 4.558-2.5-2.5a.626.626 0 0 0-.884 0l-7.5 7.5a.625.625 0 0 0-.183.442v2.5a.625.625 0 0 0 .625.625H10a.624.624 0 0 0 .442-.183l7.5-7.5a.626.626 0 0 0 0-.884Zm-8.2 7.317H8.124v-1.616l5-5 1.616 1.616-5 5Zm5.883-5.884-1.616-1.616.991-.991L16.616 5l-.991.991ZM17.5 9.375v6.875a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V3.75A1.25 1.25 0 0 1 3.75 2.5h6.875a.625.625 0 1 1 0 1.25H3.75v12.5h12.5V9.375a.625.625 0 1 1 1.25 0Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Create Order</span>
                            </Link>
                            <Link
                                title="Transactions"
                                href="/admin/transactions"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/transactions' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M16.875 3.75v8.125a.624.624 0 0 1-.625.625h-3.125v3.75a.624.624 0 0 1-.625.625H3.75a.625.625 0 0 1-.625-.625V8.125A.625.625 0 0 1 3.75 7.5h3.125V3.75a.625.625 0 0 1 .625-.625h8.75a.625.625 0 0 1 .625.625Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M17.5 3.75v8.125a1.25 1.25 0 0 1-1.25 1.25H7.759l.808.808a.626.626 0 0 1-.884.884l-1.875-1.875a.625.625 0 0 1 0-.884l1.875-1.875a.625.625 0 1 1 .884.884l-.808.808h8.491V3.75H7.5v.625a.625.625 0 0 1-1.25 0V3.75A1.25 1.25 0 0 1 7.5 2.5h8.75a1.25 1.25 0 0 1 1.25 1.25ZM13.125 15a.624.624 0 0 0-.625.625v.625H3.75V8.125h8.491l-.808.808a.625.625 0 0 0 .884.884l1.875-1.875a.626.626 0 0 0 0-.884l-1.875-1.875a.625.625 0 0 0-.884.884l.808.808H3.75a1.25 1.25 0 0 0-1.25 1.25v8.125a1.25 1.25 0 0 0 1.25 1.25h8.75a1.25 1.25 0 0 0 1.25-1.25v-.625a.624.624 0 0 0-.625-.625Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Transactions</span>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            User control
                        </div>
                        <div className="space-y-2">
                            <Link
                                title="All users"
                                href="/admin/all-users"

                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/all-users' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                            >
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M13.125 11.25a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0ZM5 4.375a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm10 0a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M19.125 11.75a.625.625 0 0 1-.875-.125A4.032 4.032 0 0 0 15 10a.625.625 0 1 1 0-1.25 1.875 1.875 0 1 0-1.816-2.344.626.626 0 0 1-1.21-.312 3.125 3.125 0 1 1 5.135 3.086c.85.368 1.589.952 2.143 1.694a.624.624 0 0 1-.127.876Zm-4.21 4.812a.623.623 0 0 1-.454.947.623.623 0 0 1-.627-.322 4.454 4.454 0 0 0-7.668 0 .625.625 0 1 1-1.082-.625 5.63 5.63 0 0 1 2.636-2.337 3.75 3.75 0 1 1 4.56 0 5.63 5.63 0 0 1 2.636 2.337ZM10 13.75a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5.625 9.375A.625.625 0 0 0 5 8.75a1.875 1.875 0 1 1 1.816-2.344.625.625 0 1 0 1.21-.312A3.125 3.125 0 1 0 2.892 9.18 5.308 5.308 0 0 0 .75 10.874a.625.625 0 0 0 1 .75A4.031 4.031 0 0 1 5 10a.625.625 0 0 0 .625-.625Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">All users</span>
                            </Link>



                            <Link
                                title="Customers"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/customers' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}
                                href="/admin/customers"
                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M8.125 3.125a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Zm8.476 7.774-3.54-4.014a1.875 1.875 0 0 0-1.407-.635H8.346a1.875 1.875 0 0 0-1.406.635L3.4 10.9a.94.94 0 0 0 1.327 1.328L7.5 10l-1.787 6.791a.938.938 0 0 0 1.7.793L10 13.125l2.588 4.459a.938.938 0 0 0 1.699-.793L12.5 10l2.774 2.226a.939.939 0 1 0 1.328-1.328l-.001.001Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M12.5 3.125a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM10 4.375a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7.058 6.098-3.53-4.002a2.5 2.5 0 0 0-1.874-.846H8.346a2.5 2.5 0 0 0-1.875.846l-3.529 4.002a1.562 1.562 0 0 0 2.198 2.22l1.273-1.021-1.292 4.912a1.563 1.563 0 0 0 2.848 1.291L10 14.37l2.031 3.505a1.562 1.562 0 0 0 2.845-1.29l-1.29-4.913 1.274 1.022a1.563 1.563 0 0 0 2.198-2.221Zm-.9 1.31a.311.311 0 0 1-.442 0c-.016-.016-.032-.031-.05-.045L12.89 9.512a.625.625 0 0 0-.996.644l1.788 6.797c.009.036.022.072.037.106a.312.312 0 1 1-.566.264.502.502 0 0 0-.026-.05l-2.587-4.46a.625.625 0 0 0-1.082 0L6.875 17.27a.487.487 0 0 0-.026.049.313.313 0 0 1-.567-.264.601.601 0 0 0 .038-.106l1.785-6.793a.625.625 0 0 0-.996-.644l-2.775 2.226c-.018.014-.034.03-.05.045a.311.311 0 0 1-.517-.097.313.313 0 0 1 .074-.345.46.46 0 0 0 .027-.028l3.54-4.015a1.25 1.25 0 0 1 .938-.423h3.308a1.25 1.25 0 0 1 .937.423l3.541 4.014.027.03a.313.313 0 0 1 0 .44Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Customers</span>
                            </Link>
                        </div>
                    </div>


                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Feature Management
                        </div>
                        <div className="space-y-2">
                            <Link
                                title="Message"

                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/message' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}

                                href="/admin/message"
                            >
                                <span className="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M18.106 16.901a.469.469 0 0 1-.58.58l-2.333-.666a5.628 5.628 0 0 1-8-3.074 5.625 5.625 0 0 0 5.614-7.482 5.625 5.625 0 0 1 4.631 8.31l.668 2.332Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M18.109 14.635a6.25 6.25 0 0 0-4.861-8.964A6.25 6.25 0 1 0 1.89 10.885l-.598 2.096a1.094 1.094 0 0 0 1.352 1.351l2.095-.598c.632.31 1.312.512 2.012.596a6.25 6.25 0 0 0 8.508 3.154l2.095.598a1.094 1.094 0 0 0 1.352-1.351l-.598-2.096ZM4.807 12.44a.64.64 0 0 0-.172.024l-2.063.59.59-2.064a.625.625 0 0 0-.053-.469 4.996 4.996 0 1 1 1.997 1.998.62.62 0 0 0-.299-.079Zm12.031 2.3.59 2.063-2.063-.59a.625.625 0 0 0-.469.054 5.005 5.005 0 0 1-6.744-1.925 6.245 6.245 0 0 0 5.496-7.333 5 5 0 0 1 3.243 7.26.624.624 0 0 0-.053.471Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Message</span>
                            </Link>
                            <Link
                                title="Store Notice"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                        text-gray-700 text-start focus:text-accent  font-medium transition
                                        ${pathname === '/admin/store-notices' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                        `}

                                href="/admin/store-notices"
                            >
                                <span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="size-5"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M17.5 15a1.875 1.875 0 0 1-1.875 1.875h-8.75A1.875 1.875 0 0 0 8.75 15c0-.781-.625-1.25-.625-1.25h8.75s.625.469.625 1.25Z"
                                            opacity="0.2"
                                        />
                                        <path
                                            fill="currentColor"
                                            d="M7.5 8.125a.625.625 0 0 1 .625-.625h5a.625.625 0 1 1 0 1.25h-5a.625.625 0 0 1-.625-.625Zm.625 3.125h5a.624.624 0 1 0 0-1.25h-5a.625.625 0 1 0 0 1.25Zm10 3.75a2.5 2.5 0 0 1-2.5 2.5h-8.75a2.5 2.5 0 0 1-2.5-2.5V5a1.25 1.25 0 0 0-2.5 0c0 .448.377.752.381.755a.625.625 0 0 1-.755.994C1.41 6.683.625 6.063.625 5a2.5 2.5 0 0 1 2.5-2.5H13.75a2.5 2.5 0 0 1 2.5 2.5v8.125h.625c.135 0 .267.044.375.125.094.067.875.687.875 1.75ZM7.52 13.553a.63.63 0 0 1 .605-.428H15V5a1.25 1.25 0 0 0-1.25-1.25H5.288c.221.38.338.81.337 1.25v10a1.25 1.25 0 0 0 2.5 0c0-.448-.377-.752-.381-.755a.611.611 0 0 1-.224-.692ZM16.875 15a.983.983 0 0 0-.252-.625H9.279c.063.202.095.413.094.625.001.439-.115.87-.335 1.25h6.587a1.25 1.25 0 0 0 1.25-1.25Z"
                                        />
                                    </svg>
                                </span>
                                <span className="">Store Notice</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col px-5 pt-6 pb-3">
                        <div className="px-3 pb-5 text-xs font-semibold uppercase tracking-[0.05em] text-body/60">
                            Site management
                        </div>
                        <div className="space-y-2">
                            <Link href="/admin/settings"
                                className={`group flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-sm 
                                    text-gray-700 text-start focus:text-accent  font-medium transition
                                    ${pathname === '/admin/settings' ? 'bg-charistan text-white' : 'hover:bg-charistan hover:text-white'}
                                    `}

                            >
                                <div className="flex w-full items-center text-sm">
                                    <span className="">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            className="size-5 me-3"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M15.625 3.125v13.75H4.375V3.125h11.25Z"
                                                opacity="0.2"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M10.625 9.375v7.5a.624.624 0 1 1-1.25 0v-7.5a.625.625 0 0 1 1.25 0Zm5 5.625a.624.624 0 0 0-.625.625v1.25a.624.624 0 1 0 1.25 0v-1.25a.624.624 0 0 0-.625-.625Zm1.875-2.5h-1.25V3.125a.625.625 0 1 0-1.25 0V12.5h-1.25a.624.624 0 1 0 0 1.25h3.75a.624.624 0 1 0 0-1.25Zm-13.125 0a.625.625 0 0 0-.625.625v3.75a.625.625 0 1 0 1.25 0v-3.75a.625.625 0 0 0-.625-.625ZM6.25 10H5V3.125a.625.625 0 0 0-1.25 0V10H2.5a.625.625 0 1 0 0 1.25h3.75a.625.625 0 1 0 0-1.25Zm5.625-3.75h-1.25V3.125a.625.625 0 1 0-1.25 0V6.25h-1.25a.625.625 0 0 0 0 1.25h3.75a.625.625 0 1 0 0-1.25Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="">Settings</span>
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-3.5 w-3.5 shrink-0 opacity-75 transition-transform duration-300 ltr:ml-auto ltr:mr-0 rtl:mr-auto rtl:ml-0"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                    <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{ width: "0%" }} />
                    </div>
                </div>
                <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-auto-hide os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable">
                    <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle" style={{ height: "0%" }} />
                    </div>
                </div>
            </div>
        </div>

    )
}
