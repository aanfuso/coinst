import { Container, Grid, Stack } from "@mui/material";

import Paper from "lib/components/Paper";

import OrderBook from "widgets/OrderBook";
import PriceChart from "widgets/PriceChart";
import TopOfBook from "widgets/TopOfBook";

export default function Overview({
  asks,
  bids,
  spread,
  orders,
  product,
}) {

  return (
    <Container sx={{ height: '100%', mt: 12 }}>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={3}>
          <Paper>
            <OrderBook
              product={product}
              asks={asks}
              bids={bids}
              spread={spread}
            />
          </Paper>
        </Grid>

        <Grid item xs={7}>
          <Paper>
            <PriceChart updates={orders}/>
          </Paper>
        </Grid>

        <Grid item xs={2}>
          <Stack spacing={2}>
            <Paper>
              <TopOfBook product={product} updates={orders}/>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
