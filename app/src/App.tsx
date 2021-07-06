import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Yamada Taro",
      img: "https://www.pakutaso.com/shared/img/thumb/cancanIMGL1209_TP_V.jpg",
      age: 25,
      note: "I works at a school"
    }
  ])

  return (
    <div className="App">
      <h1>List of People</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
