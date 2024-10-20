import SideMenu from "../shared/sidemenu/sideMenu";
import Topbar from "../shared/top-bar";

interface DashboardLayoutprops {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutprops) => {
  return (
    <>
      <Topbar />
      <div className="flex mt-[64px]">
        <SideMenu />
        <div className="bg-gray-600 w-full bg-opacity-5 px-5 pt-3 ml-[90px] pb-14">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
