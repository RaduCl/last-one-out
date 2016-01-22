import React from 'react';
import { Component } from 'react';
import Title from './title.js'
import Head from './header.js'
import Board from './board.js'
import Controls from './controls.js'

export default class App extends Component {
  render() {
    return (
        <div>
            <Title />
            <Head />
            <Board />
            <Controls />
        </div>
    );
  }
}
