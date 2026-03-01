import { HiClock } from "react-icons/hi";
import { Badge } from "flowbite-react";

export const SwiperCard = ({ image, title, author, days }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500 transform hover:scale-120">
      <div className="thumbnail relative">
        <img
          src={image}
          alt="news-img"
          className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110"
        />
        {/* <div className="absolute top-2 left-2 bg-blue-500 text-white rounded px-2 py-1 text-xs font-semibold">
          New
        </div> */}
      </div>
      <div className="p-5 flex flex-col justify-between h-full">
        <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{title}</h1>
        <div className="flex items-center justify-between mt-3">
          <p className="text-sm text-gray-500 font-medium">{author}</p>
          <Badge color="info" size="sm" icon={HiClock} className="px-2 py-1">
            {days}
          </Badge>
        </div>
      </div>
    </div>
  );
};
