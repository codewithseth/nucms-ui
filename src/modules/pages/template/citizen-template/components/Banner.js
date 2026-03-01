import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useSelector } from "react-redux";
import useMedia from "../../../cms/pages/media/core/action";
import no_slider from "../../../../../_timouy/assets/images/place-holder/banner-placeholder.jpg";

const Banner = () => {
  const { slideShow } = useSelector((state) => state.media);
  const { getSlideShow } = useMedia();

  const BASE_URL = process.env.REACT_APP_IMAGE_URL || "";

  useEffect(() => {
    getSlideShow();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slideShow.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slideShow.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!slideShow || slideShow.length === 0) {
    return (
      <div className="w-full h-full mt-5">
        <p className="text-center text-black text-2xl">No Slides Available</p>
      </div>
    );
  }

  return (
    <>
      {/* Start Carousel Section */}
      <div className="max-w-full h-[480px] w-full m-auto mb-3 relative group">
        <div
          style={{ backgroundImage: `url(${BASE_URL}${slideShow[currentIndex].fileName})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Dots Indicator */}
        <div className="flex top-4 justify-center py-2">
          {slideShow.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? "text-blue-500" : "text-white"}`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* End Carousel Section */}
    </>
  );
};

export default Banner;
