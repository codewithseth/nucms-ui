import React, { useEffect } from "react";
import Header from "./components/Header";
import ContentDetail from "./components/ContentDetail";
import useScrollToTop from "../../../../_timouy/helpers/hook/useScrollToTop";
import Footer from "./components/Footer";
import CustomComment from "../../../../_timouy/helpers/components/CustomComment";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import no_avartar from "../../../../_timouy/assets/images/pf.png";
import no_thumbnail from "../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";
import moment from "moment";

const LatestNews = ({ title, author, authorImg, date, link, featureImage }) => {
  return (
    <Link to={link ?? ""}>
      <div className="bg-white rounded-lg border overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
        <div className="overflow-hidden">
          <img
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            src={featureImage}
            alt="Feature"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">{title}</h3>
          <div className="flex items-center space-x-3">
            <img className="w-10 h-10 rounded-full" src={authorImg || no_avartar} alt="Author" />
            <div>
              <p className="text-gray-700 font-medium">{author}</p>
              <p className="text-gray-500 text-sm">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Article = () => {
  useScrollToTop();
  const { catid, id } = useParams(); // Extract postID from the route params
  const { posts, postsPub } = useSelector((state) => state.post);
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
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9">
        <div className="mt-6">
          <ContentDetail />
        </div>
        {/* Pass the dynamic postID to CustomComment */}
        <CustomComment postID={catid} />
        <h2 className="text-2xl font-bold mt-5">អត្ថបទថ្មីៗប្រចាំខែ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-[20px]">
          {postList.slice(0, 4).map((post) => {
            const formattedDate = moment(post.createdAt).format("MMMM DD, YYYY hh:mm A");
            return (
              <LatestNews
                key={post.id}
                link={`/${id}/template/ngo/${post.id}`}
                title={post.title}
                featureImage={post?.image ? `${BASE_URL}${post?.image}` : no_thumbnail}
                author={post.author.username}
                authorImg={post?.author.profileImage}
                date={formattedDate}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
