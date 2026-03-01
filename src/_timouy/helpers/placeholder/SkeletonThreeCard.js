import React from "react";
import Skeleton from "../../components/skeleton/Skeleton";

const SkeletonThreeCard = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="cardSkeleton bg-white rounded-lg shadow-md overflow-hidden">
      <div className="cardSkeletonBody">
        <Skeleton width="100%" height="190px" />
      </div>
      <div className="cardSkeletonTitle px-4">
        <Skeleton width="100%" height="20px" />
      </div>
      <div className="px-4">
        <div className="cardSkeletonImage flex items-center space-x-2">
          <Skeleton width="40px" height="40px" variant="circle" />
          <Skeleton width="100px" height="20px" />
        </div>
      </div>
    </div>
  ));
};

export default SkeletonThreeCard;
