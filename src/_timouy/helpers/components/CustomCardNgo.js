import React from "react";
import { Link } from "react-router-dom";
import no_avartar from "../../../_timouy/assets/images/pf.png";

const CustomCardNgo = ({ title, author, authorImg, date, link, featureImage, article }) => {
  return (
    <Link to={link ?? ""}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg group">
        <div className="overflow-hidden">
          <img
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
            src={featureImage}
            alt="Feature"
          />
        </div>
        <div className="p-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-[#148ECE] mb-2">
              <Link to="#" className="hover:underline">
                {article}
              </Link>
            </p>
            <p className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</p>
          </div>
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

export default CustomCardNgo;
