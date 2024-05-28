// src/components/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // Obtiene el estado del contador desde el store Redux
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // Funciones para despachar acciones
  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;

