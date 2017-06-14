import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    };

  this.onInputSubmit = this.onInputSubmit.bind(this);
  }

  onInputSubmit(e) {
    e.preventDefault();
    this.props.onSearchTermChange(this.state.term);
  }


  render() {
    return(
      <div className="search-bar">
      <form onSubmit={ e => this.onInputSubmit(e)}>
        <input
          value={ this.state.term }
          onChange={ e => this.setState({ term: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

    );
  }
}

module.exports = SearchBar;

