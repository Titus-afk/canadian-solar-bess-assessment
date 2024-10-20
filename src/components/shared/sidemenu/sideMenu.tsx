import { NAVIGATION } from "@/constants";

import NavItem from "./navItem";

const SideMenu = () => {
  return (
    <div className="w-[90px] h-screen border-r border-t-0 border px-2 pt-4 flex-shrink-0 fixed left-0 top-[64px] bg-white">
      <nav>
        <ol className="flex flex-col gap-1">
          {NAVIGATION.map((navItem) => (
            <NavItem navItem={navItem} />
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default SideMenu;
