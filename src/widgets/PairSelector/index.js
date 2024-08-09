import {
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';


export default function PairSelector({ options, selected, handleChange }) {
  return (
    <FormControl size="small" variant="filled" hiddenLabel={true}>
      <Select
        id="pair-selector"
        label="Pair"
        onChange={handleChange}
        value={selected}
      >
        {options.map(({value, icon}) => (
          <MenuItem key={value} value={value}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{value}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
