import React from 'react'

class SearchBar extends React.Component {
  handleSearch = event => {
    this.props.searchForVideo(event)
  }

  render () {
    return (
      <div class='ui search'>
        <div class='ui icon input'>
          <input
            class='prompt'
            type='text'
            placeholder='Enter a movie'
            onChange={this.handleSearch}
            onClick={this.props.handleSearchSubmit}
          />
          <i class='search icon' />
        </div>
        <div class='results' />
      </div>
    )
  }
}

export default SearchBar
