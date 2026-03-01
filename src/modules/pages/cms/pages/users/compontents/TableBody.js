import { Avatar, Table } from "flowbite-react";
import { Block, ModeEdit } from "@mui/icons-material";
import { red, grey } from "@mui/material/colors";
const TableBody = ({ name, email, role, profile, handleEdit, handleDelete }) => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell className="font-semibold">
          <div className="flex flex-inline gap-2">
            <Avatar size={"md"} rounded img={profile}>
              <div className="space-y-1 font-medium text-xs dark:text-white">
                <div>{name}</div>
              </div>
              <div className=" text-xs text-gray-500 dark:text-gray-400 mb-2">{email}</div>
              <div className="text-xs text-white dark:text-gray-400 bg-gray-700 d-flex inline p-1 rounded-md">
                <button>{role}</button>
              </div>
            </Avatar>
          </div>
        </Table.Cell>
        <Table.Cell className="text-end">
          <button>
            <ModeEdit sx={{ color: grey[700] }} onClick={handleEdit} />
          </button>
          <button onClick={handleDelete}>
            <Block sx={{ color: red[400] }} />
          </button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};
export default TableBody;
