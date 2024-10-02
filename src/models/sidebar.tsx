import { ExitIcon } from "../icons/ExitIcon";
import { HelpIcon } from "../icons/HelpIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { NewTrackIcon } from "../icons/NewTrackIcon";
import { StatsIcon } from "../icons/StatsIcon";
import { WalletIcon } from "../icons/WalletIcon";

export interface ISidebarItem {
  id: number;
  icon: any;
  name: string;
}

export const topSidebarItems: ISidebarItem[] = [
  {
    id: 1,
    icon: HomeIcon,
    name: "Home",
  },
  {
    id: 2,
    icon: NewTrackIcon,
    name: "Nuevo lanzamiento",
  },
  {
    id: 3,
    icon: WalletIcon,
    name: "Estado de cuenta",
  },
  {
    id: 4,
    icon: StatsIcon,
    name: "Ver estadísticas",
  },
];

export const bottomSidebarItems = [
  {
    id: 5,
    icon: HelpIcon,
    name: "Centro de ayuda",
  },
  {
    id: 6,
    icon: ExitIcon,
    name: "Salir",
  },
];
