
import { useEffect, useState, useRef } from "react";
import { Container, Grid, Stack } from "@mui/material";

import Layout from "./lib/components/Layout";
import { base } from 'lib/themes';

import { FOOTER_PROPS } from 'lib/constants';

import OrderBook from "widgets/OrderBook";
import PriceChart from "widgets/PriceChart";
import TopOfBook from "widgets/TopOfBook";
import PairSelector from "widgets/PairSelector";

const WS_CONFIG = {
  "type": "subscribe",
  "channels": [
    "ticker",
    "level2_batch",
  ]
};

function App() {
  const ws = useRef(null);
  const [product, setProduct] = useState('BTC-USD');
  const orders = [];
  const ticker = [];

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_COINBASE_PRODUCTION_WS_URL);

    socket.onopen = () => socket.send(JSON.stringify({
      ...WS_CONFIG,
      "product_ids": [product],
    }));

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      console.log(data);
    };

    ws.current = socket;

    return () => socket.close();
  }, [product]);

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  }

  return (
    <Layout
      theme={base}
      footerProps={FOOTER_PROPS}
    >
      <Container sx={{ height: '100%', mt: 5 }}>
        <Grid container justifyContent="space-between" spacing={3}>
          <Grid item xs={3}>
            <OrderBook product={product} {...orders}/>
          </Grid>

          <Grid item xs={7}>
            <PriceChart updates={ticker}/>
          </Grid>

          <Grid item xs={2}>
            <Stack spacing={2}>
              <PairSelector
                product={product}
                handleChange={handleProductChange}
              />
              <TopOfBook product={product} updates={ticker}/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
