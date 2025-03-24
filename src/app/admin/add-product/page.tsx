'use client'
import ProtectedRoute from '@/components/ProtectedRoute';
import Container from '@/components/store/container';
import { ImageUploader } from '@/components/ui';


const AdminAllUsers: React.FC = () => {
    return (
        <Container>
            <div className='mx-2 lg:mx-4'>
                <div className='h-full p-5 md:p-8'>
                    <div className="flex items-center gap-5 border-b border-dashed border-gray-500 py-5 sm:py-8">
                        <h4 className="text-lg font-semibold text-gray-700">Add Product</h4>
                    </div>
                    <div>
                        <div className="flex flex-wrap pb-8 my-5 border-b border-dashed border-border-base sm:my-8">
                            <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                                <h4 className="text-base font-semibold text-gray-700 mb-2">
                                    Product Image
                                </h4>
                                <p className="text-sm text-gray-600">
                                    <span>
                                        Upload your product featured image here <br />
                                        Image size should not be more than &nbsp;
                                        <span className="font-bold">5 MB </span>
                                    </span>
                                </p>
                            </div>
                            <div className="rounded bg-white p-5 shadow md:p-8 w-full sm:w-8/12 md:w-2/3">
                                {/* <section className="upload">
                                    <div
                                        role="presentation"
                                        tabIndex={0}
                                        className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none relative"
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
                                            className="text-muted-light"
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
                                        <p className="mt-4 text-sm text-center text-body">
                                            <span className="font-semibold text-accent">Upload an image</span> or
                                            drag and drop <br />
                                            <span className="text-xs text-body">PNG, JPG</span>
                                        </p>
                                    </div>
                                    <aside className="flex flex-wrap mt-2">
                                        <div className="relative mt-2 inline-flex flex-col overflow-hidden rounded me-2 border border-border-200">
                                            <figure className="relative flex items-center justify-center h-16 w-28 aspect-square">
                                                <img
                                                    alt="https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1632/conversions/Romantic-Books-2-thumbnail"
                                                    loading="lazy"
                                                    decoding="async"
                                                    data-nimg="fill"
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw"
                                                    srcSet="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=3840&q=75 3840w"
                                                    src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1632%2Fconversions%2FRomantic-Books-2-thumbnail.jpg&w=3840&q=75"
                                                    style={{
                                                        position: "absolute",
                                                        height: "100%",
                                                        width: "100%",
                                                        inset: 0,
                                                        color: "transparent"
                                                    }}
                                                />
                                            </figure>
                                            <button className="absolute flex items-center justify-center w-4 h-4 text-xs bg-red-600 rounded-full shadow-xl outline-none top-1 text-light end-1">
                                                <svg
                                                    width={10}
                                                    height={10}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </aside>
                                </section> */}
                                {/* <ImageUploader /> */}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Container>
    );
};

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <AdminAllUsers />
        </ProtectedRoute>
    );
}
