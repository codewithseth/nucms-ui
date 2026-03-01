import React, { useEffect } from "react";
import { Carousel } from "flowbite-react";
import Slider from "./Slider";
import { useSelector } from "react-redux";
import useMedia from "../../../cms/pages/media/core/action";
import no_slider from "../../../../../_timouy/assets/images/place-holder/banner-placeholder.jpg";

const Banner = () => {
  const { slideShow } = useSelector((state) => state.media);
  const { getSlideShow } = useMedia();

  useEffect(() => {
    getSlideShow();
  }, []);

  const BASE_URL = process.env.REACT_APP_IMAGE_URL;

  return (
    <div className="hot-news w-full flex gap-4">
      <div class="left">
        <div className="carousel h-full">
          <div className="h-full sm:h-64 xl:h-80 2xl:h-96" style={{ height: "80vh" }}>
            <Carousel>
              {slideShow.length === 0 ? (
                <img src={no_slider} alt="-_-" className="w-full h-full" />
              ) : (
                slideShow.map((item, index) => (
                  <div className="carousel-card w-full h-full ">
                    <Slider image={`${BASE_URL}${item?.fileName}`} />
                  </div>
                ))
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
