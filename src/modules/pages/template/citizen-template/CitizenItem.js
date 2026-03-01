import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import moment from "moment";
import SkeletonThreeCard from "../../../../_timouy/helpers/placeholder/SkeletonThreeCard";
import CardCitizenFirstStyle from "../../../../_timouy/helpers/components/CardCitizenFirstStyle";
import no_thumbnail from "../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";

const CitizenItem = () => {
  const { catid } = useParams();
  const { postsByCategory, loading } = useSelector(state => state.post)
  const { getPostsByCategory } = usePost();

  useEffect(() => {
    getPostsByCategory(catid);
    // eslint-disable-next-line
  }, [catid]);

  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  return (
    <div>
      <Navbar />
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gray-50 px-6 pt-7 pb-20 lg:px-8 lg:pt-9 lg:pb-28">
            <div className="absolute inset-0">
              <div className="h-1/3 bg-white sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Popular Now
                </h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                {loading ? (
                  <SkeletonThreeCard />
                ) : postsByCategory.length === 0 ? (
                  <div className="text-center col-span-3">
                    <p className="text-lg text-gray-500">No posts available in this category.</p>
                  </div>
                ) : (
                  [...postsByCategory]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((post) => {
                      const formattedDate = moment(post.createdAt).format('MMMM DD, YYYY hh:mm A');

                      return (
                        <CardCitizenFirstStyle
                          key={post.id}
                          link={`/${catid}/template/citizen/${post.id}`}
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CitizenItem;
