import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import { medias } from "../../media/core/dummy/Media";
import preview from "../../../../../../_timouy/assets/svg/browser.svg"
import { Link } from "react-router-dom";

const TableBody = ({ images }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Table.Body>
      <div className="flex flex-col gap-10">
        {" "}
        {/* Adjust the number of columns */}
        {images.map((image, index) => {
          const imagePath = `/${user?.id}/template${image
            .split(".")
            .slice(0, -1)}`;
          const previewPath = `/preview/template${image
            .split(".")
            .slice(0, -1)}`;

          const media = medias.find((mediaItem) => mediaItem.image === image);
          const title = media ? media.title : "Untitled";

          return (
            <div key={index} className="px-2 pl-0 pr-2 relative group">
              <div className="hover w-full h-auto relative overflow-hidden">
                <a
                  href={imagePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <img
                    src={image}
                    alt={title}
                    className="rounded-md object-cover"
                  />
                  <a
                    href={previewPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 z-50 absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  >
                    <img alt={title} src={preview}/>
                  </a>
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  >
                    <span className="text-white text-lg">{title}</span>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Table.Body>
  );
};

export default TableBody;
