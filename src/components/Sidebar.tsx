import menuIcon from '../assets/Iconos/Menu.svg';
import profilePicture from '../assets/Imagenes/paola jara.png';
import { useSidebar } from '../hooks/useSidebar';
import { bottomSidebarItems, topSidebarItems } from '../models/sidebar';
import { useTranslations } from '../traslations/hooks';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  const { translate } = useTranslations();
  const { open, setOpen, itemActive, setItemActive } = useSidebar();
  return (
    <nav className={`flex flex-col justify-between pl-4 pr-6 py-5 duration-500 ${open ? 'w-64' : 'w-20'}`}>
      <div className='flex flex-col'>
        <div className='flex gap-3 items-center'>
          <button
            className='flex justify-center items-center cursor-pointer bg-primary rounded-md h-9 min-w-9 max-w-9'
            onClick={() => setOpen(prevState => !prevState)}
          >
            <img src={menuIcon} alt='navigation menu' />
          </button>
          {open ? (
            <h1
              className={`text-primary font-extrabold transition-all duration-300 text-lg font-main ${
                open ? 'text-base opacity-100' : 'text-sm opacity-0'
              }`}
            >
              NAEKU
            </h1>
          ) : null}
        </div>
        {topSidebarItems.map(item => (
          <SidebarItem
            item={item}
            active={itemActive === item.id}
            setItemActive={setItemActive}
            open={open}
            key={item.id}
          />
        ))}
      </div>
      <div className='flex flex-col'>
        {bottomSidebarItems.map(item => (
          <SidebarItem
            item={item}
            active={itemActive === item.id}
            setItemActive={setItemActive}
            open={open}
            key={item.id}
          />
        ))}

        <div className='flex gap-2 items-center mt-2 p-2'>
          <div className='flex justify-center items-center h-9 min-w-6 max-w-6'>
            <img src={profilePicture} alt='profile picture' />
          </div>
          {open ? (
            <h1
              className={`transition-all duration-200 text-sm font-main text-secondary ${
                open ? 'text-base opacity-100 font-[500]' : 'text-sm opacity-0'
              } whitespace-nowrap`}
            >
              {translate('sidebar.profile')}
            </h1>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
