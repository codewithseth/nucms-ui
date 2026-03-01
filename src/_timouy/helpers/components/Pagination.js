"use client";

import { Pagination } from "flowbite-react";

function MyPagination(props) {
    const { params, currentPage, totalPages, onPageChange, handleFilter } = props;

    return (
        <>
            <div className="flex justify-between items-center text-center mt-3">
                <label className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Page Size:</span>
                    <div className="relative">
                        <select
                            name="size"
                            value={params.size}
                            onChange={(e) => {
                                const size = parseInt(e.target.value, 10);
                                handleFilter("size", size);
                                handleFilter("page", 0);
                            }}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-opacity-50"
                        >
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                        </select>
                    </div>
                </label>
                <Pagination
                    layout="navigation"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    showIcons
                />
            </div>
        </>
    );
}

export default MyPagination;
