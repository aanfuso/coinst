import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function OrderBook({ product, asks, bids }) {

  if (!asks || !bids) {
    return (<div>Loading...</div>);
  }

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label={`${product} Order Book` }>
        <TableHead>
          <TableRow>
            <TableCell>Market Size</TableCell>
            <TableCell>Price (USD)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asks && asks.map((row) => (
            <TableRow key={row[0]}>
              <TableCell>{row[1]}</TableCell>
              <TableCell sx={{ color: "red", fontWeight: 'bold' }}>
                {row[0]}
              </TableCell>
            </TableRow>
          ))}

          <TableRow key="spread">
            <TableCell>USD Spread</TableCell>
            <TableCell>XXX</TableCell>
          </TableRow>

          {bids && bids.map((row) => (
            <TableRow key={row[0]} >
              <TableCell>{row[1]}</TableCell>
              <TableCell sx={{ color: 'green', fontWeight: 'bold' }}>
                {row[0]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
