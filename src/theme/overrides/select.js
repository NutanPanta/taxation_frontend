//
import { InputSelectIcon } from './customIcons';

// ----------------------------------------------------------------------

const Select = () => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  };
};

export default Select;
