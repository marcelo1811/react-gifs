import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focused: false
    };
  }

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  }

  handleFocus = () => {
    this.setState({
      focused: true
    });
    console.log(this.state.focused);
  }

  handleBlur = () => {
    this.setState({
      focused: false
    });
    console.log(this.state.focused);
  }

  render () {
    return (
      <input type="text" className={`form-control form-search${this.state.focused ? " focus" : ""}`} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} />
    );
  }
}

export default SearchBar;
