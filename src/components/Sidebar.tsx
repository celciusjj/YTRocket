import menuIcon from "../assets/Iconos/Menu.svg";
import { useSidebar } from "../hooks/useSidebar";
import { bottomSidebarItems, topSidebarItems } from "../models/sidebar";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const { open, setOpen } = useSidebar();
  return (
    <div className="flex flex-col justify-between bg-red-300 p-5">
      <div className="gap-6 flex flex-col">
        <div className="flex gap-2 items-center">
          <div onClick={() => setOpen((prevState) => !prevState)}>
            <img src={menuIcon} alt="icon" />
          </div>
          {open ? <h1>AEKU</h1> : null}
        </div>
        {topSidebarItems.map((item, index) => (
          <SidebarItem
            open={open}
            name={item.name}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
      <div className="gap-6 flex flex-col">
        {bottomSidebarItems.map((item, index) => (
          <SidebarItem
            open={open}
            name={item.name}
            icon={item.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
