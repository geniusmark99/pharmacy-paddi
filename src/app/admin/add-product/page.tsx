import React from 'react'
import Link from 'next/link'
import ContainerNoSideBar from '@/components/store/ContainerNoSideBar'


const AdminProfile: React.FC = () => {
    return (
        <ContainerNoSideBar headerContent={

            <div className="relative pt-10 pb-10 px-8">
                <div className="flex flex-wrap gap-3">
                    <div className="relative h-12 w-12 shrink-0 rounded-full flex bg-[#2B2C2E] text-[#F0F0F0]">
                        <div className="relative overflow-hidden mx-auto self-end">
                            <svg
                                width={32}
                                height={41}
                                viewBox="0 0 32 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="-mb-px"
                            >
                                <path
                                    d="M23.142 30.63l7.162 3.907c.42.229.798.51 1.15.818A23.887 23.887 0 0115.998 41C10.154 41 4.8 38.907.635 35.434a6.35 6.35 0 011.263-.845l7.668-3.835a2.925 2.925 0 001.617-2.616v-3.01c-.216-.245-.462-.56-.726-.932a17.65 17.65 0 01-2.383-4.805A2.409 2.409 0 016.365 17.1v-3.212c0-.706.315-1.338.803-1.78V7.464S6.214.238 15.998.238c9.785 0 8.83 7.226 8.83 7.226v4.643c.49.442.803 1.074.803 1.78V17.1c0 .846-.444 1.591-1.11 2.021-.803 3.494-2.904 6.009-2.904 6.009v2.935c.001 1.069.586 2.053 1.525 2.566z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="absolute top-0 -right-0.5 text-base text-accent">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.018 2.216A2.62 2.62 0 017 1.312c.792 0 1.5.35 1.982.904a2.62 2.62 0 012.643 1.7c.132.351.186.728.16 1.102a2.62 2.62 0 01.666 3.071 2.618 2.618 0 01-.667.893 2.618 2.618 0 01-.763 2.04 2.62 2.62 0 01-2.04.762 2.618 2.618 0 01-3.07.667 2.618 2.618 0 01-.893-.667 2.62 2.62 0 01-2.643-1.7 2.62 2.62 0 01-.16-1.102A2.62 2.62 0 011.313 7c0-.792.35-1.5.903-1.982a2.62 2.62 0 011.7-2.643 2.62 2.62 0 011.102-.159zm4.088 3.726a.437.437 0 10-.712-.509L6.506 8.076l-.947-.948a.438.438 0 00-.618.619l1.312 1.312a.438.438 0 00.665-.055l2.188-3.062z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-1 self-center">
                        <h3 className="mb-1.5 break-all text-xl font-semibold leading-none text-muted-black">
                            Pharm. Enoch
                        </h3>
                        <div className="flex items-start gap-1 ">
                            <svg
                                width="1em"
                                height="1em"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0 text-base text-[#E5E5E5]"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4.608 2a2 2 0 00-1.912 1.412L1.089 8.637A2 2 0 001 9.225V12a2 2 0 002 2h10a2 2 0 002-2V9.225c0-.199-.03-.397-.089-.588l-1.608-5.225A2 2 0 0011.392 2H4.608zm9.215 6.5l-1.475-4.794A1 1 0 0011.392 3H4.608a1 1 0 00-.956.706L2.177 8.5h1.896a2 2 0 011.79 1.105l.17.342a1 1 0 00.895.553h2.145a1 1 0 00.895-.553l.17-.342a2 2 0 011.79-1.105h1.895z"
                                    fill="currentColor"
                                />
                            </svg>
                            <a
                                className="break-all text-xs font-normal text-gray-500"
                                href="mailTo:admin@pharamacypadddi.com"
                            >
                                admin@pharmacypaddi.com
                            </a>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-sm text-muted">
                    Please add your{" "}
                    <Link className="text-charistan underline" href="/admin/profile?edit=true">
                        Profile
                    </Link>
                </p>
                <div className="absolute -left-1 bottom-0 h-px w-[calc(100%)] border-b border-dashed border-b-[#E5E5E5]" />
            </div>

        }>
            <div className="h-full p-5 md:p-8">
                <div className="flex border-b border-dashed border-gray-300 pb-5 md:pb-7">
                    <h1 className="text-lg font-semibold text-gray-700">Add Products</h1>
                </div>
                <form>
                    <div className="my-5 flex flex-wrap border-b border-dashed border-gray-300 pb-8 sm:my-8">
                        <div className="sm:pe-4 md:pe-5 w-full px-0 pb-5 sm:w-4/12 sm:py-8 md:w-1/3">
                            <h4 className="text-base font-semibold mb-2 text-gray-700">Product name</h4>
                            <p className="text-sm text-gray-500">Enter the product name here</p>
                        </div>
                        <div className="rounded bg-white p-5 shadow shadow-gray-300 md:p-8 mb-5 w-full sm:w-8/12 md:w-2/3">
                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="product_name"
                                >
                                    Product name
                                </label>
                                <input
                                    id="product_name"
                                    name="product_name"
                                    type="text"
                                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-300 focus:border-charistan h-12"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                />
                            </div>
                        </div>
                        <div className="text-end w-full">
                            <button
                                data-variant="normal"
                                className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded 
                                outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-charistan-700 bg-charistan 
                                text-light border border-transparent hover:bg-charistan/80 px-5 py-0 h-12"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

                <form>
                    <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-gray-300 sm:my-8">
                        <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                            <h4 className="text-base font-semibold text-gray-700 mb-2">Product Image</h4>
                            <p className="text-sm text-gray-500">
                                Upload your product image from here. Dimension of the product should be
                                140 x 140px
                            </p>
                        </div>
                        <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
                            <section className="upload">
                                <div
                                    role="presentation"
                                    tabIndex={0}
                                    className="border-dashed border-2 border-gray-300 h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-charistan-400 focus:outline-none relative"
                                >
                                    <input
                                        accept="image/*,.jpg,.jpeg,.png,.webp"
                                        type="file"
                                        tabIndex={-1}
                                        style={{ display: "none" }}
                                    />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="41px"
                                        height="30px"
                                        viewBox="0 0 40.909 30"
                                        className="text-gray-200"
                                    >
                                        <g transform="translate(0 -73.091)">
                                            <path
                                                data-name="Path 2125"
                                                d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                                                transform="translate(0)"
                                                fill="currentColor"
                                            />
                                        </g>
                                    </svg>
                                    <p className="mt-4 text-sm text-center text-gray-500">
                                        <span className="font-semibold text-charistan">Upload an image</span>{" "}
                                        or drag and drop <br />
                                        <span className="text-xs text-gray-500">PNG, JPG</span>
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-gray-300 sm:my-8">
                        <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                            <h4 className="text-base font-semibold text-gray-700 mb-2">
                                Product Info
                            </h4>
                            <p className="text-sm text-gray-500">
                                Add your product information from here
                            </p>
                        </div>
                        <div className="rounded bg-white p-5 shadow md:p-8 w-full mb-5 sm:w-8/12 md:w-2/3">
                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="product_fullname"
                                >
                                    Product fullname
                                </label>
                                <input
                                    id="product_fullname"
                                    name="product_fullname"
                                    type="text"
                                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-300 focus:border-charistan h-12"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="product_price"
                                >
                                    Product Price
                                </label>
                                <div className='flex items-center gap-x-2 border border-gray-300 focus:border-charistan rounded px-2'>
                                    <div className='text-gray-400'>&#8358;</div>
                                    <input
                                        id="product_price"
                                        name="product_price"
                                        className="align-middle py-3 px-4 w-full  appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border-none "
                                        autoComplete="off"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        spellCheck="false"
                                        defaultValue={""}
                                    />
                                </div>

                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="product_manufacturer"
                                >
                                    Product manufacturer
                                </label>
                                <div className="">
                                    <input
                                        className="form-control !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 !rounded focus:!border-charistan !h-12"
                                        placeholder=""
                                        type="text"
                                        name='product_manufacturer'
                                        defaultValue=""
                                    />

                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="product_expiring_date"
                                >
                                    Product Expiring date
                                </label>
                                <div className="">
                                    <input
                                        className="form-control !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 !rounded focus:!border-charistan !h-12"
                                        placeholder=""
                                        type="text"
                                        name='product_expiring_date'
                                        defaultValue=""
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="w-full text-end">
                            <button
                                data-variant="normal"
                                className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-charistan-700 bg-charistan text-light border border-transparent hover:bg-charistan/80 px-5 py-0 h-12"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

                <form>
                    <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-gray-300 sm:my-8">
                        <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                            <h4 className="text-base font-semibold text-gray-700 mb-2">
                                Shop Address
                            </h4>
                            <p className="text-sm text-gray-500">
                                Add your physical shop address from here
                            </p>
                        </div>
                        <div className="rounded bg-white p-5 shadow md:p-8 w-full mb-5 sm:w-8/12 md:w-2/3">
                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="shop_city"
                                >
                                    Shop City
                                </label>
                                <input
                                    id="shop_city"
                                    name="shop_city"
                                    type="text"
                                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-300 focus:border-charistan h-12"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    aria-invalid="false"
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="shop_city"
                                >
                                    Shop City
                                </label>
                                <textarea
                                    id="shop_city"
                                    name="shop_city"
                                    className="align-middle py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-gray-300 focus:border-charistan"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    spellCheck="false"
                                    rows={4}
                                    defaultValue={""}
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="shop_state"
                                >
                                    Shop State
                                </label>
                                <div className="">
                                    <input
                                        className="form-control !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 !rounded focus:!border-charistan !h-12"
                                        placeholder=""
                                        type="text"
                                        name='shop_state'
                                        defaultValue=""
                                    />

                                </div>
                            </div>

                            <div className="mb-5">
                                <label
                                    className="flex text-gray-700 font-semibold text-sm leading-none mb-3"
                                    htmlFor="shop_street_address"
                                >
                                    Shop Street Address
                                </label>
                                <div className="">
                                    <input
                                        className="form-control !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-gray-300 !rounded focus:!border-charistan !h-12"
                                        placeholder=""
                                        type="text"
                                        name='shop_street_address'
                                        defaultValue=""
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="w-full text-end">
                            <button
                                data-variant="normal"
                                className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-charistan-700 bg-charistan text-light border border-transparent hover:bg-charistan/80 px-5 py-0 h-12"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>




            </div>

        </ContainerNoSideBar>
    )
}


export default AdminProfile;