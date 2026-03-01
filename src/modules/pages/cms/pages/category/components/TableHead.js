import React from "react";
import { Table } from "flowbite-react";

const TableHead = ({ handleOpenModal }) => (
    <Table.Head>
        <Table.HeadCell>
            Title
        </Table.HeadCell>
        <Table.HeadCell className="text-right">
            <button className="bg-primary text-white font-semibold text-[13px] py-3 px-2 border border-gray-400 rounded-lg shadow" onClick={handleOpenModal}>
                Add Category
            </button>
        </Table.HeadCell>
    </Table.Head>
);

export default TableHead;
