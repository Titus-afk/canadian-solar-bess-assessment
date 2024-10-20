import DashboardLayout from "@/components/layout/dashboard-layout";
import FleetCardListing from "@/components/shared/cards/fleetcards/fleetcardlisting";
import DetailDrawer from "@/components/shared/detail-drawer/detail-drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fleetsData } from "@/constants";
import { IconList, IconRefresh, IconSortAscending } from "@tabler/icons-react";
import { useState } from "react";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);
  return (
    <div className="font-inter">
      <DashboardLayout>
        <div className="flex w-full items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Fleet Summary</h1>
            <p className="text-gray-500">Displays a summary of grid information</p>
          </div>

          <div className="flex gap-2">
            <Input className="inline-flex max-w-[300px]" placeholder="Search in fleet..." />
            <Button variant={"outline"}>
              <IconList></IconList>
              List View
            </Button>
            <Button variant={"outline"} className="flex">
              <IconRefresh></IconRefresh>Refresh
            </Button>
            <Button variant={"outline"} className="flex">
              <IconSortAscending></IconSortAscending>Sort
            </Button>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap mt-6">
          <FleetCardListing setDrawerOpen={setDrawerOpen} fleets={fleetsData} />
        </div>

        <DetailDrawer isOpen={isDrawerOpen} toggleOpen={setDrawerOpen} />
      </DashboardLayout>
    </div>
  );
}

export default App;
