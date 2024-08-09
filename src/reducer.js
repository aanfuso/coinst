const normalizeOrder = (pair) => {
  return pair.map(parseFloat);
}

const parseChanges = (changes, side) => {
  return changes
    .filter(([type]) => type === side)
    .map(pair => pair.slice(1))
    .map(normalizeOrder)
    .filter(([, size]) => size > 0);
}

export default function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'l2update':
      const { changes, depth = 10 } = payload;

      const asksUpdates = parseChanges(changes, 'sell');
      const bidsUpdates = parseChanges(changes, 'buy');

      const asks = [...state.asks, ...asksUpdates].sort((a, b) => a[0] - b[0]);
      const bids = [...state.bids, ...bidsUpdates].sort((a, b) => b[0] - a[0]);

      return {
        ...state,
        spread: (asks[0][0] - bids[0][0]).toFixed(2),
        asks: asks.slice(-depth),
        bids: bids.slice(0, depth),
      };
    case 'ticker':
      const best_ask = parseFloat(payload.best_ask);
      const best_bid = parseFloat(payload.best_bid);

      return {
        ...state,
        orders: [
          ...state.orders.slice(-99),
          {
            best_ask_size: parseFloat(payload.best_ask_size),
            best_ask,
            best_bid_size: parseFloat(payload.best_bid_size),
            best_bid,
            price: parseFloat(payload.price),
            sequence: payload.sequence,
            spread: (best_ask - best_bid).toFixed(2),
            time: new Date(payload.time),
            volume_24h: parseFloat(payload.volume_24h),
          },
        ]
      }

    case 'RESET':
      return action.payload;
    default:
      return state;
  }
}
