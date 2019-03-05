import React from 'react'
import VideoList from './VideoList'
import MainVideo from './MainVideo'
import SearchBar from './SearchBar'
import MovieDetail from './MovieDetail'


import './App.css'

class App extends React.Component {
  
  state = {
    videos: [],
    selectedYouTubeVideo: null,
    currentTMDBVid: { backdrop_path: '/d1hQaeKeAW3FBc3v6tIP5utleU0.jpg' },
    searchTerm: 'marvel',
    showingMovieDetail: true,
    results: [],
    hasMore: true
  }
  componentDidMount () {
    this.getVideos(this.state.searchTerm)

    this.setState({selectedYouTubeVideo: {id: {videoId: "0LHxvxdRnYc"}}})
  }

  getVideos = searchTerm => {
    this.setState({ searchTerm })
    const searchWords = searchTerm.split(' ').join('%20') + '&'
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=7193c06322efdacd20e49cb9cdebb301&language=en-US&query=${searchWords}page=1&include_adult=false`
    return fetch(TMDB)
      .then(resp => resp.json())
      .then(obj =>
        this.setState({
          videos: obj.results,
          hasMore: obj.page <= obj.total_pages
        })
      )
    // .then(videos => this.setState({ videos }))
  }

  getVideosFromScroll = pageNumber => {
    const searchWords = this.state.searchTerm.split(' ').join('%20') + '&'
    const TMDB = `https://api.themoviedb.org/3/search/movie?api_key=7193c06322efdacd20e49cb9cdebb301&language=en-US&query=${searchWords}page=${pageNumber}&include_adult=false`
    return fetch(TMDB)
      .then(resp => resp.json())
      .then(obj => {
        this.setState({
          videos: [...this.state.videos, ...obj.results],
          hasMore: obj.page <= obj.total_pages
        })
      })
  }

  selectAVideo = (event, newVideo) => {
    //   console.log('here')
    this.setState({ currentTMDBVid: newVideo })
    this.getYouTubeVideos(newVideo.title)

    document.querySelector('#root').scrollTop = 10
    console.log(document.querySelector('#root').scroll)
    window.scrollTo(0, 0)
  }

  getYouTubeVideos = searchTerm => {
    console.log('clicked')
    searchTerm = (searchTerm + ' trailer').split(' ').join('+')
    const YOUTUBE = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}+&key=AIzaSyCvd5ISDIyQ1if06rQ7NC1fvPuqi3zUhlY`
    return (
      fetch(YOUTUBE)
        .then(resp => resp.json())
        // .then(console.log)
        .then(obj => this.setState({ selectedYouTubeVideo: obj.items[0] }))
    )
  }

  searchForVideo = event => {
    //   console.log()
    this.setState({ searchTerm: event.target.value })
    // this.handleMovieDetailClick()
  }

  handleMovieDetailClick = () => {
    this.setState({ showingMovieDetail: !this.state.showingMovieDetail })
  }

  handleSearchSubmit = event => {
    console.log('here')
    event.preventDefault()
    const fetchSearchTerm = this.state.searchTerm.split(' ').join('+')
    this.getVideos(fetchSearchTerm)
  }

  showMovieDetailOrVideo = () => {
    if (this.state.showingMovieDetail) {
      return (
        <MovieDetail
          handleMovieDetailClick={this.handleMovieDetailClick}
          video={this.state.currentTMDBVid}
        />
      )
    } else {
      return (
        <MainVideo
          video={this.state.selectedYouTubeVideo}
          handleMovieDetailClick={this.handleMovieDetailClick}
        />
      )
    }
  }

  render () {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <SearchBar
          searchForVideo={this.searchForVideo}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        { this.showMovieDetailOrVideo() }
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <VideoList
          videos={this.state.videos}
          selectAVideo={this.selectAVideo}
          getVideosFromScroll={this.getVideosFromScroll}
          hasMore={this.state.hasMore}
        />
       </div>
      // <SignInPage /> 

     
    )
  }
}

export default App
