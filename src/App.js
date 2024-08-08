
import { useEffect, useState, useRef, useReducer } from "react";
import { Stack, Switch } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from '@mui/icons-material';
import throttle from "lodash.throttle"

import Layout from "./lib/components/Layout";
import { base, light } from 'lib/themes';
import { FOOTER_PROPS } from 'lib/constants';

import PairSelector from "widgets/PairSelector";
import Overview from "pages/Overview";
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
  const [theme, setTheme] = useState(base);
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

  const rightNavigation = (
    <Stack direction="row" spacing={1} alignItems="center">
      <LightModeIcon />
      <Switch
        checked={theme === base}
        onChange={() => setTheme(theme === base ? light : base)}
      />
      <DarkModeIcon />
    </Stack>
  );

  const leftNavigation = (
    <PairSelector
      product={product}
      handleChange={handleProductChange}
    />
  );

  return (
    <Layout
      theme={theme}
      footerProps={FOOTER_PROPS}
      navbarProps={{
        right: rightNavigation,
        left: leftNavigation,
      }}
    >
      <Overview {...state}/>
    </Layout>
  );
}

export default App;
