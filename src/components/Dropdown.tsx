// @typescript-eslint/no-explicit-any
import { FormikProps } from 'formik';
import React from 'react';

interface DropdownProps {
  type?: string;
  title: string;
  form: FormikProps<any>;
  field: string;
  options?: string[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, options, field, form }) => {
  return (
    <div className='flex flex-col gap-2 cursor-pointer'>
      <span className='font-main text-[12px]'>{title}</span>
      <select
        name={field}
        value={form?.values?.[field]}
        onChange={form.handleChange}
        className='bg-[#BFD2FE33] rounded-[4px] border-accent border-[1px] h-9 text-secondary pl-3  focus:outline-none focus:ring-0 focus:border-primary'
      >
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
