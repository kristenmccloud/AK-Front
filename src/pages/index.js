import React, { Component } from 'react';
import Tile from '../components/tile'


class Index extends Component {
  render() {
    return (
      <main>
        <h1 id="banner" class="text-info">Take a look at our apartments!</h1>
        <article>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </article>
      </main>
    );
  }
}

export default Index;
