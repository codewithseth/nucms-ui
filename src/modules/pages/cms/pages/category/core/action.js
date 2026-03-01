import { useDispatch, useSelector } from "react-redux";
import { reqCreateCategory, reqCategories, reqDeleteCategory, reqEditCategory, reqParentCategories } from "./request";
import { setCategories, setCategoriesPub, setLoading, setParams, setParentCategories } from "./reducer";
import { toast } from "sonner";

const useCategory = () => {
    const dispatch = useDispatch();
    const { params } = useSelector((state) => state.category);
    const user = JSON.parse(localStorage.getItem('user'));
    const userID = user ? user.id : null;

    const getCategories = async () => {
        dispatch(setLoading(true));
        try {
            const res = await reqCategories(userID, { ...params });
            dispatch(setCategories({
                categories: res.data.data.content,
                totalPages: res.data.data.totalPages
            }));
        } catch (error) {
            console.error("Error fetching categories:", error);
            dispatch(setLoading(false));
        }
    };

    const getCategoriesPub = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await reqCategories(id, { ...params });
            dispatch(setCategoriesPub({
                categoriesPub: res.data.data.content,
                totalPages: res.data.data.totalPages
            }));
        } catch (error) {
            console.error("Error fetching categories:", error);
            dispatch(setLoading(false));
        }
    };

    const getParentCategories = async () => {
        dispatch(setLoading(true));
        try {
            const res = await reqParentCategories({ userID });
            dispatch(setParentCategories(res.data.data))
        } catch (error) {
            console.error("Error fetching parent categories:", error);
            dispatch(setLoading(false));
        }
    };

    const createCategory = async (categoryData) => {
        try {
            await reqCreateCategory(categoryData);
            toast.success('Category created successfully');
            getCategories();
        } catch (error) {
            console.error("Error creating category:", error);
            toast.error('Error creating category');
            throw error;
        }
    };

    const editCategory = async (newCategory) => {
        try {
            await reqEditCategory(newCategory.id, newCategory);
            toast.success('Category updated successfully');
            getCategories();
        } catch (error) {
            console.error("Error updating category:", error);
            toast.error('Error updating category');
        }
    };

    const deleteCategory = async (id) => {
        return reqDeleteCategory(id)
            .then((res) => {
                toast.success('Category deleted successfully');
                getCategories();
            })
            .catch((error) => {
                toast.error('Failed to delete category')
            });

    };

    const handleFilter = (key, value) => {
        dispatch(setParams({ [key]: value }));
    };

    const handlePage = (page) => {
        dispatch(setParams({ page: page - 1 }));
    };

    const handleSearch = (text) => {
        dispatch(setParams({ page: 0, q: text }));
    };

    return {
        getCategories,
        getCategoriesPub,
        getParentCategories,
        createCategory,
        editCategory,
        deleteCategory,
        handlePage,
        handleFilter,
        handleSearch
    };
};

export default useCategory;
