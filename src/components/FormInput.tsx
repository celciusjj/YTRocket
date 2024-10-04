import { FormikProps } from 'formik';
import MaskedInput from 'react-text-mask';

interface Props {
  type?: string;
  title: string;
  form: FormikProps<any>;
  field: string;
  mask?: Array<string | RegExp>;
}

export const FormInput = ({ type = 'text', title, form, field, mask }: Props) => {
  const inputElement = (
    <input
      type={type}
      onBlur={form?.handleBlur}
      name={field}
      value={form?.values?.[field]}
      onChange={form.handleChange}
      className='text-sm bg-[#BFD2FE33] rounded-[4px] border border-accent h-9 text-secondary pl-3 focus:outline-none focus:ring-0 focus:border-primary group-hover:text-[#1f252d]'
    />
  );

  return (
    <div className='flex flex-col gap-2 cursor-pointer group'>
      <span className='font-main text-[12px]'>{title}</span>
      {mask ? (
        <MaskedInput
          mask={mask}
          onBlur={form?.handleBlur}
          name={field}
          value={form?.values?.[field]}
          onChange={form.handleChange}
          className='text-sm bg-[#BFD2FE33] rounded-[4px] border border-accent h-9 text-secondary pl-3 focus:outline-none focus:ring-0 focus:border-primary group-hover:text-[#1f252d]'
        />
      ) : (
        inputElement
      )}
    </div>
  );
};
