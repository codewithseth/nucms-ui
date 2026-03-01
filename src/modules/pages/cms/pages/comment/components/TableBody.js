import {
  CheckCircleOutline,
  DeleteOutline,
  WarningAmberOutlined,
} from "@mui/icons-material";
import { ReactComponent as Post } from "../../../../../../_timouy/assets/svg/post.svg";
import no_avartar from "../../../../../../_timouy/assets/images/pf.png"

const TableBody = ({ user, date, title, comment, handleDelete }) => {
  return (
    <div className="border rounded-xl mb-2">
      <div className="flex flex-col gap-4 px-5 pt-5 pb-2">
        <div className="flex gap-2 ">
          <img
            className="w-8 h-8 rounded-full"
            src={no_avartar}
            alt="user"
          />
          <div className="flex flex-col">
            <p className="text-sm text-gray-900 dark:text-white" role="none">
              {user}
            </p>
            <p
              className="text-xs text-opacity-50 text-gray-900 dark:text-white"
              role="none"
            >
              {date}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex">
            <Post /><p className="ms-1 text-lg font-medium text-gray-900 dark:text-white">{title}</p>
          </div>
          <p class="text-md text-gray-900 dark:text-white">{comment}</p>
        </div>
      </div>
      <div className="flex gap-3 pb-1" >
        <button
          type="button"
          className="flex gap-1 items-center justify-start py-2.5 px-5 me-2 mb-2 text-sm font-medium text-green-600 focus:outline-none rounded-lg hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <CheckCircleOutline color="green" />
          Approved
        </button>

        <button
          type="button"
          className="flex gap-1 items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-600 focus:outline-none rounded-lg hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          {" "}
          <WarningAmberOutlined color="red" />
          Spam
        </button>
        <button
          type="button"
          onClick={() => handleDelete()}
          className="flex gap-1 items-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-700 focus:outline-none rounded-lg hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <DeleteOutline />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TableBody;
