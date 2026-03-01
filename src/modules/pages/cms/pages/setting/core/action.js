import { useDispatch } from "react-redux";
import { setActivity, setLoading } from "./reducer";
import { reqActivity } from "./Request";

const useSetting = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user ? user.email : null;

  const getActivity = async () => {
    dispatch(setLoading(true));
    try {
      const res = await reqActivity(email);
      dispatch(setActivity(res.data.data));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { getActivity };
};

export default useSetting;
