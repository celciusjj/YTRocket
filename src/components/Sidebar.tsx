import menuIcon from "../assets/Iconos/Menu.svg";
import { useSidebar } from "../hooks/useSidebar";
import { bottomSidebarItems, topSidebarItems } from "../models/sidebar";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const { open, setOpen, itemActive, setItemActive } = useSidebar();
  return (
    <nav
      className={`flex flex-col justify-between pl-4 pr-6 py-5 duration-500 ${
        open ? "w-52" : "w-20"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <button
            className="flex justify-center items-center cursor-pointer bg-blue-700 rounded-md h-9 min-w-9 max-w-9"
            onClick={() => setOpen((prevState) => !prevState)}
          >
            <img src={menuIcon} alt="menú de navegación" />
          </button>
          {open ? (
            <h1
              className={`text-blue-700 font-extrabold transition-all duration-300 text-sm font-main ${
                open ? "text-base opacity-100" : "text-sm opacity-0"
              }`}
            >
              NAEKU
            </h1>
          ) : null}
        </div>
        {topSidebarItems.map((item) => (
          <SidebarItem
            item={item}
            active={itemActive === item.id}
            setItemActive={setItemActive}
            open={open}
            key={item.id}
          />
        ))}
      </div>
      <div className="flex flex-col">
        {bottomSidebarItems.map((item) => (
          <SidebarItem
            item={item}
            active={itemActive === item.id}
            setItemActive={setItemActive}
            open={open}
            key={item.id}
          />
        ))}
      </div>
    </nav>
  );
};
