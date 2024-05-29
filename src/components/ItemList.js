import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../redux/store';

const ItemList = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
