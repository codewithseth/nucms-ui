import { Table } from "flowbite-react";
import React from "react";

const TableHead = ({ handleOpenModal }) => {
  return (
    <Table.Head>
      <Table.HeadCell className="py-6">Slider</Table.HeadCell>
      <Table.HeadCell className="text-right">
        {/* <button
          className="bg-primary text-white font-semibold text-[13px] py-3 px-4 border border-gray-400 rounded-lg shadow"
          onClick={handleOpenModal}
        >
          Slider
        </button> */}
      </Table.HeadCell>
    </Table.Head>
  );
};

export default TableHead;
