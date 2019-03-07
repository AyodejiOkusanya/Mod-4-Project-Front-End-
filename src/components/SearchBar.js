import React from 'react'

class SearchBar extends React.Component {
  handleSearch = event => {
    this.props.searchForVideo(event)
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


<div className="ui inverted segment">
      <form onChange={this.handleSearch} onSubmit={this.props.handleSearchSubmit}>
  <input type="text" placeholder="Search..."  />
  <button className="ui button" >Search</button>
  <div class='ui container'>
          <div class='ui large secondary inverted pointing menu'>
            <a class='toc item'>
              <i class='sidebar icon' />
            </a>
            <a class='active item'>Home</a>
            <a class='item'>Friends</a>
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
