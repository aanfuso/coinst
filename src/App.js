
import { useEffect, useState, useRef, useReducer } from "react";
import { Stack, Switch } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import throttle from "lodash.throttle"

import Layout from "./lib/components/Layout";
import { base, light } from "lib/themes";
import { FOOTER_PROPS, WS_CONFIG, LISTED_PRODUCTS } from "constants";

import PairSelector from "lib/components/PairSelector";
import ProductOverview from "pages/ProductOverview";
import useLocalStorage from "hooks/localstorage";
import reducer from "reducer";


const initialState = {
  asks: Array(10).fill([0, 0]),
  bids: Array(10).fill([0, 0]),
  spread: 0,
  orders: [],
};

function App() {
  const ws = useRef(null);
  const defaultProductId = LISTED_PRODUCTS[0].value;
  const [mode, setMode] = useLocalStorage('mode', 'base');
  const [product, setProduct] = useState(defaultProductId);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_COINBASE_PRODUCTION_WS_URL);

    socket.onopen = () => socket.send(JSON.stringify({
      ...WS_CONFIG,
      'product_ids': [product],
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
        checked={mode === 'base'}
        onChange={() => setMode(mode === 'base' ? 'light' : 'base')}
      />
      <DarkModeIcon />
    </Stack>
  );

  const theme = mode === 'base' ? base : light;

  const leftNavigation = (
    <PairSelector
      options={LISTED_PRODUCTS}
      selected={product}
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
      <ProductOverview {...state}/>
    </Layout>
  );
}

export default App;
