export interface InputComponentProps {
  label?: string;
  placeholder: string;
  name: string;
  handleChange: any;
  handleBlur: any;
  value: string;
  errors: { [key: string]: string };
  type?: string;
  className?: string;
}
