import { Table } from "flowbite-react";
import React from "react";

const TableHead = ({ handleOpenModal }) => {
    return (
        <Table.Head>
            <Table.HeadCell>Posts</Table.HeadCell>
            <Table.HeadCell>Image</Table.HeadCell>
            <Table.HeadCell className="text-end">
                <button className="bg-primary text-white font-semibold text-[13px] py-3 px-2 border border-gray-400 rounded-lg shadow" onClick={handleOpenModal}>
                    Add Post
                </button>
            </Table.HeadCell>
        </Table.Head>
    );
};

export default TableHead;
