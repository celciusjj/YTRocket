import { ISidebarItem } from "../models/sidebar";

interface Props {
  setItemActive: React.Dispatch<React.SetStateAction<number>>;
  active: boolean;
  open: boolean;
  item: ISidebarItem;
}

export const SidebarItem = ({ open, item, setItemActive, active }: Props) => {
  const IconComponent = item.icon;

  return (
    <button
      onClick={() => {
        setItemActive(item.id);
      }}
      className={`flex mt-3 pl-3 p-2 gap-4 items-center cursor-pointer h-10 rounded-md ${
        active ? "bg-[#DBE5FE] text-primary" : "text-secondary"
      }`}
    >
      <div className="flex-shrink-0">
        <IconComponent color={active ? "#0646FE" : "#71839B"} />
      </div>
      <h1
        className={`transition-all duration-200 text-sm font-main ${
          open ? "text-base opacity-100 font-[500]" : "text-sm opacity-0"
        } whitespace-nowrap`}
      >
        {item.name}
      </h1>
    </button>
  );
};
