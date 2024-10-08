import image from '../assets/Imagenes/Welcome Image.png';
import closeIcon from '../assets/Iconos/close.svg';
import { useTranslations } from '../traslations/hooks';

interface Props {
  toggleModal: () => void;
}

export const ModalProfile = ({ toggleModal }: Props) => {
  const { translate } = useTranslations();
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50'>
        <div className='bg-light rounded-lg shadow-lg p-10 relative w-[506px] flex flex-col items-center gap-6'>
          <button
            className='absolute top-5 right-5 text-gray-600 hover:text-gray-900 cursor-pointer'
            onClick={toggleModal}
          >
            <img className='w-4 h-4' src={closeIcon} />
          </button>
          <h2 className='text-xl font-bold mb-4 text-primary font-main'>{translate('profile.modal.title')}</h2>
          <img src={image} alt='welcome' className='mb-4' />
          <p className='text-secondary mb-4 text-center'>{translate('profile.modal.subtitle')}</p>
          <button onClick={toggleModal} className='bg-primary text-white  w-52 py-2 rounded-3xl cursor-pointer'>
            {translate('profile.modal.button')}
          </button>
        </div>
      </div>
    </>
  );
};
