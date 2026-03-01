import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import usePost from "../../../cms/pages/post/core/action";
import no_avartar from "../../../../../_timouy/assets/images/pf.png";
import moment from "moment";
import Skeleton from "../../../../../_timouy/components/skeleton/Skeleton";

const ContentDetail = () => {
  const { catid } = useParams();
  const { post, loading } = useSelector((state) => state.post);
  const { getPostById } = usePost();

  useEffect(() => {
    getPostById(catid);
    // eslint-disable-next-line
  }, [catid]);

  const formattedDate = moment(post?.createdAt).format("MMMM DD, YYYY");

  return (
    <div className="col-span-2 mb-6">
      {/* Content */}
      {loading ? (
        <div className="skeletonBlock">
          <Skeleton width="100%" height="38px" />
          <Skeleton width="200px" height="20px" />
          <Skeleton width="100%" height="25px" />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4 text-yellow-600">{post?.title}</h1>
          <p className="text-gray-800 mb-4">
            {post?.author?.username} - {formattedDate}
          </p>
          <div className="text-gray-800 mb-4">
            <div className="ck-content" dangerouslySetInnerHTML={{ __html: post?.content }} />
          </div>
        </>
      )}

      {/* Profile */}
      {loading ? (
        <div className="bg-white shadow-lg rounded-lg p-4 md:flex md:gap-4 mb-0">
          <div className="cardSkeletonImage">
            <Skeleton width="40px" height="40px" variant="circle" />
            <Skeleton width="100px" height="20px" />
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4 md:flex md:gap-4 mb-0">
          <img
            src={post?.author?.profileImage || no_avartar}
            alt="-_-"
            className="rounded-full md:w-10 md:h-10 sm:w-10 sm:h-10 xs:w-10 xs:h-10 mx-auto md:mx-0"
          />
          <div className="flex items-center text-center md:text-left mt-4 md:mt-0">
            <h5 className="text-sm font-semibold">{post?.author?.username}</h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentDetail;
