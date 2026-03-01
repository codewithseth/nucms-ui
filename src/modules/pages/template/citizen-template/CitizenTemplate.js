import React, { useEffect } from "react";
import Banner from "../citizen-template/components/Banner";
import NavBar from "../citizen-template/components/Navbar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import Footer from "./components/Footer";
import moment from "moment";
import SkeletonThreeCard from "../../../../_timouy/helpers/placeholder/SkeletonThreeCard";
import CardCitizenFirstStyle from "../../../../_timouy/helpers/components/CardCitizenFirstStyle";
import CardCitizenSecondStyle from "../../../../_timouy/helpers/components/CardCitizenSecondStyle";
import no_thumbnail from "../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";

const CitizenTemplate = () => {
  const { id } = useParams();
  const { posts, postsPub, loading } = useSelector((state) => state.post);
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

  const postList = user ? posts : postsPub;
  const BASE_URL = process.env.REACT_APP_IMAGE_URL;
  return (
    <>
      <NavBar />
      <Banner />
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gray-50 px-6 pt-7 pb-20 lg:px-1 lg:pt-9 lg:pb-28">
            <div className="absolute inset-0">
              <div className="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Today news</h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {postList.length === 0 ? (
                  <div className="text-center col-span-3">
                    <p className="text-lg text-gray-500">No posts available.</p>
                  </div>
                ) : (
                  [...postList]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 3)
                    .map((post) => {
                      const formattedDate = moment(post.createdAt).format("MMMM DD, YYYY hh:mm A");
                      return (
                        <CardCitizenFirstStyle
                          key={post.id}
                          link={`/${id}/template/citizen/${post.id}`}
                          featureImage={post?.image ? `${BASE_URL}${post?.image}` : no_thumbnail}
                          title={post.title}
                          profileImage={post?.author?.profileImage}
                          username={post?.author?.username}
                          date={formattedDate}
                          article={post.categoryName}
                        />
                      );
                    })
                )}
                {loading && <SkeletonThreeCard />}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-gray-900 mt-5">Trending Now</h2>
          <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            {loading ? (
              <SkeletonThreeCard />
            ) : postList.length === 0 ? (
              <div className="text-center col-span-3">
                <p className="text-lg text-gray-500">No posts available.</p>
              </div>
            ) : (
              [...postList]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .slice(3)
                .map((post) => {
                  const formattedDate = moment(post.createdAt).format("MMMM DD, YYYY hh:mm A");
                  return (
                    <CardCitizenSecondStyle
                      key={post.id}
                      link={`/${id}/template/citizen/${post.id}`}
                      featureImage={post?.image ? `${BASE_URL}${post?.image}` : no_thumbnail}
                      title={post.title}
                      profileImage={post?.author?.profileImage}
                      username={post?.author?.username}
                      date={formattedDate}
                      article={post.categoryName}
                    />
                  );
                })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CitizenTemplate;
