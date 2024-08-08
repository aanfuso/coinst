import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { LISTED_PRODUCTS } from 'constants';

export default function PairSelector({ product, handleChange }) {
  return (
    <FormControl size="small">
      <InputLabel id="pair-selector-label">Token Pairs</InputLabel>
      <Select
        labelId="pair-selector-label"
        id="pair-selector"
        value={product}
        label="Pair"
        onChange={handleChange}
      >
        {LISTED_PRODUCTS.map((product) => (
          <MenuItem key={product} value={product}>
            {product}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
