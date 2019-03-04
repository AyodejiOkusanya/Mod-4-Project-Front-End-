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
  </form>
</div>
    )
  }
}

export default SearchBar
