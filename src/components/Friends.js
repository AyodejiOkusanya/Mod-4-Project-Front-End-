import React from 'react'
import App from './App'
import VideoList from './VideoList'

class Friends extends React.Component {
  state = {
    user_id: 4,
    friends: [],
    movies: [],
    users: []
  }

  componentDidMount () {
    this.getAllUsers()
    return this.getFriendsMoviesFromDB().then(this.getMoviesFromAPI)
  }

  getFriendsMoviesFromDB = () => {
    const friendmovieulr = `http://localhost:3000/myfriendsmovies`
    return fetch(friendmovieulr, {
        method: 'POST',
        headers: {"Authorization": localStorage.getItem("token")}
    })
      .then(resp => resp.json())
      .then(friends => this.setState({ friends }))
  }

  getMoviesFromAPI = () => {
    this.state.friends.map(friend => {
      Object.values(friend)[0].map(movie => {
        fetch(
          `https://api.themoviedb.org/3/movie/${
            movie.movie_id
          }?api_key=7193c06322efdacd20e49cb9cdebb301&language=en-US`
        )
          .then(resp => resp.json())
          .then(movie =>
            this.setState({
              movies: [...this.state.movies, movie]
            })
          )
      })
    })
  }

  showMovieInfo = movieId => {
    const baseImgURL = 'http://image.tmdb.org/t/p/w185'
    const movieObj = this.state.movies.find(movie => {
      return movie.id === movieId
    })
    // console.log(movieObj.title)
    return movieObj ? (
      <img
        // onClick={(event, newVideo) => this.props.selectAVideo(event, video)}
        alt={movieObj.title}
        className='ui image'
        src={
          movieObj.poster_path
            ? baseImgURL + movieObj.poster_path
            : require('../generic-movie.jpg')
        }
      />
    ) : null
  }

  renderFriends = () => {
    console.log(this.state.friends)
    //   return this.state.friends.map((friend) => {console.log(friend)})
    return this.state.friends.map(friend => {
      return (
        //   console.log(Object.values(friend))
        <div>
          <h2 class='ui  header inverted'>
            {Object.keys(friend)[0]} is watching:{' '}
          </h2>

          <ul>
            {Object.values(friend)[0].map(movie => {
              return <li>{this.showMovieInfo(movie.movie_id)}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  getAllUsers = () => {
    fetch(`http://localhost:3000/users`)
      .then(resp => resp.json())
      .then(users => this.setState({ users }))
  }

  renderAllUsers = () => {
    const allUsers = this.state.users.filter(user => {
      return (
        user.id !== this.state.user_id &&
        !this.state.friends.find(friend => {
          return Object.keys(friend)[0] === user.username
        })
      )
    })
    return allUsers.map(user => {
      return (
        <li style={{ padding: '5px' }}>
          <button id={user.id} onClick={this.addFriend} className='ui button'>
            {user.username}
          </button>
        </li>
      )
    })
  }

  addFriend = event => {
    //   console.log(event.target.id)
    const friendId = event.target.id
    return fetch(`http://localhost:3000/friendships`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        friend_id: friendId
      })
    })
  }

  render () {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <h3 class='ui  header inverted'>Add friends:</h3>
        <ul>{this.renderAllUsers()}</ul>
        <h2 class='ui center inverted aligned icon header'>
          <i class='circular users icon' />
          Friends
        </h2>
        <h1>Friends</h1>
        <div>{this.renderFriends()}</div>
      </div>
    )
  }
}

export default Friends
