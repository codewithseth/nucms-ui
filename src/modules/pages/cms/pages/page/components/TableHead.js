import { Table } from "flowbite-react";
import React from "react";

const TableHead = () => {
    return (
        <Table.Head>
            <Table.HeadCell>Page</Table.HeadCell>
            <Table.HeadCell className="text-end">
            </Table.HeadCell>
        </Table.Head>
    );
};

export default TableHead;