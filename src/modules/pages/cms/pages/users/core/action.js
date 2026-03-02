import { useDispatch, useSelector } from "react-redux";
import { reqUserDetail, reqUserInfo, changePassword, reqAddUser, reqEditUser, reqDeleteUser } from "./Request";
import { setInfo } from "./reducer";
import { alertDelete } from "../../../../../../_timouy/helpers/alert/Alert";
import { toast } from "sonner";
const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const getUserList = () => {
    // reqUser().then((res) => {
    //     dispatch(setUser(res.data.data));
    // })
  };

  const getUserDetail = async (id) => {
    const res = await reqUserDetail(id);
    const data = res.data.data;
    return data;
  };

  const getUserInfo = async () => {
    reqUserInfo()
      .then((res) => {
        dispatch(setInfo(res.data.data));
      })
      .catch((err) => {
        console.error("Error getting user info:", err);
      });
  };

  const changeUserPassword = async (id, payload) => {
    try {
      await changePassword(id, payload);
      toast.success("Password changed successfully!");
    } catch (error) {
      toast.error("Current password is incorrect. Please try again.");
    }
  };

  const createUser = async (user) => {
    try {
      await reqAddUser(user);
      toast.success("User created successfully");
      getUserList();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Error creating user");
      throw error;
    }
  };

  const editUser = async (id, payload) => {
    try {
      await reqEditUser(id, payload);
      toast.success("User updated successfully");
      getUserList();
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  const deleteUser = async (id) => {
    alertDelete(async () => {
      try {
        await reqDeleteUser(id);
        getUserList();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    });
  };

  return {
    getUserDetail,
    getUserInfo,
    changeUserPassword,
    createUser,
    editUser,
    deleteUser,
    user,
  };
};

export default useUser;
