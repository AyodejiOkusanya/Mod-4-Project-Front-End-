import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  }

  handleOnChange = event => {
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSearch = event => {
    this.props.searchForVideo(event)
  }

  passSearchTerm = event => {
    this.props.handleSearchSubmit(event, this.state.searchTerm)
  }

  render () {
    return (
    // <div className='ui search'>
    //   <div className='ui icon input'>
    //     <input
    //       className='prompt'
    //       type='text'
    //       placeholder='Enter a movie'
    //       onChange={this.handleSearch}
    //       // onClick={this.props.handleSearchSubmit}
    //     />
    //     <button onSubmit={this.props.handleSearchSubmit}>Enter</button>
    //     <i className='search icon' />
    //   </div>
    //   <div className='results' />
    // </div>

      <div className='ui inverted segment'>
        <form onSubmit={this.passSearchTerm}>
          <input
            onChange={this.handleOnChange}
            value={this.state.searchTerm}
            type='text'
            placeholder='Search...'
            name='searchTerm'
          />
          <button className='ui button'>Search</button>
          <div class='ui container'>
            <div class='ui large secondary inverted pointing menu'>
              <a class='toc item'>
                <i class='sidebar icon' />
              </a>
              <a class='active item'>Home</a>
              <a class='item' onClick={this.props.toggleFriends}>Friends</a>
              <a class='item'>Just Movies</a>
              <a class='item'>Just Shows</a>

              <div class='right item'>
                <a class='ui inverted button'>Log Out</a>
                {/* <div
            class='ui primary button'
            onClick={this.props.handleMovieDetailClick}
          >
            Movie Trailer <i class='right arrow icon' />
          </div> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
