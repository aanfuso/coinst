import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

export default function PairSelector({ options, product, handleChange }) {
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
        {options.map((product) => (
          <MenuItem key={product} value={product}>
            {product}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
