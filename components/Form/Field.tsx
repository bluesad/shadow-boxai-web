/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/react';
import { FieldProps, FormikValues, Field as RawField } from 'formik';
import { cloneElement } from 'react';

interface ControlProps {
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
}

type Props<Values extends FormikValues, N extends keyof Values> = ControlProps & {
  name: N;
  className?: string;
  label?: string | React.ReactNode;
  helper?: string | React.ReactNode;
  children?: ((props: FieldProps<Values[N], Values>) => React.ReactElement) | React.ReactElement;
};

export default function Field<Values extends FormikValues, N extends keyof Values = keyof Values>(
  props: Props<Values, N>,
) {
  const { className, name, label, helper, children, disabled, readonly, required, invalid } = props;

  return (
    <RawField name={name}>
      {({ field, form, meta }: FieldProps<Values[N], Values>) => (
        <FormControl
          mb="4px"
          isInvalid={invalid ?? (meta.error != null && meta.touched)}
          isReadOnly={readonly}
          isDisabled={disabled}
          isRequired={required}
        >
          <Box className={className} pb="24px">
            {label && <FormLabel>{label}</FormLabel>}
            {helper && <FormHelperText my="8px">{helper}</FormHelperText>}
            {injectProps(children, { field, form, meta })}
          </Box>
          <FormErrorMessage mt="-20px">{meta.error}</FormErrorMessage>
        </FormControl>
      )}
    </RawField>
  );
}

function injectProps<Values extends FormikValues, N extends keyof Values>(
  element: Props<Values, N>['children'],
  props: FieldProps<Values[N], Values>,
): React.ReactNode {
  return typeof element === 'function'
    ? element(props)
    : element != null
    ? cloneElement(element, props.field)
    : null;
}
