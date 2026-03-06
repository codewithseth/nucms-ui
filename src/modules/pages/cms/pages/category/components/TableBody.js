import React from "react";
import { Table } from "flowbite-react";
import { ReactComponent as Edit } from "../../../../../../_timouy/assets/svg/edit.svg";
import { ReactComponent as Delete } from "../../../../../../_timouy/assets/svg/trash.svg";
import moment from "moment";

const TableBody = ({ title, date, handleEdit, handleDelete }) => {
  const formattedDate = moment(date.createdAt).format("LL");

  return (
    <Table.Row className="flex flex-col sm:table-row">
      <Table.Cell className="font-semibold whitespace-nowrap text-gray-900 dark:text-white">
        {title} - {formattedDate}
      </Table.Cell>
      <Table.Cell className="flex justify-end text-end space-x-1">
        <button onClick={handleEdit}>
          <Edit />
        </button>
        <button onClick={handleDelete}>
          <Delete />
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableBody;
