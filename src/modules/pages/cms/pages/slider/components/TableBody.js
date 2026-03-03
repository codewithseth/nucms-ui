import { Table } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Loader from "../../../../../../_timouy/components/Loader";
import { ReactComponent as Delete } from "../../../../../../_timouy/assets/svg/trash.svg";
import AlertDelete from "../../../../../../_timouy/helpers/alert/AlertDelete";
import { toast } from "sonner";
import AlertConfirm from "../../../../../../_timouy/helpers/alert/AlertConfirm";
import useMedia from "../../media/core/action";
import { reqAddSlideShow, reqDeleteImage } from "../../media/core/request";
import { removeImage } from "../../media/core/reducer";

const TableBody = () => {
    const dispatch = useDispatch();
    const { getSlideShow } = useMedia();
    const { slideShow, loading } = useSelector((state) => state.media);
    const BASE_URL = process.env.REACT_APP_IMAGE_URL;

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openSlideModal, setOpenSlideModal] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [selectedSlide, setSelectedSlide] = useState(null);

    useEffect(() => {
        getSlideShow();
        // eslint-disable-next-line
    }, []);

    const handleDelete = (imageId) => {
        setSelectedImageId(imageId);
        setOpenDeleteModal(true);
    };

    const confirmSetSlide = async () => {
        try {
            if (selectedSlide) {
                await reqAddSlideShow(selectedSlide);
                toast.success(`Image added to slideshow successfully.`);
            }
        } catch (error) {
            toast.error(`Failed to add image to slideshow with ID: ${selectedSlide}`, error);
        } finally {
            setOpenSlideModal(false);
            setSelectedSlide(null);
        }
    };

    const confirmDelete = async () => {
        try {
            if (selectedImageId) {
                await reqDeleteImage(selectedImageId);
                dispatch(removeImage(selectedImageId));
                toast.success(`Image deleted successfully.`);
            }
        } catch (error) {
            toast.error(`Failed to delete image with ID: ${selectedImageId}`, error);
        } finally {
            setOpenDeleteModal(false);
            setSelectedImageId(null);
        }
    };

    const closeModal = () => {
        setOpenDeleteModal(false);
        setOpenSlideModal(false);
        setSelectedImageId(null);
        setSelectedSlide(null);
    };

    return (
        <>
            <Table.Body>
                <div className="grid grid-cols-4 gap-3 mt-5">
                    {loading ? (
                        <div className="flex justify-center items-center col-span-4 min-h-[100px]">
                            <Loader />
                        </div>
                    ) : slideShow.length > 0 ? (
                        slideShow.map((image, index) => (
                            <div key={index} className="px-2 pl-0 pr-2 relative group">
                                <div className="hover w-full aspect-square relative">
                                    <img
                                        src={`${BASE_URL}${image.fileName}`}
                                        alt={`-_- ${index + 1}`}
                                        className="w-full h-full rounded-md object-cover"
                                    />
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(image.fileName)}
                                        className="absolute top-2 right-2 bg-white text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Delete />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center col-span-4 w-full min-h-[100px]">
                            <div className="font-semibold text-xl">No slider.</div>
                        </div>
                    )}
                </div>
            </Table.Body>

            {/* Delete Modal */}
            <AlertDelete
                title="Are you sure you want to delete this image?"
                openModal={openDeleteModal}
                closeModal={closeModal}
                confirmDelete={confirmDelete}
            />

            {/* Slideshow Modal */}
            <AlertConfirm
                title="Are you sure you want to add this image to the slideshow?"
                openModal={openSlideModal}
                closeModal={closeModal}
                confirmDelete={confirmSetSlide}
            />
        </>
    );
};

export default TableBody;
