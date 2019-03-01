import React from 'react'
import VideoList from './VideoList'
import MainVideo from './MainVideo'
import SearchBar from './SearchBar'

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    searchTerm: 'marvel'
  }
  componentDidMount () {
    const searchTerm = 'movies'
    this.getVideos(searchTerm)
  }

  getVideos = (searchTerm) => {
    const YOUTUBE = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}+&key=AIzaSyCvd5ISDIyQ1if06rQ7NC1fvPuqi3zUhlY`
    return fetch(YOUTUBE)
      .then(resp => resp.json())
      .then(videos => this.setState({ videos }))
  }

  selectAVideo = (event, newVideo) => {
    //   console.log('here')
    this.setState({ selectedVideo: newVideo })
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
      <div>
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
