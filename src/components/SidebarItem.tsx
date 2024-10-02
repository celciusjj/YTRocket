import { ISidebarItem } from "../models/sidebar";

interface Props {
  setItemActive: React.Dispatch<React.SetStateAction<number>>;
  active: boolean;
  open: boolean;
  item: ISidebarItem;
}

export const SidebarItem = ({ open, item, setItemActive, active }: Props) => {
  return (
    <button
      onClick={() => {
        setItemActive(item.id);
      }}
      className={`flex mt-2 p-2 gap-4 items-center cursor-pointer h-10  rounded-sm ${
        active ? "bg-blue-500 text-white" : "text-black"
      }`}
    >
      <img src={item.icon} alt="icon" />
      <h1
        className={`transition-all duration-200 text-sm font-main ${
          open ? "text-base opacity-100" : "text-sm opacity-0"
        } whitespace-nowrap`}
      >
        {item.name}
      </h1>
    </button>
  );
};
