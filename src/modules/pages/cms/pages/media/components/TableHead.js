import { Table } from "flowbite-react";
import React from "react";

const TableHead = ({ handleOpenModal }) => {
  return (
    <Table.Head>
      <Table.HeadCell>Media</Table.HeadCell>
      <Table.HeadCell className="text-right">
        <button
          className="bg-primary text-white w-28 font-semibold text-[13px] py-3 px-2 border border-gray-400 rounded-lg shadow"
          onClick={handleOpenModal}
        >
          Upload Image
        </button>
      </Table.HeadCell>
    </Table.Head>
  );
};

export default TableHead;
