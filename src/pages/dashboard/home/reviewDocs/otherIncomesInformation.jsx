// mui
import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { tableCellClasses } from '@mui/material/TableCell';
// components
import { BoxedInfo } from '@components/index';
// config
import { INCOME_CHOICES } from '@/config';

// ----------------------------------------------------------------------

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    borderBottom: '1px solid',
    borderColor: theme.palette.grey[25],
    fontSize: 14,
    fontWeight: 600,
    color: theme.palette.grey[600],
  },
  padding: '20px',
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.grey[500],
    fontSize: 14,
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: '1px solid',
  borderColor: theme.palette.grey[25],
  cursor: 'pointer',

  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.grey[10],
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// ----------------------------------------------------------------------

const OtherIncomesInformations = ({ other_incomes }) => {
  return (
    <BoxedInfo
      bodyClassDetails='p-0'
      styleDetails={{ position: 'relative' }}
      hasHeader={false}
    >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ color: 'grey.700' }}>
                Income Type
              </StyledTableCell>
              <StyledTableCell sx={{ color: 'grey.700' }} align='center'>
                Amount
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ minHeight: '420px' }}>
            {other_incomes?.map((other_income, key) => (
              <StyledTableRow key={key}>
                <StyledTableCell component='th' scope='row'>
                  <Typography variant='sideInfo'>
                    {INCOME_CHOICES[other_income?.income_type]}
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <Typography variant='sideInfo'>
                    {other_income?.amount}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BoxedInfo>
  );
};

export default OtherIncomesInformations;
