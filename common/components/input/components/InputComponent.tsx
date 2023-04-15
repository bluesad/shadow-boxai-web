/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { InputComponentProps } from '../types/input.types';

const InputComponent = ({
  label,
  placeholder,
  name,
  handleChange,
  handleBlur,
  value,
  errors,
  type = 'text',
  className,
}: InputComponentProps) => (
  <label className="flex flex-col">
    <span className="text-lg font-semibold">{label}</span>
    <input
      type={type}
      className={`input ${className || ''}`}
      placeholder={placeholder}
      id={name}
      name={name}
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
    />
    <div className="h-4 text-xs italic text-red-500">{errors[name]}</div>
  </label>
);

export default InputComponent;
