import React, { useState } from "react";
import no_thumbnail from "../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevIcon from "../../../_timouy/assets/svg/prev.svg";
import NextIcon from "../../../_timouy/assets/svg/next.svg";
import { SwiperCard } from "../../../modules/pages/template/media-template/component/SwiperCard";
import dataExport from "../../../modules/pages/template/media-template/core/MockData";
import { Link } from "react-router-dom";

const CustomSwiperMedia = ({ postList, id, link }) => {
  const [swiperRef, setSwiperRef] = useState();

  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  return (
    <>
      <div className="flex justify-end space-x-2 px-4">
        <button
          onClick={() => swiperRef.slidePrev()}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition duration-200"
        >
          <img src={PrevIcon} alt="Prev" className="w-4 h-4" />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg hover:bg-gray-100 transition duration-200"
        >
          <img src={NextIcon} alt="Next" className="w-4 h-4" />
        </button>
      </div>
      <div className="hot-new container mx-auto px-4">
        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
          {id
            ? postList.map((post, index) => {
                const relativeTime = moment(post.createdAt).fromNow();
                return (
                  <SwiperSlide key={index}>
                    <Link to={link ?? ""}>
                      <SwiperCard
                        image={
                          post?.image
                            ? `${BASE_URL}${post?.image}`
                            : no_thumbnail
                        }
                        title={post.title}
                        author={post.author.username || "Panha"}
                        days={relativeTime}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })
            : dataExport.mockData.map((item, index) => (
                <div className="carousel-card w-full h-full">
                  <SwiperSlide key={index}>
                    <Link to={`/preview/template/media/media-item/${item.id}`}>
                      <SwiperCard
                        image={item.image}
                        title={item.title}
                        author={item.author}
                        days={item.days}
                      />
                    </Link>
                  </SwiperSlide>
                </div>
              ))}
        </Swiper>
      </div>
    </>
  );
};

export default CustomSwiperMedia;
