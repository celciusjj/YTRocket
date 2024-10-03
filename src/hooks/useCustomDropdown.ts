import { FormikProps } from 'formik';
import { useEffect, useRef, useState } from 'react';

export const useCustomDropdown = (form: FormikProps<any>, field: string) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    form.setFieldValue(field, option);
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOptionClick,
    dropdownRef,
    setIsOpen,
  };
};
