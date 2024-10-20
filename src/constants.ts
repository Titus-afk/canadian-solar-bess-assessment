import { IconAlertHexagon, IconEye, IconGraph, IconHome } from "@tabler/icons-react";

export type Navigation = {
  label: string;
  Icon: React.ElementType;
  href: string;
  isActive?: boolean;
};

export type Fleet = {
  title: string;
  warning?: boolean;
  alerts?: boolean;
  soc: number;
  discharge: string;
  charge: string;
  performance: number;
  availability: number;
  uptime: number;
  poi: string;
  poistate: "consuming" | "supplying";
};

export const NAVIGATION: Navigation[] = [
  { label: "Overview", Icon: IconHome, href: "/home", isActive: true },
  { label: "Monitor", Icon: IconEye, href: "/home" },
  { label: "Reports", Icon: IconGraph, href: "/home" },
  { label: "Alerts", Icon: IconAlertHexagon, href: "/home" },
];

export const fleetsData: Fleet[] = [
  {
    title: "Toronto Hydro",
    soc: 75,
    discharge: "3.00 MW | 4.39 MWh",
    charge: "20.92 MW | 4.39 MWh",
    performance: 98.7,
    availability: 98.5,
    uptime: 98.0,
    poistate: "consuming",
    poi: "+2.50 kW",
    alerts: true,
    warning: true,
  },
  {
    title: "Leslie Spit",
    soc: 80,
    discharge: "2.90 MW | 3.95 MWh",
    charge: "19.82 MW | 3.95 MWh",
    performance: 99.0,
    availability: 98.8,
    uptime: 98.6,
    poistate: "consuming",
    poi: "-1.50 kW",
    alerts: false,
    warning: false,
  },
  {
    title: "Weston Park",
    soc: 60,
    discharge: "3.20 MW | 5.30 MWh",
    charge: "18.10 MW | 5.30 MWh",
    performance: 97.3,
    availability: 97.9,
    uptime: 96.7,
    poistate: "consuming",
    poi: "+3.10 kW",
    alerts: true,
    warning: true,
  },
  {
    title: "Downsview Base",
    soc: 85,
    discharge: "3.10 MW | 4.80 MWh",
    charge: "21.50 MW | 4.80 MWh",
    performance: 98.2,
    availability: 98.0,
    uptime: 98.1,
    poistate: "consuming",
    poi: "-2.00 kW",
    alerts: true,
    warning: false,
  },
  {
    title: "Milton Park",
    soc: 90,
    discharge: "2.85 MW | 4.60 MWh",
    charge: "22.20 MW | 4.60 MWh",
    performance: 98.9,
    availability: 99.0,
    uptime: 98.7,
    poistate: "consuming",
    poi: "+0.50 kW",
    alerts: false,
    warning: true,
  },
  {
    title: "Caledon Reserve",
    soc: 82,
    discharge: "2.75 MW | 4.40 MWh",
    charge: "20.75 MW | 4.40 MWh",
    performance: 98.4,
    availability: 98.7,
    uptime: 97.8,
    poistate: "consuming",
    poi: "+1.75 kW",
    alerts: false,
    warning: false,
  },
  {
    title: "Niagara Fields",
    soc: 88,
    discharge: "3.15 MW | 5.00 MWh",
    charge: "19.35 MW | 5.00 MWh",
    performance: 98.6,
    availability: 98.3,
    uptime: 97.5,
    poistate: "supplying",
    poi: "-2.35 kW",
    alerts: true,
    warning: true,
  },
  {
    title: "Portlands Centre",
    soc: 73,
    discharge: "2.60 MW | 4.30 MWh",
    charge: "20.90 MW | 4.30 MWh",
    performance: 97.9,
    availability: 97.7,
    uptime: 97.2,
    poistate: "supplying",
    poi: "+1.90 kW",
    alerts: true,
    warning: false,
  },
  {
    title: "Rouge Park",
    soc: 78,
    discharge: "2.50 MW | 4.20 MWh",
    charge: "21.15 MW | 4.20 MWh",
    performance: 98.0,
    availability: 98.1,
    uptime: 98.5,
    poistate: "supplying",
    poi: "+0.25 kW",
    alerts: false,
    warning: false,
  },
  {
    title: "Pickering Area",
    soc: 79,
    discharge: "3.05 MW | 4.90 MWh",
    charge: "20.45 MW | 4.90 MWh",
    performance: 98.5,
    availability: 98.6,
    uptime: 97.9,
    poistate: "supplying",
    poi: "-1.20 kW",
    alerts: false,
    warning: true,
  },
  {
    title: "Brampton Zone",
    soc: 81,
    discharge: "2.95 MW | 4.85 MWh",
    charge: "19.80 MW | 4.85 MWh",
    performance: 98.3,
    availability: 98.4,
    uptime: 98.1,
    poistate: "supplying",
    poi: "+3.00 kW",
    alerts: true,
    warning: false,
  },
  {
    title: "Mississauga Fields",
    soc: 84,
    discharge: "3.25 MW | 5.25 MWh",
    charge: "20.35 MW | 5.25 MWh",
    performance: 98.8,
    availability: 99.1,
    uptime: 98.9,
    poistate: "consuming",
    poi: "-2.10 kW",
    alerts: true,
    warning: true,
  },
  {
    title: "Etobicoke Cluster",
    soc: 87,
    discharge: "3.00 MW | 4.95 MWh",
    charge: "21.50 MW | 4.95 MWh",
    performance: 98.6,
    availability: 98.3,
    uptime: 97.8,
    poistate: "consuming",
    poi: "+2.20 kW",
    alerts: false,
    warning: false,
  },
  {
    title: "York Hub",
    soc: 76,
    discharge: "2.80 MW | 4.65 MWh",
    charge: "19.70 MW | 4.65 MWh",
    performance: 98.2,
    availability: 97.9,
    uptime: 98.0,
    poistate: "consuming",
    poi: "+1.40 kW",
    alerts: false,
    warning: true,
  },
  {
    title: "Rosedale Zone",
    soc: 92,
    discharge: "3.35 MW | 5.40 MWh",
    charge: "22.30 MW | 5.40 MWh",
    performance: 99.2,
    availability: 99.0,
    uptime: 98.5,
    poistate: "consuming",
    poi: "-0.80 kW",
    alerts: true,
    warning: false,
  },
  {
    title: "Highland Reserve",
    soc: 82,
    discharge: "2.85 MW | 4.75 MWh",
    charge: "20.85 MW | 4.75 MWh",
    performance: 98.4,
    availability: 98.3,
    uptime: 98.7,
    poistate: "consuming",
    poi: "+2.50 kW",
    alerts: false,
    warning: false,
  },
  {
    title: "Peel Project",
    soc: 88,
    discharge: "3.10 MW | 5.05 MWh",
    charge: "21.90 MW | 5.05 MWh",
    performance: 98.7,
    availability: 99.0,
    uptime: 98.8,
    poistate: "supplying",
    poi: "+1.90 kW",
    alerts: true,
    warning: true,
  },
  {
    title: "Harbourfront Farm",
    soc: 89,
    discharge: "3.05 MW | 5.10 MWh",
    charge: "22.00 MW | 5.10 MWh",
    performance: 98.9,
    availability: 99.1,
    uptime: 98.6,
    poistate: "supplying",
    poi: "-1.25 kW",
    alerts: false,
    warning: true,
  },
  {
    title: "East York",
    soc: 77,
    discharge: "2.70 MW | 4.45 MWh",
    charge: "20.10 MW | 4.45 MWh",
    performance: 97.8,
    availability: 97.9,
    uptime: 98.1,
    poistate: "supplying",
    poi: "+1.85 kW",
    alerts: true,
    warning: false,
  },
  {
    title: "Parkdale Solar",
    soc: 74,
    discharge: "2.65 MW | 4.35 MWh",
    charge: "19.85 MW | 4.35 MWh",
    performance: 97.7,
    availability: 97.8,
    uptime: 97.5,
    poistate: "supplying",
    poi: "-0.95 kW",
    alerts: true,
    warning: false,
  },
];
