import React, { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchField from './components/search-field/search-field';
import './App.css';

class App extends Component {
  state = {
    monsters: [],
    searchFieldText: ''
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(monsters => this.setState({monsters}))
  }
  handleSearchFieldChange = (e) => {
    this.setState({searchFieldText: e.target.value})
  }

  render() {
    const {monsters, searchFieldText} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFieldText.toLowerCase()))
     return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchField placeholderText="Search Monsters" handleChange={this.handleSearchFieldChange}/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
