import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";

const CitizenDetail = () => {
  const { catid } = useParams()
  const { post } = useSelector((state) => state.post);
  const { getPostById } = usePost();

  useEffect(() => {
    getPostById(catid);
    // eslint-disable-next-line
  }, [catid]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">
              {post?.title}
            </h1>
            <p className="text-gray-500 text-sm">
              Published on <time datetime="2022-04-05">April 5, 2022</time>
            </p>
          </div>
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <div className="ck-content" dangerouslySetInnerHTML={{ __html: `${post?.content}` }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CitizenDetail;
