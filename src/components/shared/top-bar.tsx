import logo from "@/assets/logo.png";
import AccountMenu from "./account-menu";
import userImg from "@/assets/user-img.png";
import { ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <>
      <nav className="py-3 border-b px-4 flex justify-between items-center fixed top-0 w-full bg-white z-10">
        <div className="logo">
          <img className="w-[180px]" src={logo} alt="" />
        </div>
        <div>
          <h4>
            <span className="text-red-500">Alert </span>: <span className="underline cursor-pointer">Weston Park at High discharge (3.20 MW), SOC at 60%</span>
          </h4>
        </div>
        <div className="user h-full border rounded">
          <AccountMenu>
            <div className="p-1 flex items-center gap-2">
              <img className="w-7 h-7" src={userImg} alt="" />
              <ChevronDown className="w-4 h-4" />
            </div>
          </AccountMenu>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
