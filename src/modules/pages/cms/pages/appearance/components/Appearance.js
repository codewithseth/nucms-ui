import { Table } from "flowbite-react";
import { medias } from "../../media/core/dummy/Media";
import TableBody from "../../appearance/components/TableBody";

export const Appearance = () => {
  const imagePaths = medias.map((media) => media.image);
  return (
    <div className="cms-appearancr overflow-x-auto">
      <div className="mb-5">
        <h1 className="font-semibold">Template</h1>
        <h1>Select or update the visual design for your site.</h1>
      </div>
      <Table>
        <TableBody images={imagePaths} />
      </Table>
    </div>
  );
};
