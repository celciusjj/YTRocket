import banner1 from '../assets/Imagenes/banner1.svg';
import banner2 from '../assets/Imagenes/banner2.svg';
import banner3 from '../assets/Imagenes/banner3.svg';

export const Banner = () => {
  return (
    <div className='bg-primary flex pl-6 py-4 rounded-2xl mt-10 relative'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-light font-main text-[12px]'>TU RUTA MUSICAL</h3>
        <h4 className='text-light font-bold text-2xl w-[370px] font-main'>
          Conviértete en un tiburón,<span className='block'>Lleva tu música a la superficie</span>
        </h4>
        <div className='bg-primary-40 rounded-[40px] w-[134px] h-9'>
          <div className='bg-primary-60 rounded-[40px] w-[125px] h-9'>
            <button className='bg-primary-100 rounded-[40px] p-3 text-light h-9 w-28 flex items-center justify-center transition-all duration-500 ease-in-out hover:w-[134px]'>
              <span className='text-[12px] flex items-center gap-3'>
                Ir a mi ruta
                <svg width='15' height='12' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M13.9062 6.70624C14.2968 6.31562 14.2968 5.68124 13.9062 5.29062L8.9062 0.290619C8.51558 -0.100006 7.8812 -0.100006 7.49058 0.290619C7.09995 0.681244 7.09995 1.31562 7.49058 1.70624L10.7875 4.99999H1.19995C0.646826 4.99999 0.199951 5.44687 0.199951 5.99999C0.199951 6.55312 0.646826 6.99999 1.19995 6.99999H10.7843L7.4937 10.2937C7.10308 10.6844 7.10308 11.3187 7.4937 11.7094C7.88433 12.1 8.5187 12.1 8.90933 11.7094L13.9093 6.70937L13.9062 6.70624Z'
                    fill='#F6F9FF'
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-row absolute right-[1px] top-0'>
        <img src={banner1} alt='Banner 1' />
        <img src={banner2} alt='Banner 2' />
        <img src={banner3} alt='Banner 3' />
      </div>
    </div>
  );
};
