import React from 'react';
import List from './List';
import './App.css';

function App(props) {


  const lists = props.store.lists.map(item => <List key={item.id} header={item.header} cards={item.cardIds.map(id => props.store.allCards[id])}/>)

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
