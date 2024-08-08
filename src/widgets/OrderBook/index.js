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
          {asks && asks.map((row, index) => (
            <TableRow key={`ask-${row[0]}-${index}`}>
              <TableCell>{row[1]}</TableCell>
              <TableCell sx={{ color: "red" }}>
                {row[0]}
              </TableCell>
            </TableRow>
          ))}

          <TableRow key="spread">
            <TableCell>USD Spread</TableCell>
            <TableCell>XXX</TableCell>
          </TableRow>

          {bids && bids.map((row, index) => (
            <TableRow key={`bid-${row[0]}-${index}`} >
              <TableCell>{row[1]}</TableCell>
              <TableCell sx={{ color: 'green' }}>
                {row[0]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
