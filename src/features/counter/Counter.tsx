import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../app/store';
import { decrement, increment, incrementByValue } from './counterSlice';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counterContainer">
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(incrementByValue(100))}>Increase by 100</button>
    </div>
  );
};
