import React, { useState, useEffect } from 'react';
import useDebounce from '../hook/useDebouce';

const CustomSearch = ({ params, placeholder, onChange }) => {
    const [searchTerm, setSearchTerm] = useState(params.q || '');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    const clearSearch = (e) => {
        e.preventDefault();
        setSearchTerm('');
    };

    useEffect(() => {
        if (debouncedSearchTerm !== params.q) {
            onChange({ target: { value: debouncedSearchTerm } });
        }
    }, [debouncedSearchTerm, onChange, params.q]);

    return (
        <form className="relative max-w-xxs">
            <input
                className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-[#148ECE] focus:border-[#148ECE] focus:shadow-outline"
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
                <div className="absolute right-0 inset-y-0 flex items-center pr-3">
                    <button onClick={clearSearch}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="-ml-1 h-5 w-5 text-gray-400 hover:text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            )}
            <div className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
        </form>
    );
};

export default CustomSearch;
