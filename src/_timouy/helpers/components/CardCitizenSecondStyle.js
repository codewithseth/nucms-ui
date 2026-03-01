import React from 'react'
import { Link } from 'react-router-dom'
import no_avartar from "../../../_timouy/assets/images/pf.png";
import no_thumbnail from "../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";

const CardCitizenSecondStyle = ({ link, featureImage, title, profileImage, username, date, article }) => {
    return (
        <div className="w-full flex flex-col hover:shadow-xl transition-shadow duration-300 transform">
            <Link to={link}>
                <img
                    src={featureImage || no_thumbnail}
                    alt="noImage"
                    className="object-cover object-center w-full h-48 rounded-t-md hover:brightness-110 transition-all duration-300"
                />
                <div className="flex flex-grow flex-col justify-between px-4 py-6 bg-white border border-gray-400 rounded-b-md">
                    <div>
                        <Link
                            to="#"
                            className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-indigo-600 hover:text-indigo-600"
                        >
                            {article}
                        </Link>
                        <Link
                            to={link}
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-indigo-600"
                        >
                            <p className="line-clamp-2">{title}</p>
                        </Link>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="#">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={profileImage || no_avartar}
                                    alt="profile"
                                />
                            </Link>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                                <Link to="#" className="hover:underline">
                                    {username}
                                </Link>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                                <time dateTime>{date}</time>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardCitizenSecondStyle