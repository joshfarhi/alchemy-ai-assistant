"use client";

import React, { useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import 'tailwindcss/tailwind.css';
import { NavigationMenuDemo } from "@/components/navbar"

const PaperworkPage: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const maxSize = 5 * 1024 * 1024; // 5MB size limit

    const onDrop = (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        const validFiles = acceptedFiles.filter(file => file.size <= maxSize);
        setFiles([...files, ...validFiles]);

        if (rejectedFiles.length > 0) {
            alert('Some files were rejected due to size or format restrictions.');
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.docx, .xlsx, .pdf',
        maxSize,
    });

    const sortFiles = (criteria: string) => {
        const sortedFiles = [...files].sort((a, b) => {
            if (criteria === 'name') {
                return a.name.localeCompare(b.name);
            } else if (criteria === 'size') {
                return a.size - b.size;
            } else if (criteria === 'date') {
                return (a.lastModified || 0) - (b.lastModified || 0);
            }
            return 0;
        });
        setFiles(sortedFiles);
    };

    const handleFileClick = (file: File) => {
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        a.click();
        URL.revokeObjectURL(url);
    };

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
                    Supported formats: .docx, .xlsx, .pdf (Max size: 5MB)
                </p>
            </div>
            <div className="mt-4 w-3/4">
                <h2 className="text-lg font-semibold mb-2">Uploaded Files:</h2>
                <div className="flex justify-between mb-2">
                    <button onClick={() => sortFiles('name')} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Name</button>
                    <button onClick={() => sortFiles('size')} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Size</button>
                    <button onClick={() => sortFiles('date')} className="px-4 py-2 bg-blue-500 text-white rounded">Sort by Date</button>
                </div>
                <ul className="list-disc list-inside">
                    {files.map((file, index) => (
                        <li key={index} className="text-gray-700">
                            <a href="#" onClick={() => handleFileClick(file)} className="text-blue-500 underline">
                                {file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PaperworkPage;