import { Card } from "flowbite-react";
export const StatCard = ({ label, amount }) => {
  return (
    <Card href="#" className="max-w-full">
      <p className="font-normal text-gray-700 dark:text-gray-400">{label}</p>
      <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{amount}</h5>
    </Card>
  );
};
