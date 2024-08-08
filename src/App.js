
import { useEffect, useState, useRef, useReducer } from "react";
import { Container, Grid, Stack } from "@mui/material";
import throttle from "lodash.throttle"

import Layout from "./lib/components/Layout";
import { base } from 'lib/themes';

import { FOOTER_PROPS } from 'lib/constants';

import OrderBook from "widgets/OrderBook";
import PriceChart from "widgets/PriceChart";
import TopOfBook from "widgets/TopOfBook";
import PairSelector from "widgets/PairSelector";

import reducer from "reducer";


const WS_CONFIG = {
  "type": "subscribe",
  "channels": [
    "ticker",
    "level2_batch",
  ]
};

const initialState = {
  asks: Array(10).fill([0, 0]),
  bids: Array(10).fill([0, 0]),
  spread: 0,
  orders: [],
};

function App() {
  const ws = useRef(null);
  const [product, setProduct] = useState('BTC-USD');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_COINBASE_PRODUCTION_WS_URL);

    socket.onopen = () => socket.send(JSON.stringify({
      ...WS_CONFIG,
      "product_ids": [product],
    }));

    socket.onmessage = throttle((event) => {
      const data = JSON.parse(event.data);
      const { type } = data;

      dispatch({ type, payload: data });

    }, 1000, { leading: true });

    ws.current = socket;

    return () => socket.close();
  }, [product]);

  const handleProductChange = (event) => {
    dispatch({ type: 'RESET', payload: initialState });

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
            <OrderBook
              product={product}
              asks={state.asks}
              bids={state.bids}
              spread={state.spread}
            />
          </Grid>

          <Grid item xs={7}>
            <PriceChart updates={state.orders}/>
          </Grid>

          <Grid item xs={2}>
            <Stack spacing={2}>
              <PairSelector
                product={product}
                handleChange={handleProductChange}
              />
              <TopOfBook product={product} updates={state.orders}/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default App;
