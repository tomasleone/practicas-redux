import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  items: [],
  tasks: [] // Nuevo estado para las tareas
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

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState.tasks,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    }
  }
});

export const { increment, decrement, reset } = counterSlice.actions;
export const { addItem, removeItem } = itemsSlice.actions;
export const { addTask, toggleTask, removeTask } = tasksSlice.actions;

const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    items: itemsSlice.reducer,
    tasks: tasksSlice.reducer // Nuevo reductor para las tareas
  }
});

export default store;

