'use client';
import React, { useState, ChangeEvent, DragEvent } from 'react';
import Image from 'next/image';

export const HomeBannerWidget: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string>('');
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processFile(file);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            processFile(file);
        }
    };

    const processFile = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    return (
        <section
            className='relative overflow-hidden border-b mt-[73px] border-charistan/10 h-[90vh] bg-cover bg-center flex justify-center items-center lg:px-10'
            style={{ backgroundImage: "url('/images/hero-drugs-image.png')" }}
        >
            <div className='z-[1000]'>
                <div className='flex items-center flex-col text-center gap-y-5'>
                    <h1 className='text-3xl sm:text-4xl text-center md:text-5xl lg:text-7xl font-semibold lg:font-bold'>
                        Pharmacy <span className='text-charistan'>Paddi</span>
                    </h1>
                    <p className='text-charistan italic text-base sm:text-xl'>Drugs should not be a treasure hunt...</p>
                </div>

                <section className="relative p-10 mx-6">
                    <div className="lg:px-10 w-full flex flex-col items-center text-center">
                        <div className='lg:mx-20'>
                            <div className="gap-y-2 lg:mx-0 flex flex-col bg-white rounded-lg lg:p-3 w-full">
                                <div
                                    className={`border-2 border-spacing-6 border-dotted ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
                                        } rounded-lg h-40 flex justify-center items-center cursor-pointer`}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    {image ? (
                                        <Image src={image} alt="Uploaded Drug" width={500} height={500} priority className="w-full h-full object-cover rounded-lg" />
                                    ) : (
                                        <p className="text-gray-500">Drag & Drop Image Here or Click to Upload</p>
                                    )}
                                </div>

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                    id="fileInput"
                                />

                                <div className='flex items-center justify-between gap-x-1 sm:gap-x-2 sm:w-full'>
                                    <label
                                        htmlFor="fileInput"
                                        className="bg-blue-500 p-1 flex justify-center items-center rounded-full size-10 text-white font-bold cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='size-6'>
                                            <path d="M20 8C13.539063 8 8.367188 13.109375 8.09375 19.5C3.417969 20.777344 0 24.996094 0 30C0 36.046875 4.953125 41 11 41L41 41C45.945313 41 50 36.945313 50 32C50 28.101563 47.402344 24.792969 43.90625 23.625C43.695313 17.761719 38.910156 13 33 13C31.960938 13 30.992188 13.257813 30.03125 13.53125C27.882813 10.261719 24.21875 8 20 8 Z M 20 10C23.726563 10 26.992188 12.09375 28.71875 15.09375L29.15625 15.8125L29.9375 15.53125C30.9375 15.167969 31.910156 15 33 15C37.953125 15 42 19.046875 42 24L42 25.09375L42.78125 25.28125C45.714844 25.972656 48 28.769531 48 32C48 35.855469 44.855469 39 41 39L11 39C6.046875 39 2 34.953125 2 30C2 25.671875 5.058594 21.996094 9.1875 21.1875L10 21.03125L10 20C10 14.433594 14.433594 10 20 10 Z M 25 18.59375L24.28125 19.28125L18.28125 25.28125L19.71875 26.71875L24 22.4375L24 34L26 34L26 22.4375L30.28125 26.71875L31.71875 25.28125L25.71875 19.28125Z" fill="#ECE8E8" />
                                        </svg>
                                    </label>

                                    <div className="flex justify-center">
                                        <input
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            placeholder="Type drug description here..."
                                            className="bg-white placeholder:text-sm md:placeholder:text-md border border-gray-300 rounded-full px-4 py-2 lg:w-80"
                                        />
                                    </div>

                                    <div>
                                        <button className="hidden md:flex text-base bg-blue-500 text-white py-2 px-6 rounded-full">
                                            Search
                                        </button>

                                        <button className="md:hidden flex justify-center items-center size-10 bg-blue-500 rounded-full">
                                            <svg className='size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="#FFFFF5">
                                                <path d="M20.5 6C12.509634 6 6 12.50964 6 20.5C6 28.49036 12.509634 35 20.5 35C23.956359 35 27.133709 33.779044 29.628906 31.75L39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453L31.75 29.628906C33.779044 27.133709 35 23.956357 35 20.5C35 12.50964 28.490366 6 20.5 6 z M 20.5 9C26.869047 9 32 14.130957 32 20.5C32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016C26.405717 30.776199 23.602614 32 20.5 32C14.130953 32 9 26.869043 9 20.5C9 14.130957 14.130953 9 20.5 9 z" fill="#FFFFF5" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default HomeBannerWidget;
