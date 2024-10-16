import { useEffect, useRef } from "react";

export const WS_CONFIG = {
  "type": "subscribe",
  "channels": [
    "ticker",
    "level2_batch",
  ]
};

export default function useCoinbaseWebSocket(product, dispatch) {
  const ws = useRef(null);

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_COINBASE_PRODUCTION_WS_URL);

    socket.onopen = () => socket.send(JSON.stringify({
      ...WS_CONFIG,
      'product_ids': [product],
    }));

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch({ type: data.type, payload: data });
    };

    ws.current = socket;

    return () => socket.close();
  }, [product, dispatch]);

  return ws;
}
