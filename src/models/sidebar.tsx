import { ExitIcon } from '../icons/ExitIcon';
import { HelpIcon } from '../icons/HelpIcon';
import { HomeIcon } from '../icons/HomeIcon';
import { NewTrackIcon } from '../icons/NewTrackIcon';
import { StatsIcon } from '../icons/StatsIcon';
import { WalletIcon } from '../icons/WalletIcon';

export interface ISidebarItem {
  id: number;
  icon: any;
  name: string;
}

export const topSidebarItems: ISidebarItem[] = [
  {
    id: 1,
    icon: HomeIcon,
    name: 'sidebar.home',
  },
  {
    id: 2,
    icon: NewTrackIcon,
    name: 'sidebar.newTrack',
  },
  {
    id: 3,
    icon: WalletIcon,
    name: 'sidebar.wallet',
  },
  {
    id: 4,
    icon: StatsIcon,
    name: 'sidebar.stats',
  },
];

export const bottomSidebarItems = [
  {
    id: 5,
    icon: HelpIcon,
    name: 'sidebar.help',
  },
  {
    id: 6,
    icon: ExitIcon,
    name: 'sidebar.exit',
  },
];
