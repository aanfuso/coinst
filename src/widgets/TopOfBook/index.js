import { Divider, Paper, Stack, Typography } from "@mui/material";

import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function TopOfBook({ updates }) {
  const {
    best_ask_size,
    best_ask,
    best_bid_size,
    best_bid,
    price,
    spread,
    volume_24h,
  } = updates.length && updates[updates.length - 1];

  return (
    <Stack
      justifyContent="space-between"
      alignItems="stretch"
      spacing={2}
      divider={<Divider orientation="horizontal" />}
    >
      <Item>
        <Typography variant="body2">
          Price
        </Typography>
        <Typography variant="body1">
          {price || "N/A"}
        </Typography>
      </Item>

      <Item>
        <Typography variant="subtitle1">
          Best Bid
        </Typography>

        <Typography variant="body1">
          {best_bid || "N/A"}
        </Typography>
        <Typography variant="body2">
          Bid Price
        </Typography>

        <Typography variant="body1">
          {best_bid_size || "N/A"}
        </Typography>
        <Typography variant="body2">
          Bid Quantity
        </Typography>
      </Item>

      <Item>
        <Typography variant="subtitle1">
          Best Ask
        </Typography>

        <Typography variant="body1">
          {best_ask || "N/A"}
        </Typography>
        <Typography variant="body2">
          Ask Price
        </Typography>

        <Typography variant="body1">
          {best_ask_size || "N/A"}
        </Typography>
        <Typography variant="body2">
          Ask Quantity
        </Typography>
      </Item>

      <Item>
        <Typography variant="body2">
          Spread
        </Typography>
        <Typography variant="body1">
          {spread || "N/A"}
        </Typography>
      </Item>

      <Item>
        <Typography variant="body2">
          24h Volume
        </Typography>
        <Typography variant="body1">
          {volume_24h || "N/A"}
        </Typography>
      </Item>
    </Stack>
  );
}
