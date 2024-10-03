export const SectionBar = () => {
  return (
    <div className='flex gap-6 my-6'>
      <section className='border-b-4 border-primary w-32 items-center text-center pb-2'>
        <h2 className='font-main font-bold text-primary'>MI PERFIL</h2>
      </section>
      <section>
        <h2 className='font-main font-[500] text-secondary items-center text-center pb-2 hover:text-deep hover:border-b-2 border-b-0 hover:border-deep border-transparent'>
          INFORMACIÓN COMPLEMENTARIA
        </h2>
      </section>
    </div>
  );
};
