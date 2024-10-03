import { Banner } from '../components/Banner';
import { ProfileForm } from '../components/ProfileForm';
import { ProfileStats } from '../components/ProfileStats';
import { SectionBar } from '../components/SectionBar';
import { Sidebar } from '../components/Sidebar';
import { useInitialData } from '../hooks/useInitialData';

function MainScreen() {
  useInitialData();
  return (
    <div className='flex min-h-screen bg-light pt-5 pb-8 w-full'>
      <Sidebar />
      <div className='flex flex-row gap-5 pr-9 w-full'>
        <ProfileStats />
        <div className='flex flex-col w-full gap-2'>
          <Banner />
          <SectionBar />
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
