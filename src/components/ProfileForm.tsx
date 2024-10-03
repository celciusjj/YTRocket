import { useProfileForm } from '../hooks/useProfileForm';
import { countries, departments, ECountries, languages } from '../models/utilities';
import { CustomDropdown } from './CustomDropdown';
import { FormInput } from './FormInput';
import { ModalProfile } from './ModalProfile';

export const ProfileForm = () => {
  const { form, toggleModal, isOpen } = useProfileForm();

  return (
    <>
      <div className='flex flex-col'>
        <div className='bg-[#BFD2FE33] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <FormInput form={form} field='name' title={'Nombres'} />
          <FormInput form={form} field='lastName' title={'Apellidos'} />
          <CustomDropdown form={form} options={countries} field='country' title='País' />
          <CustomDropdown
            options={form.values.country === ECountries.COLOMBIA ? departments : []}
            form={form}
            field='department'
            title={'Departamento/Región'}
          />
          <FormInput form={form} field='address' title={'Dirección'} />
          <FormInput form={form} field='city' title={'Ciudad'} />
          <FormInput form={form} field='postal' title={'Código Postal'} />
          <FormInput form={form} field='celphone' title={'Celular'} />
          <CustomDropdown options={languages} form={form} field='language' title={'Idioma principal'} />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            onClick={() => form.handleSubmit()}
            className='bg-primary text-light rounded-md mt-6 flex justify-end py-2 px-8 hover:bg-primary-100'
          >
            Guardar cambios
          </button>
        </div>
      </div>
      {isOpen ? <ModalProfile toggleModal={toggleModal} /> : null}
    </>
  );
};
