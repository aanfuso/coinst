import { useState, useReducer } from "react";
import { Stack, Switch } from "@mui/material";
import {
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

import Layout from "./lib/components/Layout";
import PairSelector from "lib/components/PairSelector";
import ProductOverview from "pages/ProductOverview";
import useCoinbaseWebSocket from "hooks/websocket";
import useLocalStorage from "hooks/localstorage";
import reducer from "reducer";

import { base, light } from "lib/themes";
import { FOOTER_PROPS, LISTED_PRODUCTS } from "constants";

const initialState = {
  asks: Array(10).fill([0, 0]),
  bids: Array(10).fill([0, 0]),
  spread: 0,
  orders: [],
};

function App() {
  const defaultProductId = LISTED_PRODUCTS[0].value;
  const [mode, setMode] = useLocalStorage('mode', 'base');
  const [product, setProduct] = useState(defaultProductId);
  const [state, dispatch] = useReducer(reducer, initialState);

  useCoinbaseWebSocket(product, dispatch);

  const handleProductChange = (event) => {
    dispatch({ type: 'RESET', payload: initialState });
    setProduct(event.target.value);
  };

  const toggleMode = () => setMode((prevMode) => (prevMode === 'base' ? 'light' : 'base'));

  const theme = mode === 'base' ? base : light;

  return (
    <Layout
      theme={theme}
      footerProps={FOOTER_PROPS}
      navbarProps={{
        right: (
          <Stack direction="row" spacing={1} alignItems="center">
            <LightModeIcon />
            <Switch checked={mode === 'base'} onChange={toggleMode} />
            <DarkModeIcon />
          </Stack>
        ),
        left: (
          <PairSelector
            options={LISTED_PRODUCTS}
            selected={product}
            handleChange={handleProductChange}
          />
        ),
      }}
    >
      <ProductOverview {...state} />
    </Layout>
  );
}

export default App;
