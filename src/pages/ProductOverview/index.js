import { Container, Grid } from "@mui/material";

import Paper from "lib/components/styled/StyledPaper";

import OrderBook from "./widgets/OrderBook";
import PriceChart from "./widgets/PriceChart";
import TopOfBook from "./widgets/TopOfBook";

export default function ProductOverview({
  asks,
  bids,
  spread,
  orders,
  product,
}) {

  return (
    <Container sx={{ height: '100%', mt: 16 }}>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={12} md={8}>
          <TopOfBook product={product} updates={orders}/>
          <Paper>
            <PriceChart updates={orders}/>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <OrderBook
            product={product}
            asks={asks}
            bids={bids}
            spread={spread}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
