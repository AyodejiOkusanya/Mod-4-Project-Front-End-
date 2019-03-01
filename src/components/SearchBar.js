import React from 'react'

class SearchBar extends React.Component {
  handleSearch = event => {
    this.props.searchForVideo(event)
  }

  render () {
    return (
      <div className='ui search'>
        <div className='ui icon input'>
          <input
            className='prompt'
            type='text'
            placeholder='Enter a movie'
            onChange={this.handleSearch}
            onClick={this.props.handleSearchSubmit}
          />
          <i className='search icon' />
        </div>
        <div className='results' />
      </div>
    )
  }
}

export default SearchBar
