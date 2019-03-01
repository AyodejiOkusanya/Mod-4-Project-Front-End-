import React from 'react'
import VideoList from './VideoList'
import MainVideo from './MainVideo'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: 'movies'
  }
  componentDidMount () {
    this.getVideos(this.state.searchTerm)
  }

  getVideos = (searchTerm) => {
    const searchWords = searchTerm.split(' ').join('%20') + '&'
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=7193c06322efdacd20e49cb9cdebb301&language=en-US&query=${searchWords}page=1&include_adult=false`
    return fetch(TMDB)
      .then(resp => resp.json())
      .then(obj => this.setState({videos: obj.results}))
      // .then(videos => this.setState({ videos }))
  }

  selectAVideo = (event, newVideo) => {
    //   console.log('here')
    
    this.setState({ selectedVideo: newVideo })
  }

  getYouTubeVideos = () => {
    
  }

  searchForVideo = (event) => {
    //   console.log()
    this.setState({ searchTerm: event.target.value })
  }

  handleSearchSubmit = () => {
      console.log('here')
    const fetchSearchTerm = this.state.searchTerm.split(' ').join('+')
    this.getVideos(fetchSearchTerm)

  }

  render () {
    return (
      <div style={{backgroundColor:"black"}}>
        <SearchBar searchForVideo={this.searchForVideo} handleSearchSubmit={this.handleSearchSubmit}/>
        {this.state.selectedVideo ? (
          <MainVideo video={this.state.selectedVideo} />
        ) : null}
        <div>divide</div>
        <VideoList
          videos={this.state.videos}
          selectAVideo={this.selectAVideo}
        />
      </div>
    )
  }
}

export default App
