import Alert from './alert';
import Button from './button';
import Card from './card';
import Input from './input';
import Link from './link';
import Paper from './paper';
import Table from './table';
import Typography from './typography';
import Select from './select';
import Accordion from './accordion';

// ----------------------------------------------------------------------

const ComponentOverrides = (theme) => {
  return Object.assign(
    Alert(theme),
    Button(theme),
    Card(theme),
    Input(theme),
    Link(theme),
    Paper(theme),
    Table(theme),
    Typography(theme),
    Select(theme),
    Accordion(theme)
  );
};

export default ComponentOverrides;
