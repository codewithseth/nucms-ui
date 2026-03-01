import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import TableBody from "../../media/components/TableBody";
import TableHead from "../../media/components/TableHead";
import useMedia from "../core/action";
import { useEffect, useState } from "react";
import UploadImageModal from "./UploadImageModal";

export const Media = () => {
	const { getImages } = useMedia()
	const [modals, setModals] = useState({
		showModal: false,
	});

	useEffect(() => {
		getImages()
		// eslint-disable-next-line
	}, [])

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
					<h1 className="font-semibold">Media</h1>
					<h1>Manage all the media on your site, including images, video, and more.</h1>
				</div>
				<div className=" p-4 bg-gray-50 mt-5 mb-2">
					<div className="flex justify-between items-center">
						<Link>All</Link>
						<Link>Images</Link>
						<Link>Videos</Link>
						<div>
						</div>
					</div>

				</div>

				<Table>
					<TableHead handleOpenModal={() => toggleModal("showModal")} />
					<TableBody />
				</Table>
			</div>
			<UploadImageModal show={modals.showModal} handleClose={() => toggleModal("showModal")} onUploadSuccess={handleUploadSuccess} />
		</>
	);
};
