import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

import { LISTED_PRODUCTS } from 'lib/constants';

export default function PaisSelector({ product, handleChange }) {
  return (
    <FormControl>
      <InputLabel id="pair-selector-label">Token Pair</InputLabel>
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
