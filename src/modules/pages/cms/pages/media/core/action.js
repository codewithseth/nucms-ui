import { useDispatch } from "react-redux";
import { reqImages, reqUserSlideShow } from "./request";
import { setImages, setLoading, setSlideShow } from "./reducer";

const useMedia = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user ? user.id : null;

    const getImages = async () => {
        dispatch(setLoading(true));
        try {
            const res = await reqImages(id);
            dispatch(setImages(res.data.data));
        } catch (err) {
            console.error("Error fetching images:", err);
            dispatch(setLoading(false));
        }
    }

    const getSlideShow = async () => {
        dispatch(setLoading(true));
        try {
            const res = await reqUserSlideShow(id);
            dispatch(setSlideShow(res.data.data));
        } catch (err) {
            console.error("Error fetching slideshow:", err);
            dispatch(setLoading(false));
        }
    }

    return { getImages, getSlideShow }
}

export default useMedia;