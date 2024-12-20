"use client";

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import 'tailwindcss/tailwind.css';

const PaperworkPage: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = (acceptedFiles: File[]) => {
        setFiles([...files, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.docx, .xlsx, .pdf',
    });

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div
                {...getRootProps()}
                className="w-3/4 p-6 border-2 border-dashed border-gray-400 rounded-lg bg-white cursor-pointer"
            >
                <input {...getInputProps()} />
                <p className="text-center text-gray-600">
                    Drag & drop some files here, or click to select files
                </p>
                <p className="text-center text-gray-500 mt-2">
                    Supported formats: .docx, .xlsx, .pdf
                </p>
            </div>
            <div className="mt-4 w-3/4">
                <h2 className="text-lg font-semibold mb-2">Uploaded Files:</h2>
                <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                        <li key={index} className="text-gray-700">
                            {file.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PaperworkPage;