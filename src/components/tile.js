import React, { Component } from 'react';
import './tile.css'


class Tile extends Component {
    constructor(props){
      super(props)

      this.state = {
        street_a: "Main",
        street_b: "1st",
        city: "San Diego",
        postal_code: "92011",
        state: "CA",
        country: "USA",
        manager_name: "Fred Barnes",
        phone: "619-999-9999",
        hours: "4-6pm"
      }
    }

    render() {
      let { street_a, street_b } = this.state;
    return (
      <div id="tileView">
        <img src="https://png.pngtree.com/element_origin_min_pic/20/16/02/0156af774ba6864.jpg" height="200px" width="200px" />
        <h4 class="text-info">{`${street_a} at ${street_b}`}</h4>
        <hr />
        <p>Humblebrag incididunt consequat, art party beard celiac tumblr truffaut.</p>
      </div>
    );
  }
}

export default Tile;
