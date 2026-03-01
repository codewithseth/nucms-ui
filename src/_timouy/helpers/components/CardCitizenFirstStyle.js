import React from "react";
import { Link } from "react-router-dom";
import no_avartar from "../../../_timouy/assets/images/pf.png";
import no_thumbnail from "../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";

const CardCitizenFirstStyle = ({ link, featureImage, title, profileImage, username, date, article }) => {
  return (
    <Link to={link}>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover hover:brightness-110 transition-all duration-300"
            src={featureImage || no_thumbnail}
            alt="NoImage"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-white p-6">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600 mb-2">
              <Link to="#" className="hover:underline">
                {article}
              </Link>
            </p>
            <p className="text-xl font-semibold text-gray-900 line-clamp-2">{title}</p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Link to="#">
                <img className="h-10 w-10 rounded-full" src={profileImage || no_avartar} alt="profile" />
              </Link>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                <Link to="#" className="hover:underline">
                  {username}
                </Link>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time>{date}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCitizenFirstStyle;
