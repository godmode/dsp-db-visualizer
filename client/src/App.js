import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mob from './components/Mob';

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
        {mob ? <Mob mob={mob} /> : <div>No Mob</div>}
      </div>
    );
  }
}

export default App;
