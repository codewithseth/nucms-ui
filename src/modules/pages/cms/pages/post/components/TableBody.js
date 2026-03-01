import React from "react";
import { Table } from "flowbite-react";
import { ReactComponent as Edit } from "../../../../../../_timouy/assets/svg/edit.svg";
import { ReactComponent as Delete } from "../../../../../../_timouy/assets/svg/trash.svg";
import { ReactComponent as Category } from "../../../../../../_timouy/assets/svg/category.svg";
import NotFound from "../../../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";
import moment from "moment";

const TableBody = ({ posts, handleEdit, handleDelete, url }) => (
  <Table.Body className="divide-y">
    {[...posts]
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((post, index) => {
        const formattedDate = moment(post.createdAt).format("LL");

        return (
          <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {post.title}
              <span className="flex items-center mt-2">
                <Category className="inline-block mr-1" />
                <span className="inline">
                  {post.categoryName} - {formattedDate}
                </span>
              </span>
            </Table.Cell>
            <Table.Cell className="flex justify-center sm:table-cell">
              <img src={post.image ? `${url}${post.image}` : NotFound} alt={post.title} className="w-20 rounded-md" />
            </Table.Cell>
            <Table.Cell className="flex justify-end text-end gap-2 sm:table-cell">
              <button onClick={() => handleEdit(post)}>
                <Edit />
              </button>
              <button onClick={() => handleDelete(post)}>
                <Delete />
              </button>
            </Table.Cell>
          </Table.Row>
        );
      })}
  </Table.Body>
);

export default TableBody;
