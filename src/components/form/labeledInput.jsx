import { Box, FormHelperText } from '@mui/material';
// styles
import {
  LabeledInputLabel,
  LabeledTextInput,
  LabeledTextAreaInput,
} from './styles/labeledInput.styled';

const LabeledInput = ({
  name,
  label,
  minRows,
  type = 'text',
  formik,
  currentValue,
  placeholder,
  helperText,
  outerStyles = {},
  styles = {},
  inputWrapperStyles = {},
  disabled = false,
  margin = true,
}) => {
  const value = currentValue || formik?.values?.[name];
  const errorMessage = formik?.errors?.[name];
  const isTouched = formik?.touched?.[name];
  const isError = isTouched && errorMessage?.length > 0;
  return (
    <Box className={margin ? 'mb-3' : ''} sx={outerStyles}>
      <LabeledInputLabel htmlFor={name} className='form-label'>
        {label}
      </LabeledInputLabel>
      <div>
        <Box sx={inputWrapperStyles}>
          {type === 'textarea' ? (
            <LabeledTextAreaInput
              name={name}
              type={type}
              placeholder={placeholder || label}
              rows={minRows || '5'}
              value={value || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border ${isError && 'border-danger text-danger'}`}
              style={styles}
            />
          ) : (
            <LabeledTextInput
              name={name}
              type={type}
              placeholder={placeholder || label}
              value={value || ''}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              className={`border ${isError && 'border-danger text-danger'}`}
              style={styles}
              disabled={disabled}
            />
          )}
        </Box>
        {isError ? (
          <FormHelperText error>{errorMessage}</FormHelperText>
        ) : (
          <FormHelperText>{helperText || ' '}</FormHelperText>
        )}
      </div>
    </Box>
  );
};

export default LabeledInput;
