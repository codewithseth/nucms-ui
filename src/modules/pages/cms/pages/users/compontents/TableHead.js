import { Table } from "flowbite-react";
import React from "react";

const TableHead = ({ handleOpenModal }) => {
    return (
        <Table.Head>
            <Table.HeadCell>You have 1 team member</Table.HeadCell>
            <Table.HeadCell className="text-end">
                   <button className="text-white text-sm px-1 py-2 bg-primary rounded-lg" onClick={handleOpenModal}>
                    <h1 className="font-light px-2 w-full">Add New Member</h1>
                </button>
            </Table.HeadCell>
        </Table.Head>
    );
};

export default TableHead;
