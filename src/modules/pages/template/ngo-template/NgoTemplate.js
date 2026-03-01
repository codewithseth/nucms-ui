import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import moment from "moment";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CustomCardNgo from "../../../../_timouy/helpers/components/CustomCardNgo";
import no_thumbnail from "../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";
import useScrollToTop from "../../../../_timouy/helpers/hook/useScrollToTop";
import Footer from "./components/Footer";
import SkeletonFourCard from "../../../../_timouy/helpers/placeholder/SkeletonFourCard";

const NgoTemplate = () => {
  useScrollToTop();

  const { id } = useParams();
  const { posts, postsPub, loading, params } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { getPosts, getPostsPub } = usePost();

  useEffect(() => {
    if (user) {
      getPosts();
    } else {
      getPostsPub(id);
    }
    // eslint-disable-next-line
  }, [id]);

  // const handleLoadMore = () => {
  //     getPosts({ ...params, page: params.page + 1 }, false);
  // };

  const postList = user ? posts : postsPub;
  const BASE_URL = process.env.REACT_APP_IMAGE_URL;
  console.log(params);
  return (
    <>
      <Header />
      <Banner />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[40px]">
          {loading ? (
            <SkeletonFourCard />
          ) : postList.length === 0 ? (
            <div className="text-center col-span-4">
              <p className="text-lg text-gray-500">No posts available.</p>
            </div>
          ) : (
            [...postList]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => {
                const formattedDate = moment(post.createdAt).format("MMMM DD, YYYY hh:mm A");
                return (
                  <CustomCardNgo
                    key={post.id}
                    link={`/${id}/template/ngo/${post.id}`}
                    title={post.title}
                    featureImage={post?.image ? `${BASE_URL}${post?.image}` : no_thumbnail}
                    author={post.author.username}
                    authorImg={post?.author.profileImage}
                    date={formattedDate}
                    article={post.categoryName}
                  />
                );
              })
          )}
          {/* {
                        postList.length > 0 &&
                        <div className="button-act">
                            {params.total > postList.length && (
                                <button
                                    className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    onClick={handleLoadMore}
                                >
                                    <span>
                                        {loading ? (
                                            <div className="inline-block animate-spin h-5 w-5 border-4 border-t-transparent border-gray-400 rounded-full" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        ) : (
                                            "Show 10 more"
                                        )}
                                    </span>
                                </button>
                            )}
                        </div>

                    } */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NgoTemplate;
