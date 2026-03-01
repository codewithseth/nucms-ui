import { Badge } from "flowbite-react";
export const CarouselCard = ({ image, type, title, profile, author }) => {
  return (
    <div>
      <img src={image} alt="..." className="carousel-thumbnail w-full h-full object-cover" />
      <div className="carousel-content w-full">
        <Badge color="gray" size="sm" className="w-fit">
          {type}
        </Badge>
        <h5 class="mb-2 text-2xl font-semibold tracking-wide text-gray-100 dark:text-white ">{title}</h5>
        <div className="flex gap-4 items-center">
          <img src={profile} className="h-10 w-10 rounded-full" alt="pf" />
          <p className="text-gray-100 ">{author}</p>
        </div>
      </div>
    </div>
  );
};
