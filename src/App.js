import React from 'react';
import './App.css';
import Counter from './components/Counter';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

function App() {
  const elemento1 = <h1>Hello JSX!</h1>;
  const elemento2 = (
    <div>
      {/* comentarios */}
      <h1>Mi Título</h1>
      <p>Este es un párrafo.</p>
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul>
    </div>
  );

  const elemento3 = (
    <div>
      <h1>Hello World</h1>
      <p>Let's render this to the DOM</p>
    </div>
  );

  return (
    <div>
      {elemento1}
      {elemento2}
      {elemento3}
      <Counter />
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;

