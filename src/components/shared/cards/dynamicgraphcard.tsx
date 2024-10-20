import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const DynamicGraphCard = () => {
  const options: Highcharts.Options = {
    chart: {
      type: "line",
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "16px",
        textAlign: "left",
      },
    },
    xAxis: {
      categories: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // Extended hours for a full day of data
      title: {
        text: "Hour",
      },
    },
    yAxis: {
      title: {
        text: "Power in KW",
      },
      min: 0.5,
      max: 2.5, // Adjusted to match the chart range
    },
    series: [
      {
        name: "Active Power",
        data: [1.6, 1.7, 1.5, 1.8, 1.7, 1.6, 1.5, 1.4, 1.3, 1.7, 1.5, 1.6, 1.4, 1.4, 1.3, 1.5, 1.6, 1.3, 1.4, 1.3, 1.2, 1.1, 1.3, 1.2], // Added more data points
        type: "line",
        color: "#0088ff", // Blue line for Active Power
      },
      {
        name: "Expected Power",
        data: [1.5, 1.6, 1.4, 1.7, 1.6, 1.7, 1.5, 1.5, 1.7, 1.6, 1.8, 1.5, 1.3, 1.5, 1.4, 1.6, 1.3, 1.7, 1.4, 1.5, 1.6, 1.3, 1.4, 1.2], // Added more data points
        type: "line",
        color: "#ff8c00", // Orange line for Expected Power
      },
      {
        name: "Bounds",
        data: [1.4, 1.6, 1.3, 1.5, 1.5, 1.3, 1.6, 1.3, 1.5, 1.2, 1.4, 1.2, 1.1, 1.3, 1.2, 1.3, 1.1, 1.2, 1.3, 1.1, 1.2, 1.1, 1.2, 1.1], // Added more data points
        type: "line",
        color: "#333333", // Dark grey line for Bounds
      },
    ],
    legend: {
      enabled: true,
    },
  };

  return (
    <div className="bg-white border rounded mt-2 h-full">
      <div className="p-3 flex justify-between border-b">
        <div>
          <h3 className="text-md font-semibold">Active Power</h3>
          <p className="text-sm text-gray-600">Last 24 hours</p>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[100px] px-2">
              <SelectValue placeholder="24 Hours" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">1 week</SelectItem>
              <SelectItem value="dark">1 Month</SelectItem>
              <SelectItem value="system">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-1 pt-3 box-content">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default DynamicGraphCard;
