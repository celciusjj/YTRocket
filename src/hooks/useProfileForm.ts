import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { persistData } from '../store.ts/persist';
import { useTranslations } from '../traslations/hooks';
import { languageMapping } from '../traslations/models';

export interface ProfileForm {
  name: string;
  lastName: string;
  department: string;
  address: string;
  city: string;
  postal: string;
  celphone: string;
  language: string;
  country: string;
}

export const useProfileForm = () => {
  const { changeLanguages } = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = (values: ProfileForm) => {
    persistData.save('data_rocket', values);
    const language = languageMapping[form.values.language];
    changeLanguages(language);
    toggleModal();
  };

  const form = useFormik<ProfileForm>({
    initialValues: {
      name: '',
      lastName: '',
      department: '',
      address: '',
      city: '',
      postal: '',
      celphone: '',
      language: '',
      country: '',
    },
    onSubmit,
  });

  useEffect(() => {
    const initialData = persistData.get('data_rocket');
    form.setValues({
      ...form,
      ...initialData,
    });
  }, []);

  useEffect(() => {
    form.setFieldValue('department', '');
  }, [form.values.country]);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  return { form, toggleModal, isOpen };
};
