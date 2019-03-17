import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  handleClick = (event) => {
    this.props.selectFunction(event.target.id);
  }

  render () {
    return (
      <div className="gif-list" onClick={this.handleClick}>
        {this.props.gifs.map(gif => {
          return <Gif id={gif.id} key={gif.id} />;
        })}
      </div>
    );
  }
}

export default GifList;
