import { Card } from "flowbite-react";

export const StatCard = ({ label, value }) => {
  return (
    <Card className="max-w-full transition-transform duration-200 transform hover:shadow-lg">
      <p className="font-normal text-gray-700 dark:text-gray-400">{label}</p>
      <div className="flex gap-3 items-center">
        <div className="text-xl">
          Total
        </div>
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{value.toLocaleString()}</h5>
      </div>
    </Card>
  );
};
