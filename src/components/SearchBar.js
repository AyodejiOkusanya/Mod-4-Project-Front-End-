import React from 'react'

class SearchBar extends React.Component {

  state = {
    searchTerm: ''
  }

  handleOnChange = (event) => {
    console.log(event.target.name, event.target.value)
    this.setState({ [event.target.name]: event.target.value})
}

  handleSearch = event => {
    this.props.searchForVideo(event)
  }

  passSearchTerm = (event) => {
    this.props.handleSearchSubmit(event,this.state.searchTerm)
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
      <form onSubmit={this.passSearchTerm}>
  <input onChange={this.handleOnChange} value={this.state.searchTerm} type="text" placeholder="Search..."  name="searchTerm"/>
  <button className="ui button" >Search</button>
  </form>
</div>
    )
  }
}

export default SearchBar
