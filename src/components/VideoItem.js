import React from 'react'

class VideoItem extends React.Component {
    render () {
        const video = this.props.video
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

      
        <div class='column' onClick={(event, newVideo) => this.props.selectAVideo(event, video)}>
          <div class='ui segment'>
            <img
              alt={video.snippet.title}
              className='ui image'
              src={
                video.snippet.thumbnails
                  ? video.snippet.thumbnails.medium.url
                  : console.log('no thumbbail')
              }
            />
          </div>
        </div>
      
    )
  }
}

export default VideoItem
