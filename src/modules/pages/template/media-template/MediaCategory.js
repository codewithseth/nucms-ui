"use client";
import { Header } from "./component/NavBar";
import { HorizontalCard } from "./component/LatesNewsCard";
import { NewsCard } from "./component/NewsCard";
import { FooterPage } from "./component/Footer";
import dataExport from "./core/MockData";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import usePost from "../../cms/pages/post/core/action";

export const MediaCategory = () => {
  const { id, catid, pid, catname } = useParams();
  const { postsByCategory, postsByCategoryPub, loading } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { getPostsByCategory, getPostsByCategoryPub } = usePost();

  useEffect(() => {
    if (user) {
      getPostsByCategory(catid);
    } else {
      getPostsByCategoryPub(catid);
    }
    // eslint-disable-next-line
  }, [catid]);

  const postsByCategoryList = user ? postsByCategory : postsByCategoryPub;
  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  return (
    <div className="media-template flex flex-col gap-4">
      <Header />
      {postsByCategoryList.length === 0 && catid ? (
        <div className="text-center col-span-4">
          <p className="text-lg text-gray-500">No posts available.</p>
        </div>
      ) : (
        <div className="template-wrapper">
          <div className="today-news w-full">
            {catid
              ? [...postsByCategoryList]
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .slice(0, 3)
                  .map((post) => {
                    const today = new Date();
                    const postDate = new Date(post.createdAt);
                    const differenceInMilliseconds = today - postDate;
                    const millisecondsInADay = 1000 * 60 * 60 * 24;
                    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay);

                    return (
                      <HorizontalCard
                        key={post.id}
                        image={`${BASE_URL}${post?.image}`}
                        profile={`${BASE_URL}${post.author.profileUrl}`}
                        author={post.author.username}
                        days={differenceInDays}
                        title={post.title}
                        // desc={item.desc}
                      />
                    );
                  })
              : dataExport.mockData
                  .filter((item) => item.cate === catname)
                  .map((item, index) => (
                    <HorizontalCard
                      image={item.image}
                      profile={item.image}
                      author={item.author}
                      days={item.days}
                      title={item.title}
                      desc={item.desc}
                    />
                  ))}
          </div>

          <div className="flex justify-between">
            <h1 className="section-header">{id ? "Recent News" : catname}</h1>
          </div>
          <div className="latest-news w-full">
            <div className="row">
              {catid
                ? [...postsByCategoryList]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .splice(0, 4)
                    .map((post) => (
                      <Link to={`/${catid}/template/media/media-item/${post.id}`}>
                        <NewsCard
                          key={post.id}
                          image={`${BASE_URL}${post?.image}`}
                          title={post.title}
                          // desc={post.desc}
                        />
                      </Link>
                    ))
                : catname
                  ? dataExport.mockData
                      .filter((item) => item.cate === catname)
                      .map((item, index) => (
                        <Link to={`/preview/template/media/media-item/${item.id}`}>
                          <NewsCard key={item.id} image={item.image} title={item.title} desc={item.desc} />
                        </Link>
                      ))
                  : ""}
            </div>

            <div className="row">
              {catid
                ? [...postsByCategoryList]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .splice(4, 8)
                    .map((post) => (
                      <Link to={`${user.id}/template/media/media-item/${pid}`}>
                        <NewsCard
                          key={post.id}
                          image={`${BASE_URL}${post?.image}`}
                          title={post.title}
                          // desc={post.desc}
                        />
                      </Link>
                    ))
                : catname
                  ? dataExport.mockData
                      .filter((item) => item.cate === catname)
                      .splice(4, 8)
                      .map((item, index) => (
                        <NewsCard key={index} image={item.image} title={item.title} desc={item.desc} />
                      ))
                  : ""}
            </div>
          </div>
        </div>
      )}
      <FooterPage />
    </div>
  );
};

export default MediaCategory;
