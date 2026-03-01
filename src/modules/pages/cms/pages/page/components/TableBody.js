import { Table } from "flowbite-react";
import { ReactComponent as Edit } from "../../../../../../_timouy/assets/svg/edit.svg";
import { ReactComponent as Delete } from "../../../../../../_timouy/assets/svg/trash.svg";
import { ReactComponent as Home } from "../../../../../../_timouy/assets/svg/cottage.svg";
import { ReactComponent as Info } from "../../../../../../_timouy/assets/svg/notebook.svg";
import { ReactComponent as Product } from "../../../../../../_timouy/assets/svg/apartment.svg";
import { ReactComponent as News } from "../../../../../../_timouy/assets/svg/open_in_browser.svg";

const TableBody = ({ title, index, desc, type }) => {
  let IconComponent;
  switch (type) {
    case "home":
      IconComponent = <Home className="w-10 h-10" />;
      break;
    case "info":
      IconComponent = <Info className="w-10 h-10" />;
      break;
    case "news":
      IconComponent = <News className="w-10 h-10" />;
      break;
    case "product":
      IconComponent = <Product className="w-10 h-10" />;
      break;
    default:
      IconComponent = null;
  }
  return (
    <Table.Body>
      <Table.Row key={index}>
        <Table.Cell className="px-2 pl-0 pr-2">
          <div className="flex items-center gap-2">
            {IconComponent}
            <div className="flex flex-col gap-0">
              <h1 className="text-gray-800">{title}</h1>
              <h1 className="text-xs text-gray-500">{desc}</h1>
            </div>
          </div>
        </Table.Cell>
        <Table.Cell className="flex gap-2 justify-end">
          <button>
            <Edit className="text-gray-800" />
          </button>
          <button>
            <Delete className="text-gray-800" />
          </button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default TableBody;
