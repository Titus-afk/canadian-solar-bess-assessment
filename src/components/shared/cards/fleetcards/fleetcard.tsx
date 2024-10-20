import { Progress } from "@/components/ui/progress";
import { Fleet } from "@/constants";
import { cn } from "@/lib/utils";
import { IconAlertTriangle, IconArrowDown, IconArrowUp, IconSquareX } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

interface FleetCardProps {
  data: Fleet;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const FleetCard = ({ data, setDrawerOpen }: FleetCardProps) => {
  const { title, availability, alerts, warning, charge, discharge, performance, soc, uptime, poi, poistate } = data;

  return (
    <div className="w-[calc(20%-12px)] bg-white rounded border flex-shrink-0 cursor-pointer hover:border-gray-400" onClick={() => setDrawerOpen(true)}>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="flex gap-2 text-sm">
            <div className="flex gap-2 items-center">
              {warning && (
                <div className="flex gap-1">
                  3 <IconAlertTriangle size={20} className="text-orange-500" />
                </div>
              )}

              {alerts && (
                <div className="flex gap-1">
                  3 <IconSquareX size={20} className="text-red-500" />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <Progress value={soc} className="h-2" indicatorColor={cn([soc < 70 ? "bg-orange-400" : "bg-green-400"])} />
          <h5 className="flex-shrink-0 ml-3 text-md font-semibold">SOC {soc}%</h5>
        </div>
        <div className="mt-2">
          <h5 className="text-sm">
            <span className="text-gray-400">D</span> : <span className="text-gray-700 tracking-wide">{charge}</span>
          </h5>
          <h5 className="text-sm mt-1">
            <span className="text-gray-400">C</span> : <span className="text-gray-700 tracking-wide">{discharge}</span>
          </h5>
          <h5 className="text-sm mt-1  flex items-center">
            <span className="text-gray-400">POI</span> &nbsp;:
            <span className="text-gray-700 tracking-wide ml-2">
              <div
                className={cn([
                  "border inline-flex text-sm items-center px-1 rounded justify-center ",
                  poistate === "supplying" ? "bg-red-600 bg-opacity-10 text-red-600 border-red-600" : "bg-green-600 bg-opacity-10 text-green-600 border-green-600",
                ])}
              >
                {poistate === "supplying" ? <IconArrowDown size={16} /> : <IconArrowUp size={16} />} <span className="font-semibold">{poi} </span>
              </div>
            </span>
          </h5>
        </div>
      </div>
      <div className=" border-t p-3">
        <span className="text-gray-400 block mb-1 text-sm">Last 24 Hours</span>
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Performance</span> <span className="text-md font-bold">{performance}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Availiability</span> <span className="text-md font-bold">{availability}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Uptime</span> <span className="text-md font-bold">{uptime}%</span>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
