import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBidTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.green.main,
}));

const StyledAskTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.red.main,
}));

export default function OrderBook({ product, asks, bids, spread }) {
  if (!asks || !bids) {
    return (<div>Loading...</div>);
  }

  return (
    <TableContainer sx={{ borderRadius: 4 }} >
      <Table size="small" aria-label={`${product} Order Book` }>
        <TableHead>
          <TableRow>
            <TableCell>Market Size</TableCell>
            <TableCell>Price (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asks && asks.map((row, index) => (
            <TableRow key={`ask-${row[0]}-${index}`}>
              <TableCell>{row[1]}</TableCell>
              <StyledAskTableCell>
                {row[0]}
              </StyledAskTableCell>
            </TableRow>
          ))}

          <TableRow key="spread">
            <TableCell>USD Spread</TableCell>
            <TableCell>{spread}</TableCell>
          </TableRow>

          {bids && bids.map((row, index) => (
            <TableRow
              key={`bid-${row[0]}-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row[1]}</TableCell>
              <StyledBidTableCell>
                {row[0]}
              </StyledBidTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
