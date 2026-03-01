import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import useUser from "../core/action";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CreateUser from "./Create";
import EditUser from "./Edit";
export const User = () => {
  const { getUserList, deleteUser } = useUser();
  const { users } = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpenModal = () => {
    setShowModal(!showModal);
  };

  const handleEditModal = (user) => {
    setSelectedUser(user);
    setShowEditModal(!showEditModal);
  };

  useEffect(() => {
    getUserList();
    // eslint-disable-next-line
  }, []);

  const renderedUser = users.map((user, index) => (
    <TableBody
      key={user.id}
      email={user.username}
      role={user.roles}
      profile={user.profile}
      handleEdit={() => handleEditModal(user)}
      handleDelete={() => deleteUser(user.id)}
    />
  ));

  return (
    <>
      <div className="cms-post overflow-x-auto">
        <h1 className="font-semibold">Users</h1>
        <h1>
          Invite team members to your site and manage their access settings.{" "}
          <Link to={""} className={"text-blue-600"}>
            Learn more.
          </Link>{" "}
        </h1>
        <div className="flex justify-between items-center p-4 bg-gray-50 mt-5 mb-2">
          <Link>Team</Link>
          <div>
            <form class="max-w-md mx-auto">
              <label for="default-search" class=" text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 dark:bg-sky-600 dark:hover:bg-sky-600 dark:focus:ring-sky-400"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <Table>
          <TableHead handleOpenModal={handleOpenModal} />
          {renderedUser}
        </Table>
        <CreateUser show={showModal} handleClose={handleOpenModal} />
        <EditUser show={showEditModal} handleClose={handleEditModal} user={selectedUser} />
      </div>
    </>
  );
};
