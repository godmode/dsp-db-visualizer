import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mob from './components/Mob';
import Key from './components/Key';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mobs: [] };
    this.calling = this.calling.bind(this);
  }

  componentDidMount() {
    this.calling();
  }

  async calling() {
    const response = await fetch('http://localhost:3010');
    const result = await response.json();
    this.setState({ mobs: result.mobs });
  }

  render() {
    const { mob } = this.state;
    console.log("MOB", mob);

    return (
      <div className="App">
        {this.state.mobs.map( mob => <Mob mob={mob} />)}
      </div>
    );
  }
}

export default App;
