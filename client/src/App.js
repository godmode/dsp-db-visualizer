import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mob: null };
    this.calling = this.calling.bind(this);
  }

  componentDidMount() {
    this.calling();
  }

  async calling() {
    const response = await fetch('http://localhost:3010');
    const result = await response.json();
    this.setState({ mob: result.mobs[0] });
  }

  render() {
    const { mob } = this.state;
    console.log("MOB", mob);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {mob ? 
        <div>
          <div>{mob.mobname}</div>
          <div>{`!pos ${mob.pos_x} ${mob.pos_y} ${mob.pos_z} ${mob.mob_group.zoneid}`}</div>
        </div> : 
        <div>No Mob</div>}
      </div>
    );
  }
}

export default App;
