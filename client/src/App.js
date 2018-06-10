import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Tab } from 'semantic-ui-react';

import Mobs from './components/mobs/index.jsx';
import Npcs from './components/npcs/index.jsx'
import Chars from './components/chars/index.jsx'
import Items from './components/items/index.jsx'

export default () => {
    const panes = [
      { menuItem: 'Mobs', render: () => <Mobs /> },
      { menuItem: 'NPCs', render: () => <Npcs /> },
      { menuItem: 'Chars', render: () => <Chars /> },
      { menuItem: 'Items', render: () => <Items /> },
    ];

    return (
      <div className="App">
        <Tab style={{ margin: "5px 1px" }} panes={panes} />
      </div>
    );
}