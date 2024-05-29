import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  items: []
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState.count,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
    reset: state => 0
  }
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialState.items,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item, index) => index !== action.payload);
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export const { addItem, removeItem } = itemsSlice.actions;

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    items: itemsSlice.reducer
  }
});

export default store;
