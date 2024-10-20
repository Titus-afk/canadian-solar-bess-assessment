import { Navigation } from "@/constants";
import { cn } from "@/lib/utils";

interface NavItemProps {
  navItem: Navigation;
}

const NavItem = ({ navItem }: NavItemProps) => {
  return (
    <li className={cn([" rounded p-2 text-[16px] text hover:text-red-950 hover:bg-red-950 hover:bg-opacity-10", navItem.isActive && "text-red-950 bg-red-950 bg-opacity-10 font-semibold"])}>
      <a href={navItem.href} className="flex flex-col items-center gap-2  text-xs">
        <navItem.Icon size={20} className="flex-shrink-0" /> {navItem.label}
      </a>
    </li>
  );
};

export default NavItem;
