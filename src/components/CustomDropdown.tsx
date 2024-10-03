// @typescript-eslint/no-explicit-any
import { FormikProps } from 'formik';
import React from 'react';
import { useCustomDropdown } from '../hooks/useCustomDropdown';
import dropdownIcon from '../assets/Iconos/dropdown.svg';
import { useTranslations } from '../traslations/hooks';

interface CustomDropdownProps {
  title: string;
  form: FormikProps<any>;
  field: string;
  options: string[];
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({ title, options, field, form }) => {
  const { handleOptionClick, isOpen, dropdownRef, setIsOpen } = useCustomDropdown(form, field);
  const { translate } = useTranslations();

  return (
    <div ref={dropdownRef} className='relative flex flex-col gap-2 cursor-pointer group'>
      <label className='font-main text-[12px]'>{title}</label>
      <div
        className={`flex items-center justify-between rounded-[4px] bg-[#BFD2FE33] border h-9 cursor-pointer pl-3 pr-4 ${
          isOpen ? 'border-primary' : ' border-accent'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-main text-secondary text-sm group-hover:text-[#1f252d]'>
          {form.values[field] || translate('dropdown.title')}
        </span>
        <img className='w-5 h-5' src={dropdownIcon}></img>
      </div>

      <div
        className={`absolute z-10 mt-3 p-2 bg-white border border-gray-300 rounded shadow-lg w-full top-16 transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 hidden'
        }
        `}
      >
        {options.map((option, index) => (
          <div
            key={index}
            className='px-1 py-1 m-1 rounded-md hover:bg-[#a9c3ff33] cursor-pointer font-main text-sm text-deep'
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
