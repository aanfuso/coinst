import reducer from "./reducer";

describe('reducer', () => {
  it('should return the current state when action type is unknown', () => {
    const initialState = {
      asks: [[200, 5], [201, 3]],
      bids: [[199, 2], [198, 4]],
      spread: '1.00',
    };

    const action = {
      type: 'UNKNOWN_ACTION',
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it('should handle RESET action correctly', () => {
    const initialState = {
      asks: [[200, 5], [201, 3]],
      bids: [[199, 2], [198, 4]],
      spread: '1.00',
      orders: []
    };

    const action = {
      type: 'RESET',
      payload: {
        asks: [],
        bids: [],
        spread: '0.00',
        orders: []
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      asks: [],
      bids: [],
      spread: '0.00',
      orders: [],
    });
  });

  it('should handle l2update action correctly', () => {
    const initialState = {
      asks: [[200, 5], [201, 3]],
      bids: [[199, 2], [198, 4]],
      spread: '1.00',
    };

    const action = {
      type: 'l2update',
      payload: {
        changes: [
          ['sell', '202', '2'],
          ['buy', '197', '3']
        ],
        depth: 10,
      },
    };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      asks: [[200, 5], [201, 3], [202, 2]],
      bids: [[199, 2], [198, 4], [197, 3]],
      spread: '1.00',
    });
  });

  it('should handle ticker action correctly', () => {
    const initialState = {
      orders: [],
    };

    const action = {
      type: 'ticker',
      payload: {
        best_ask: '205.5',
        best_ask_size: '1',
        best_bid: '204.5',
        best_bid_size: '2',
        price: '205.0',
        sequence: '1001',
        time: '2024-08-08T12:34:56.000Z',
        volume_24h: '500',
      },
    };

    const newState = reducer(initialState, action);

    expect(newState.orders).toHaveLength(1);
    expect(newState.orders[0]).toEqual({
      best_ask_size: 1,
      best_ask: 205.5,
      best_bid_size: 2,
      best_bid: 204.5,
      price: 205.0,
      sequence: '1001',
      spread: '1.00',
      time: new Date('2024-08-08T12:34:56.000Z'),
      volume_24h: 500,
    });
  });

  it('should not exceed 100 orders in the state', () => {
    const initialState = {
      orders: Array(100).fill({
        best_ask_size: 1,
        best_ask: 200,
        best_bid_size: 1,
        best_bid: 199,
        price: 200,
        sequence: '999',
        spread: '1.00',
        time: new Date('2024-08-08T12:34:56.000Z'),
        volume_24h: 500,
      }),
    };

    const action = {
      type: 'ticker',
      payload: {
        best_ask: '205.5',
        best_ask_size: '1',
        best_bid: '204.5',
        best_bid_size: '2',
        price: '205.0',
        sequence: '1001',
        time: '2024-08-08T12:34:56.000Z',
        volume_24h: '500',
      },
    };

    const newState = reducer(initialState, action);

    expect(newState.orders).toHaveLength(100);
    expect(newState.orders[99]).toEqual({
      best_ask_size: 1,
      best_ask: 205.5,
      best_bid_size: 2,
      best_bid: 204.5,
      price: 205.0,
      sequence: '1001',
      spread: '1.00',
      time: new Date('2024-08-08T12:34:56.000Z'),
      volume_24h: 500,
    });
  });

  it('should correctly handle large number of orders in ticker action', () => {
    const initialState = {
      orders: Array(99).fill({
        best_ask_size: 1,
        best_ask: 200,
        best_bid_size: 1,
        best_bid: 199,
        price: 200,
        sequence: '999',
        spread: '1.00',
        time: new Date('2024-08-08T12:34:56.000Z'),
        volume_24h: 500,
      }),
    };

    const action = {
      type: 'ticker',
      payload: {
        best_ask: '205.5',
        best_ask_size: '1',
        best_bid: '204.5',
        best_bid_size: '2',
        price: '205.0',
        sequence: '1001',
        time: '2024-08-08T12:34:56.000Z',
        volume_24h: '500',
      },
    };

    const newState = reducer(initialState, action);

    expect(newState.orders).toHaveLength(100);
  });

  it('should sort asks from low to high in l2update action', () => {
    const initialState = {
      asks: [[205, 1], [202, 2]],
      bids: [[199, 2], [198, 3]],
      spread: '3.00',
    };

    const action = {
      type: 'l2update',
      payload: {
        changes: [
          ['sell', '204', '4'],
          ['sell', '200', '1'],
          ['sell', '203', '3']
        ],
        depth: 5,
      },
    };

    const newState = reducer(initialState, action);

    expect(newState.asks).toEqual([
      [200, 1],
      [202, 2],
      [203, 3],
      [204, 4],
      [205, 1]
    ]);
  });

  it('should sort bids from high to low in l2update action', () => {
    const initialState = {
      asks: [[205, 1], [202, 2]],
      bids: [[195, 1], [198, 3]],
      spread: '3.00',
    };

    const action = {
      type: 'l2update',
      payload: {
        changes: [
          ['buy', '197', '4'],
          ['buy', '200', '2'],
          ['buy', '199', '3']
        ],
        depth: 5,
      },
    };

    const newState = reducer(initialState, action);

    expect(newState.bids).toEqual([
      [200, 2],
      [199, 3],
      [198, 3],
      [197, 4],
      [195, 1]
    ]);
  });

});
