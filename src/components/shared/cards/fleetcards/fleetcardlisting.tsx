import { Fleet } from "@/constants";
import FleetCard from "./fleetcard";
import { Dispatch, SetStateAction } from "react";

interface FleetCardListingProps {
  fleets: Fleet[];
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const FleetCardListing = ({ fleets, setDrawerOpen }: FleetCardListingProps) => {
  return fleets.map((fleet) => <FleetCard data={fleet} setDrawerOpen={setDrawerOpen} />);
};

export default FleetCardListing;
