import { ProfileIcon } from './ProfileIcon';
import profilePicture from '../assets/Imagenes/paola jara.png';
import { collaborators, profileStats } from '../models/profile';
import { Collaborator } from './Collaborator';
import { useTranslations } from '../traslations/hooks';

export const ProfileStats = () => {
  const { translate } = useTranslations();
  return (
    <section className='mt-10 mb-7 min-w-[305px] max-w-md bg-light shadow-card rounded-2xl px-5 pt-5 pb-24'>
      <h1 className='text-deep font-main font-semibold'>{translate('profile.stats.title')}</h1>
      <ProfileIcon main={true} image={profilePicture} />
      <div className='flex flex-col gap-12 mt-5'>
        <div className='flex flex-col items-center gap-2'>
          <h2 className='font-[500] text-deep'>Paola Jara</h2>
          <span className='text-primary text-sm px-5 py-1 font-main bg-primary-20 rounded-full'>
            {translate('profile.stats.artist')}
          </span>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h3 className='font-main font-[500] text-xl '>{translate('profile.stats.summary')}</h3>
          <ul className='flex flex-col items-center gap-8'>
            {profileStats.map(item => (
              <li key={item.id} className='flex flex-col items-center gap-2'>
                <p className='text-primary font-main text-3xl font-[700]'>{item.number}</p>
                <span className='text-sm font-main text-center text-[#242731]'>{translate(item.reason)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col items-center gap-5'>
          <h3 className='font-main font-[500] text-xl text-deep'>{translate('profile.stats.collaborators')}</h3>
          <div className='flex flex-row gap-5'>
            {collaborators.map(item => (
              <Collaborator key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
