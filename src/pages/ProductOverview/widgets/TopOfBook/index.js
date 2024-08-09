import { Grid, Paper, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 16,
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
    <Grid container spacing={2} pb={2}>
      <Grid item xs={6} sm={4}>
        <Item>
          <Typography variant="subtitle2">
            Price
          </Typography>
          <Typography variant="body1">
            {price || "N/A"}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={6} sm={4}>
        <Item>
          <Typography variant="subtitle2">
            Spread
          </Typography>
          <Typography variant="body1">
            {spread || "N/A"}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Item>
          <Typography variant="subtitle2">
            24h Volume
          </Typography>
          <Typography variant="body1">
            {volume_24h || "N/A"}
          </Typography>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Item>
          <Typography gutterBottom variant="subtitle2">
            Best Bid
          </Typography>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
          >
            <Stack direction="column">
              <Typography variant="body2" color="secondary">
                Bid Price
              </Typography>
              <Typography variant="body1">
                {best_bid || "N/A"}
              </Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="body2" color="secondary">
                Bid Quantity
              </Typography>
              <Typography variant="body1">
                {best_bid_size || "N/A"}
              </Typography>
            </Stack>
          </Stack>
        </Item>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Item>
          <Typography gutterBottom variant="subtitle2">
            Best Ask
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="stretch"
          >
            <Stack direction="column">
              <Typography variant="body2" color="secondary">
                Ask Price
              </Typography>
              <Typography variant="body1">
                {best_ask || "N/A"}
              </Typography>
            </Stack>

            <Stack direction="column">
              <Typography variant="body2" color="secondary">
                Ask Quantity
              </Typography>
              <Typography variant="body1">
                {best_ask_size || "N/A"}
              </Typography>
            </Stack>
          </Stack>
        </Item>
      </Grid>
    </Grid>
  );
}
