import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    // App's state:
    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&&api_key=w6C17USHTI4T8taQIjVoDOnmaWGkxBG5`)
      .then(response => response.json())
      .then(result =>
        this.setState({
          gifs: result.data.slice(0, 10)
        }));
  }

  select = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFunction={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
