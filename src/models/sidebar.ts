import homeIcon from "../assets/Iconos/Home.svg";
import newTrackIcon from "../assets/Iconos/add track.svg";
import walletIcon from "../assets/Iconos/Billetera.svg";
import statsIcon from "../assets/Iconos/Estad-ísticas.svg";
import pqrIcon from "../assets/Iconos/Pqr.svg";
import exitIcon from "../assets/Iconos/Salir.svg";

export interface ISidebarItem {
  id: number;
  icon: string;
  name: string;
}

export const topSidebarItems: ISidebarItem[] = [
  {
    id: 1,
    icon: homeIcon,
    name: "Home",
  },
  {
    id: 2,
    icon: newTrackIcon,
    name: "Nuevo lanzamiento",
  },
  {
    id: 3,
    icon: walletIcon,
    name: "Estado de cuenta",
  },
  {
    id: 4,
    icon: statsIcon,
    name: "Ver estadisticas",
  },
];

export const bottomSidebarItems = [
  {
    id: 5,
    icon: pqrIcon,
    name: "Centro de ayuda",
  },
  {
    id: 6,
    icon: exitIcon,
    name: "Salir",
  },
  {
    id: 7,
    icon: walletIcon,
    name: "Perfil",
  },
];
