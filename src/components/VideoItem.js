import React from 'react'

class VideoItem extends React.Component {
    render () {
        const video = this.props.video
        const baseImgURL = 'http://image.tmdb.org/t/p/w185'
    return (
    //   <div className='video-item item' onClick={(event, video) => this.props.selectAVideo(event,this.video)}>
    //     <img
    //       alt={this.video.snippet.title}
    //       className='ui image'
    //       src={
    //         this.video.snippet.thumbnails
    //           ? this.video.snippet.thumbnails.medium.url
    //           : null
    //       }
    //     />
    //     <div className='content'>
    //       <div className='header'>{this.video.snippet.title}</div>
    //     </div>
    //   </div>

      
        // <div className='column' onClick={(event, newVideo) => this.props.selectAVideo(event, video)}>
        //   <div className='ui segment'>
            <div className="four wide grid column">
            <img
            onClick={(event, newVideo) => this.props.selectAVideo(event, video)}
              alt={video.title}
              className='ui image'
              src={
                video.poster_path
                  ? baseImgURL + video.poster_path
                  : require('../generic-movie.jpg')
              }
            />
         </div>
        // </div>
      
    )
  }
}

export default VideoItem
