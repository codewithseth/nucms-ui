import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts";
import { StatCard } from "./StatCard";
import { useEffect } from "react";
import useDs from "../core/action";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MyHome = () => {
  const { getTotal } = useDs();
  const total = useSelector((state) => state.ds);

  useEffect(() => {
    getTotal();
  }, []);

  const totalData = total?.total || {};

  return (
    <div className="cms-myhome">
      <div className="w-full flex gap-12 ">
        <div className="w-full">
          <Link to="/user-dashboard/category">
            <StatCard label="Total Categories" value={totalData.totalCategory || 0} />
          </Link>
        </div>
        <div className="w-full">
          <Link to="/user-dashboard/post">
            <StatCard label="Total Posts" value={totalData.totalPost || 0} />
          </Link>
        </div>
        <div className="w-full">
          <StatCard label="Total Comments" value={0} />
        </div>
        <div className="w-full">
          <Link to="/user-dashboard/media">
            <StatCard label="Total Media" value={totalData.totalMedia || 0} />
          </Link>
        </div>
      </div>
      <div className="w-full flex gap-12 ">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
        {/* <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: ["bar A", "bar B", "bar C"],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={500}
          height={350}
        /> */}
      </div>
    </div>
  );
};
