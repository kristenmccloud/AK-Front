import React, { Component } from 'react';
import './tile.css'



class Tile extends Component {

    render() {
      let { street_a, street_b, description, id } = this.props;
      console.log(description);
    return (
      <a href={`/apartments/${id}`}>
        <div id="tileView">
          <img src="https://png.pngtree.com/element_origin_min_pic/20/16/02/0156af774ba6864.jpg" height="220px" width="220px" />
          <h4 class="text-info">{`${street_a} at ${street_b}`}</h4>
          <p>{`${description}`}</p>
        </div>
      </a>
    );
  }
}

export default Tile;
