import React from 'react'



const InfoWidget = () => {
    return <>
        <section className="py-20 bg-charistan">
            <div className="mx-auto max-w-[94.75rem] px-4">
                <div className="section-heading text-center max-w-[530px] mx-auto space-y-4 mb-10 md:mb-14 xl:mb-[70px]">
                    <h3 className="text-2xl font-bold sm:text-[1.75rem] sm:leading-[2.2rem] lg:text-[2rem] lg:leading-[2.8rem] text-white">
                        World-class customer stories
                    </h3>
                    <p className="leading-[1.87] text-white">
                        I`&apos;`ve never seen a platform as easy to use, as easy to onboard new users,
                        as easy to scale, and as easy to customize to your own workflow,
                        process, team, clientele, and changing environment.
                    </p>
                </div>
                <div className="testimonial bg-blue-900 rounded-xl overflow-hidden">
                    <div className="flex flex-wrap lg:flex-nowrap items-center pt-5 lg:pt-0">
                        <div className="max-w-[500px] lg:max-w-[800px] mx-auto lg:mx-0 relative w-full h-auto rounded-xl p-5">
                            <div className="flex z-10 group rounded-xl flex-col relative lg:overflow-hidden">
                                <div className="w-full aspect-video group bg-black relative rounded-t-xl lg:rounded-none overflow-hidden">
                                    <div
                                        className="object-contain w-full h-full"
                                        style={{ width: "100%", height: "100%" }}
                                    >
                                        <div
                                            tabIndex={0}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center center",
                                                cursor: "pointer",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundImage:
                                                    'url("https://i.vimeocdn.com/video/810073582-09caf066bde63d304f122f77ce88bdcdd7a3939e6ae9ae3f1ea9c5b1929c2888-d_640")'
                                            }}
                                        >
                                            <button
                                                aria-label="Video Play Button"
                                                className="bg-accent z-20 h-20 w-20 shadow-lg group/actionIcon rounded-full border-2 flex items-center justify-center border-white duration-200 hover:bg-accent-hover"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    className="w-8 -mr-[3px] duration-200 group-hover/actionIcon:text-white h-auto text-white"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M4.285 1.309C3.023.585 2 1.178 2 2.632v10.735c0 1.456 1.023 2.048 2.285 1.325l9.383-5.381c1.262-.724 1.262-1.898 0-2.622L4.285 1.31Z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="absolute w-full h-full visible left-0 top-0 duration-300 opacity-100 z-10">
                                        {/* <img
                                            alt="video thumbnail"
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="w-full h-full object-cover"
                                            sizes="100vw"
                                            srcSet="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=3840&q=75 3840w"
                                            src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2469%2Fimage-312-%25281%2529.png&w=3840&q=75"
                                            style={{
                                                position: "absolute",
                                                height: "100%",
                                                width: "100%",
                                                inset: 0,
                                                color: "transparent"
                                            }}
                                        /> */}
                                    </div>
                                </div>
                                <div className="rounded-b-xl lg:absolute z-20 -bottom-full duration-500 left-0 right-0 w-full bg-[#1F2937] text-white sm:px-5 px-3 2xl:px-6 pt-2.5 2xl:pt-4 pb-2.5 sm:pb-3.5 2xl:pb-5 hover:bottom-0 group-hover:bottom-0">
                                    <div className="flex gap-10 2xl:mb-3 sm:mb-2 mb-1.5 justify-between">
                                        <div className="w-full ps-0.5">
                                            <div className="rc-slider [&>.rc-slider-rail]:bg-muted [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4 [&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5 [&>.rc-slider-track]:bg-primary [&>.rc-slider-handle]:border-primary-dark [&>.rc-slider-handle]:hover:border-primary-dark [&>.rc-slider-handle-dragging]:!border-primary-dark [&>.rc-slider-handle-dragging]:ring-primary/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-primary-dark [&_.rc-slider-track]:bg-[#40C17B] [&_.rc-slider-track]:h-[2px] sm:[&_.rc-slider-track]:h-[3px] 2xl:[&_.rc-slider-track]:h-1 [&_.rc-slider-rail]:bg-[#111111] [&_.rc-slider-rail]:h-[2px] sm:[&_.rc-slider-rail]:h-[3px] 2xl:[&_.rc-slider-rail]:h-1 [&_.rc-slider-handle]:!border-[#40C17B] [&_.rc-slider-handle]:bg-[#40C17B] [&_.rc-slider-handle]:duration-300 [&_.rc-slider-handle]:border-[2px] [&_.rc-slider-handle]:w-2 [&_.rc-slider-handle]:h-2 sm:[&_.rc-slider-handle]:w-3 sm:[&_.rc-slider-handle]:h-3 [&_.rc-slider-handle]:hover:!border-[#40C17B] [&_.rc-slider-handle]:-mt-[3px] sm:[&_.rc-slider-handle]:-mt-[5px] 2xl:[&_.rc-slider-handle]:!-mt-1 [&_.rc-slider-handle]:active:![box-shadow:0_2px_6px_rgba(255,_255,_255,_0.12)] [&_.rc-slider-handle]:shadow-xl [&_.rc-slider-handle]:transition-colors rc-slider-horizontal">
                                                <div className="rc-slider-rail" />
                                                <div
                                                    className="rc-slider-track"
                                                    style={{ left: "0%", width: "0%" }}
                                                />
                                                <div className="rc-slider-step" />
                                                <div
                                                    className="rc-slider-handle"
                                                    tabIndex={0}
                                                    role="slider"
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    aria-valuenow={0}
                                                    aria-disabled="false"
                                                    aria-orientation="horizontal"
                                                    style={{ left: "0%", transform: "translateX(-50%)" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-5 2xl:gap-6">
                                        <button
                                            aria-label="Video Play Button"
                                            className="outline-none w-auto h-auto bg-transparent hover:bg-transparent p-0"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                className="2xl:w-6 w-3 sm:w-4 h-auto"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M4.285 1.309C3.023.585 2 1.178 2 2.632v10.735c0 1.456 1.023 2.048 2.285 1.325l9.383-5.381c1.262-.724 1.262-1.898 0-2.622L4.285 1.31Z"
                                                />
                                            </svg>
                                        </button>
                                        <div className="flex items-center gap-2 sm:gap-3 2xl:gap-4">
                                            <button
                                                aria-label="Volume Button"
                                                className="outline-none w-auto h-auto bg-transparent hover:bg-transparent p-0"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                    className="2xl:w-6 w-3.5 sm:w-4 h-auto"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M11.65 6.056c-.086-.086-.173-.19-.277-.277l-.692.78c.883.78.97 2.148.19 3.03a.996.996 0 0 1-.19.191l.693.78a3.183 3.183 0 0 0 .277-4.504Z"
                                                    />
                                                    <path
                                                        fill="currentColor"
                                                        d="M13.508 4.307a6.702 6.702 0 0 0-.363-.346l-.71.762c1.905 1.75 2.026 4.711.294 6.6-.087.103-.19.19-.295.294l.71.762c2.322-2.13 2.495-5.75.364-8.072ZM9.14 2.055a.54.54 0 0 0-.536.035L3.962 5.208H1.52a.51.51 0 0 0-.52.52v4.884c0 .294.225.52.52.52h2.442l4.642 3.117a.528.528 0 0 0 .727-.138.584.584 0 0 0 .087-.295V2.506a.5.5 0 0 0-.277-.45Z"
                                                    />
                                                </svg>
                                            </button>
                                            <div className="w-12 md:w-[100px]">
                                                <div className="rc-slider [&>.rc-slider-rail]:bg-muted [&>.rc-slider-handle]:opacity-100 [&>.rc-slider-handle-dragging]:!shadow-none [&>.rc-slider-handle-dragging]:ring-4 [&>.rc-slider-rail]:h-1 [&>.rc-slider-track]:h-1 [&>.rc-slider-handle]:h-4 [&>.rc-slider-handle]:w-4 [&>.rc-slider-handle]:border-4 [&>.rc-slider-handle]:-mt-1.5 [&>.rc-slider-track]:bg-primary [&>.rc-slider-handle]:border-primary-dark [&>.rc-slider-handle]:hover:border-primary-dark [&>.rc-slider-handle-dragging]:!border-primary-dark [&>.rc-slider-handle-dragging]:ring-primary/40 [&>.rc-slider-step>.rc-slider-dot-active]:border-primary-dark [&_.rc-slider-track]:bg-[#fff] [&_.rc-slider-track]:h-[2px] sm:[&_.rc-slider-track]:h-[3px] 2xl:[&_.rc-slider-track]:h-1 [&_.rc-slider-rail]:bg-[#111111] [&_.rc-slider-rail]:h-[2px] sm:[&_.rc-slider-rail]:h-[3px] 2xl:[&_.rc-slider-rail]:h-1 [&_.rc-slider-handle]:!border-[#fff] [&_.rc-slider-handle]:bg-[#fff] [&_.rc-slider-handle]:duration-300 [&_.rc-slider-handle]:border-[2px] [&_.rc-slider-handle]:w-2 [&_.rc-slider-handle]:h-2 sm:[&_.rc-slider-handle]:w-3 sm:[&_.rc-slider-handle]:h-3 [&_.rc-slider-handle]:hover:!border-[#fff] [&_.rc-slider-handle]:-mt-[3px] sm:[&_.rc-slider-handle]:-mt-[5px] 2xl:[&_.rc-slider-handle]:!-mt-1 [&_.rc-slider-handle]:active:![box-shadow:0_2px_6px_rgba(255,_255,_255,_0.12)] [&_.rc-slider-handle]:shadow-xl [&_.rc-slider-handle]:transition-colors rc-slider-horizontal">
                                                    <div className="rc-slider-rail" />
                                                    <div
                                                        className="rc-slider-track"
                                                        style={{ left: "0%", width: "50%" }}
                                                    />
                                                    <div className="rc-slider-step" />
                                                    <div
                                                        className="rc-slider-handle"
                                                        tabIndex={0}
                                                        role="slider"
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        aria-valuenow={50}
                                                        aria-disabled="false"
                                                        aria-orientation="horizontal"
                                                        style={{ left: "50%", transform: "translateX(-50%)" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <span className="select-none text-[10px] sm:text-xs 2xl:text-sm font-normal">
                                            00:00&nbsp;/&nbsp;00:00
                                        </span>
                                        <button
                                            aria-label="Video Fullscreen Button"
                                            className="ml-auto p-0 w-auto h-auto hover:bg-transparent bg-transparent border-0 outline-none"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                aria-label="Enter Fullscreen"
                                                className="w-3 sm:w-4 h-auto"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M3 10H1v5h5v-2H3v-3ZM1 6h2V3h3V1H1v5Zm12 7h-3v2h5v-5h-2v3ZM10 1v2h3v3h2V1h-5Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content py-5 lg:py-10 px-5 lg:pl-10 lg:pr-20 [&>*]:text-white text-center lg:text-left rtl:lg:text-right">
                            <h3 className="text-xl lg:text-2xl font-semibold mb-5">
                                World-class customer stories
                            </h3>
                            <p className="text-lg lg:text-xl leading-[1.6] font-medium">
                                <span>`&quot;`</span>I`&apos;`ve never seen a platform as easy to use, as easy to
                                onboard new users, as easy to scale, and as easy to customize to
                                your own workflow, process, team, clientele, and changing
                                environment.<span>`&quot;`</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default InfoWidget
