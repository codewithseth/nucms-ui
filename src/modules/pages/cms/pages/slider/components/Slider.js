import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import TableHead from "./TableHead";
import useMedia from "../../media/core/action";
import UploadImageModal from "../../media/components/UploadImageModal";
import UploadSliderModal from "./UploadSliderModal";

export const Slider = () => {
  const { getImages } = useMedia();
  const [modals, setModals] = useState({
    showModal: false,
  });

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, []);

  const handleUploadSuccess = () => {
    getImages();
  };

  const toggleModal = (modalName, category = null) => {
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  return (
    <>
      <div className="cms-post overflow-x-auto">
        <div className="mb-5">
          <h1 className="font-semibold">Slider</h1>
          <h1>Manage all the slider on your site, including images.</h1>
        </div>
        <Table>
          <TableHead handleOpenModal={() => toggleModal("showModal")} />
          {/* <TableBody /> */}
        </Table>
      </div>
      <UploadSliderModal
        show={modals.showModal}
        handleClose={() => toggleModal("showModal")}
        onUploadSuccess={handleUploadSuccess}
      />
    </>
  );
};
