"use client";

import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";
import Image from "next/image";


interface ImageUploaderProps {
    onUpload: (file: File) => Promise<string>; // Function to upload image & return URL
}


const ImageUploader: React.FC<ImageUploaderProps> = ({ onUpload }) => {
    const [image, setImage] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            const selectedFile = acceptedFiles[0];
            if (selectedFile.size > 5 * 1024 * 1024) {
                setError("File size should be less than 5MB.");
                return;
            }
            setFile(selectedFile);
            setImage(URL.createObjectURL(selectedFile));
            setError(null);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        maxFiles: 1,
    });


    const handleUpload = async () => {
        if (!file) return;

        setIsUploading(true);
        setError(null);

        try {
            const uploadedUrl = await onUpload(file); // Call the API upload function
            alert("Image uploaded successfully: " + uploadedUrl);
        } catch (err) {
            setError("Upload failed. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div
                {...getRootProps()}
                className={`
          w-full max-w-lg p-6 border-2 border-dashed rounded-2xl bg-white flex flex-col items-center justify-center cursor-pointer transition
          ${isDragActive ? "border-blue-500 bg-blue-100" : "border-gray-300 hover:border-blue-500"}`
                }
            >
                <input {...getInputProps()} />
                {image ? (
                    <div className="relative w-full">
                        <Image
                            src={image}
                            alt="Uploaded"
                            width={300}
                            height={300}
                            className="w-full h-60 object-cover rounded-xl shadow-lg"
                        />
                        <button
                            onClick={() => {
                                setImage(null);
                                setFile(null);
                            }
                            }
                            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                        >
                            <X size={18} />
                        </button>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="flex items-center gap-x-2">

                            <svg className="size-10 fill-gray-500" xmlns="http://www.w3.org/2000/svg" width="41px" height="30px" viewBox="0 0 40.909 30" ><g transform="translate(0 -73.091)"><path data-name="Path 2125" d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z" transform="translate(0)" ></path></g></svg>

                            <p className="text-gray-700 font-medium">
                                {isDragActive ? "Drop the file here..." : "Drag & Drop an image or click to browse"}
                            </p>
                        </div>


                        <p className="text-sm text-gray-500">JPG, PNG, or GIF (max. 5MB)</p>
                    </div>
                )}
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {isUploading ? (
                <div className="mt-4 flex items-center space-x-2">
                    <div className="w-5 h-5 border-t-4 border-blue-500 rounded-full animate-spin"></div>
                    <p className="text-sm text-gray-500">Uploading...</p>
                </div>
            ) : (
                file && (
                    <button
                        onClick={handleUpload}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
                    >
                        Upload Image
                    </button>
                )
            )}
        </div>
    );
};

export default ImageUploader;
