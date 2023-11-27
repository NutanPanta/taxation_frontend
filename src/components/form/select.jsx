import { useEffect, useState } from 'react';
// icons
import { KeyboardArrowDown, Check } from '@mui/icons-material';
// styles
import {
  SelectLabel,
  SelectButton,
  SelectWrapper,
  SelectIconWrapper,
  SelectIcon,
  SelectValue,
  SelectArrow,
  SelectDetailsContainer,
  SelectDetailsWrapper,
  SelectDetail,
} from './styles/select.styles';
import { useTheme } from '@mui/material';

const Select = ({
  label,
  name = '',
  image,
  defaultValue,
  values = [],
  formik,
  selectKey = 'id',
  selectValue = 'name',
  outerStyles = {},
  innerStyles = {},
}) => {
  const {
    palette: { primary },
  } = useTheme();
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const isError = formik.errors[name] && formik.touched[name];

  useEffect(() => {
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className='position-relative'>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectButton
        style={outerStyles}
        type='button'
        onClick={() => setIsOpen(!isOpen)}
      >
        <SelectWrapper className='w-100'>
          {image && (
            <SelectIconWrapper>
              <SelectIcon>
                {image({ fill: '#fff', width: '20px', height: '20px' })}
              </SelectIcon>
            </SelectIconWrapper>
          )}
          <SelectValue className={image && 'ms-2'}>{selectedValue}</SelectValue>
        </SelectWrapper>
        <SelectArrow>
          <KeyboardArrowDown width={'16px'} height={'16px'} />
        </SelectArrow>
      </SelectButton>
      {isOpen && (
        <SelectDetailsContainer style={innerStyles}>
          <SelectDetailsWrapper elevation={20} className='p-2'>
            <ul>
              {values.map((selectableValue, key) => (
                <SelectDetail
                  className='d-flex align-items-center'
                  key={key}
                  onClick={() => (
                    formik?.setFieldValue(name, selectableValue?.[selectKey]),
                    setSelectedValue(selectableValue?.[selectValue]),
                    setIsOpen(false)
                  )}
                >
                  {selectedValue === selectableValue?.[selectValue] && (
                    <Check
                      width={'16px'}
                      height={'16px'}
                      style={{
                        color: primary.main,
                      }}
                    />
                  )}
                  <span
                    style={{ fontSize: '16px' }}
                    className={
                      selectedValue === selectableValue?.[selectValue]
                        ? 'ms-2'
                        : 'ms-4 ps-2'
                    }
                  >
                    {selectableValue?.[selectValue]}
                  </span>
                </SelectDetail>
              ))}
            </ul>
          </SelectDetailsWrapper>
          {isError && (
            <div className='error-feedback'>{formik.errors[name]}</div>
          )}
        </SelectDetailsContainer>
      )}
      {isOpen && (
        <div
          className='cve-backdrop bg-transparent'
          style={{ top: '81px', left: '281px' }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Select;
