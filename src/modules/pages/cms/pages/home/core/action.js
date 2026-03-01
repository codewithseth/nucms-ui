import { useDispatch } from "react-redux";
import { reqDs } from "./request";
import { setTotal } from "./reducer";

const useDs = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'));
    const userID = user ? user.id : null;

    const getTotal = async () => {
        try {
            const res = await reqDs(userID);
            dispatch(setTotal(
                res.data.data,
            ));
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    return { getTotal }
}

export default useDs;



