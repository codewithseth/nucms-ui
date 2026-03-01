"use client";
import { HiClock } from "react-icons/hi";
import { Header } from "./component/NavBar";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import dataExport from "./core/MockData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import CustomComment from "../../../../_timouy/helpers/components/CustomComment";

export const MediaItem = () => {
  const { id, catid, pid } = useParams();
  const { post, loading } = useSelector((state) => state.post);
  const { getPostById } = usePost();
  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  useEffect(() => {
    getPostById(catid);
    // eslint-disable-next-line
  }, [catid]);
  return (
    <div className="media-template flex flex-col gap-4">
      <Header />

      <div className="template-wrapper">
        <h5 class="mb-2 text-4xl font-semibold tracking-wide text-gray-700 dark:text-white ">
          {id
            ? post?.title
            : dataExport.mockData.find((o) => o.id === parseInt(pid))?.title}
        </h5>

        <div className="author">
          <div className="flex gap-4 items-center">
            <img
              src={
                catid
                  ? post?.author.profileUrl
                  : dataExport.mockData.find((o) => o.id === parseInt(pid))?.pf
              }
              className="h-10 w-10 rounded-full"
              alt="pf"
            />
            <div>
              <p className="text-gray-500 ">
                {id
                  ? post?.author.username
                  : dataExport.mockData.find((o) => o.id === parseInt(pid))
                      ?.author}
              </p>
              <p className="text-gray-500 flex items-center gap-2">
                <HiClock />
                {catid
                  ? post?.createdAt
                  : dataExport.mockData.find((o) => o.id === parseInt(pid))
                      ?.date}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
        <img
          src={
            id
              ? `${BASE_URL}${post?.image}`
              : dataExport.mockData.find((o) => o.id === parseInt(pid))?.image
          }
          alt="..."
          className="carousel-thumbnail w-full h-full object-cover rounded-md"
        />
        {id ? (
          <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: `${post?.content}` }}
          />
        ) : (
          dataExport.mockData.find((o) => o.id === parseInt(pid))?.desc
        )}

        <CustomComment postID={catid} />
      </div>
    </div>
  );
};

export default MediaItem;
