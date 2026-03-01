import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import TableBody from "../../page/components/TableBody";
import { pages } from "../core/dummy/PageData";

export const Page = () => {
  const renderedPage = pages.map((page) => {
    return <TableBody key={page.id} title={page.title} desc={page.desc} type={page.type} />;
  });

  return (
    <>
      <div className="cms-post overflow-x-auto">
        <h1 className="font-semibold mb-2">Pages</h1>
        <h1>Manage the pages on your site.</h1>
        <div className=" p-4 bg-gray-50 mt-5 mb-2">
          <div className="w-1/2 flex justify-between items-center">
            <Link>Published</Link>
            <Link>Unpublished</Link>
          </div>
        </div>
        <Table>{renderedPage}</Table>
      </div>
    </>
  );
};
