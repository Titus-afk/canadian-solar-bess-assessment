import { Button } from "@/components/ui/button";
import { IconArrowRight, IconArrowUp, IconRefresh, IconX } from "@tabler/icons-react";
import MetricCard from "./metric-card";
import DynamicGraphCard from "../cards/dynamicgraphcard";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface DetailDrawerProps {
  isOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const DetailDrawer = ({ isOpen, toggleOpen }: DetailDrawerProps) => {
  return (
    <div className={cn(["w-[500px] bg-[#FFF8F8] border-l fixed top-[64px] h-[calc(100vh-64px)]  py-5 px-4 shadow-lg flex flex-col transition-all", isOpen ? "right-0" : "-right-[500px]"])}>
      <div className="flex justify-between">
        <IconX onClick={() => toggleOpen(false)} className="border border-white mb-2 text-gray-600 cursor-pointer hover:bg-white hover:border-gray-300 hover:rounded" />
        <span className="flex gap-2 text-sm text-gray-500">
          <IconRefresh size={20} />
          06/12/27 19:09:09 UTC
        </span>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Downtown Toronto</h2>
        <h4 className="mt-1 text-gray-700 flex items-center gap-2">
          10MW | 4/4 ESS | CAISO |
          <div className="border inline-flex text-sm items-center px-1 rounded justify-center bg-green-600 bg-opacity-10 text-green-600 border-green-600">
            <IconArrowUp size={16} /> <span className="font-semibold">-1.50 kW </span>
          </div>
        </h4>
        <Button variant={"ghost"} className="px-0 text-red-950">
          View System <IconArrowRight className="ml-2"></IconArrowRight>
        </Button>
      </div>

      <div className="flex justify-between border-t mt-3 pt-3">
        <MetricCard label="Performance" value="98.8%" />
        <MetricCard label="Availiability" value="98.8%" />
        <MetricCard label="Uptime" value="93.2%" />
        <MetricCard label="C-rate" value="0.79" />
        <MetricCard label="Cycles" value="0.46" />
      </div>
      <DynamicGraphCard />
    </div>
  );
};

export default DetailDrawer;
