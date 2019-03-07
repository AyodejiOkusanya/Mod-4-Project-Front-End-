import React from 'react'

class MovieDetail extends React.Component {
  render () {
    const video = this.props.video
    const baseImgURL = 'http://image.tmdb.org/t/p/w1280'
    // debugger;
    return (
    //   <div
    //     style={{ backgroundImage: `url(${baseImgURL + video.backdrop_path})`, backgroundSize: 'cover' }}
    //     class='ui huge primary button'
    //     onClick={this.props.handleMovieDetailClick}
    //   >
    //     Movie Trailer <i class='right arrow icon' />
    //   </div>

      <div
        class='ui inverted vertical masthead center aligned segment'
        style={{
          backgroundImage: `url(${baseImgURL + video.backdrop_path})`,
          backgroundSize: 'cover', height: '500px'
        }}
        onClick={this.props.handleMovieDetailClick}
      >
        <div className='ui container'>
          <div className='ui large secondary inverted pointing menu'>
            <a className='toc item'>
              <i className='sidebar icon' />
            </a>
            <a className='active item'>Home</a>
            <a className='item'>Friends</a>
            <a className='item'>Just Movies</a>
            <a className='item'>Just Shows</a>
            
            <div class='right item'>
              <a class='ui inverted button'>Log in</a>
              <a class='ui inverted button'>Sign Up</a>
              <div
            class='ui primary button'
            onClick={this.props.handleMovieDetailClick}
          >
            Movie Trailer <i class='right arrow icon' />
          </div>
            </div>
          </div>
        </div>

        <div class='ui text container'>
          <div ui embed>
          </div>
         
         
        </div>
      </div>
    )
  }
}

export default MovieDetail
