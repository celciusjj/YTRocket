interface Props {
  open: boolean;
  icon: string;
  name: string;
}

export const SidebarItem = ({ open, icon, name }: Props) => {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <img src={icon} alt="icon" />
      </div>
      {open ? <h1>{name}</h1> : null}
    </div>
  );
};
