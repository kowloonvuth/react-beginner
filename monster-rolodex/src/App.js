import React, { Component } from 'react';

import { CardList } from './Component/card-list/card-list.component';

import { SearchBox } from './Component/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then
    (response => response.json()).then(users => this.setState({ monsters: users}));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )


    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder= 'search monsters'
        handleChange={e => this.setState({searchField:e.target.value })}
      />
      <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
