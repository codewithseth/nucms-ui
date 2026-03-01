"use client";
import { Carousel, Button, Banner } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Header from "./component/NavBar";
import { CarouselCard } from "./component/CarouselCard";
import { HorizontalCard } from "./component/LatesNewsCard";
import { NewsCard } from "./component/NewsCard";
import { FooterPage } from "./component/Footer";
import { AdCard } from "./component/AdCard";
import dataExport from "./core/MockData";
import { useSelector } from "react-redux";
import usePost from "../../cms/pages/post/core/action";
import { useEffect } from "react";
import CustomSwiperMedia from "../../../../_timouy/helpers/components/CustomSwiperMedia";

const MediaTemplate = () => {
  const { id } = useParams();
  const { posts, postsPub } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);
  const { getPosts, getPostsPub } = usePost();

  const currentTime = new Date();
  const formattedDateTime = currentTime.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

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
    <div className="media-template flex flex-col">
      <Banner
        id="sticky-banner"
        tabindex="-1"
        class="flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
      >
        <div class="flex items-center mx-auto">
          <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
            <span>{formattedDateTime}</span>
          </p>
        </div>
      </Banner>
      <Header />
      <div className="hot-news w-full flex gap-4 p-2">
        <div class="left">
          <div className="carousel h-full">
            <div
              className="h-full sm:h-64 xl:h-80 2xl:h-96"
              style={{ height: "100%" }}
            >
              <Carousel>
                {id
                  ? postList.map((item, index) => (
                      <div className="carousel-card w-full h-full">
                        <Link
                          to={`/${id}/template/media/media-item/${item.id}`}
                        >
                          <CarouselCard
                            image={`${BASE_URL}${item.image}`}
                            title={item.title}
                            author={item.author.username}
                            profile={item.author.profileUrl}
                            type={item.categoryName}
                          />
                        </Link>
                      </div>
                    ))
                  : dataExport.mockData.map((item, index) => (
                      <div className="carousel-card w-full h-full">
                        <CarouselCard
                          image={item.image}
                          title={item.title}
                          author={item.author}
                          profile={item.pf}
                          type={item.cate}
                        />
                      </div>
                    ))}
              </Carousel>
            </div>
          </div>
        </div>

        <div className="right">
          <AdCard
            bgImg={dataExport.adData[0].bgImg}
            link={dataExport.adData[0].link}
          />
          <AdCard
            bgImg={dataExport.adData[1].bgImg}
            link={dataExport.adData[0].link}
          />
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <hr className="w-2/3 h-1 bg-gray-400" />
        <h1 className="section-header">Trending</h1>
        <hr className="w-2/3 h-1 bg-gray-400" />
      </div>

      <CustomSwiperMedia
        postList={postList}
        id={id}
        link={`/${id}/template/media/media-item/${postList.map((o) => o.id)}`}
      />

      <div className="template-wrapper">
        <div className="flex justify-between">
          <h1 className="section-header">Today's News</h1>
          {/* <Button color="gray" pill>
            <Link to="/user-dashboard/media-template/cate">See More</Link>
          </Button> */}
        </div>

        <div className="today-news w-full">
          {id
            ? postList.map((item, index) => {
                const today = new Date();
                const postDate = new Date(item.createdAt);
                const differenceInMilliseconds = today - postDate;
                const millisecondsInADay = 1000 * 60 * 60 * 24;
                const differenceInDays = Math.floor(
                  differenceInMilliseconds / millisecondsInADay
                );

                return (
                  <Link to={`/${id}/template/media/media-item/${item.id}`}>
                    <HorizontalCard
                      image={`${BASE_URL}${item.image}`}
                      author={item.author.username}
                      days={differenceInDays}
                      title={item.title}
                      // desc={item.desc}
                    />
                  </Link>
                );
              })
            : dataExport.mockData.slice(0, 3).map((item, index) => (
                <Link to={`/preview/template/media/media-item/${item.id}`}>
                  <HorizontalCard
                    image={item.image}
                    author={item.author}
                    days={item.days}
                    title={item.title}
                    desc={item.desc}
                    profile={item.pf}
                  />
                </Link>
              ))}
        </div>

        <div className="flex justify-between">
          <h1 className="section-header">Recent News</h1>
          {/* <Button color="gray" pill>
            <Link to="/user-dashboard/media-template/cate">See More</Link>
          </Button> */}
        </div>

        <div className="latest-news w-full">
          <div className="row">
            {id
              ? postList.slice(0, 4).map((item, index) => (
                  <Link to={`/${id}/template/media/media-item/${item.id}`}>
                    <NewsCard
                      image={`${BASE_URL}${item.image}`}
                      title={item.title}
                      desc={item.title.substring(0, 100) + "..."}
                    />
                  </Link>
                ))
              : dataExport.mockData.slice(0, 4).map((item, index) => (
                  <Link to={`/preview/template/media/media-item/${item.id}`}>
                    <NewsCard
                      image={item.image}
                      title={item.title}
                      desc={item.desc.substring(0, 100) + "..."}
                    />
                  </Link>
                ))}
          </div>
          <div className="row">
            {id
              ? postList.slice(4, 8).map((item, index) => (
                  <Link to={`/${id}/template/media/media-item/${item.id}`}>
                    <NewsCard
                      image={`${BASE_URL}${item.image}`}
                      title={item.title}
                      desc={item.title.substring(0, 100) + "..."}
                    />
                  </Link>
                ))
              : dataExport.mockData.slice(4, 8).map((item, index) => (
                  <Link to={`/preview/template/media/media-item/${item.id}`}>
                    <NewsCard
                      image={item.image}
                      title={item.title}
                      desc={item.desc.substring(0, 100) + "..."}
                    />
                  </Link>
                ))}
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default MediaTemplate;
