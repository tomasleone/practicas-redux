import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/store';

const AddItem = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (input.trim()) {
      dispatch(addItem(input));
      setInput('');
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
