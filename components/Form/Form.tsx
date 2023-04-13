import { Formik, FormikConfig, FormikValues, Form as RawForm } from 'formik';

interface Props<Values extends FormikValues> extends FormikConfig<Values> {
  children?: React.ReactNode;
  className?: string;
}

export default function Form<Values extends FormikValues>(props: Props<Values>) {
  const {
    children,
    className,
    // validateOnBlur = false,
    // validateOnChange = false,
    ...formikProps
  } = props;

  return (
    <Formik<Values>
      // validateOnBlur={validateOnBlur}
      // validateOnChange={validateOnChange}
      {...formikProps}
    >
      <RawForm className={className}>{children}</RawForm>
    </Formik>
  );
}
