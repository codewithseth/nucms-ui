import { Card } from "flowbite-react";
export const NewsCard = ({ image, title, desc }) => {
  return (
    <Card className="max-w-sm" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={image}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{desc}</p>
    </Card>
  );
};
