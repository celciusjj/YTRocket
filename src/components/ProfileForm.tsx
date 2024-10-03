import { useProfileForm } from '../hooks/useProfileForm';
import { countries, departments, ECountries, languages } from '../models/utilities';
import { useTranslations } from '../traslations/hooks';
import { CustomDropdown } from './CustomDropdown';
import { FormInput } from './FormInput';
import { ModalProfile } from './ModalProfile';

export const ProfileForm = () => {
  const { form, toggleModal, isOpen } = useProfileForm();
  const { translate } = useTranslations();

  return (
    <>
      <div className='flex flex-col'>
        <div className='bg-[#BFD2FE33] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <FormInput form={form} field='name' title={translate('profile.form.name')} />
          <FormInput form={form} field='lastName' title={translate('profile.form.lastName')} />
          <CustomDropdown
            form={form}
            options={countries}
            field='country'
            title={translate('profile.form.country')}
          />
          <CustomDropdown
            options={form.values.country === ECountries.COLOMBIA ? departments : []}
            form={form}
            field='department'
            title={translate('profile.form.department')}
          />
          <FormInput form={form} field='address' title={translate('profile.form.address')} />
          <FormInput form={form} field='city' title={translate('profile.form.city')} />
          <FormInput form={form} field='postal' title={translate('profile.form.postal')} />
          <FormInput form={form} field='celphone' title={translate('profile.form.celphone')} />
          <CustomDropdown
            options={languages}
            form={form}
            field='language'
            title={translate('profile.form.language')}
          />
        </div>
        <div className='flex justify-end'>
          <button
            type='submit'
            onClick={() => form.handleSubmit()}
            className='bg-primary text-light rounded-md mt-6 flex justify-end py-2 px-8 hover:bg-primary-100'
          >
            {translate('profile.form.button')}
          </button>
        </div>
      </div>
      {isOpen ? <ModalProfile toggleModal={toggleModal} /> : null}
    </>
  );
};
