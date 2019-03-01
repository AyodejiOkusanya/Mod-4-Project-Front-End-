import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  renderVideos = () => {
    // console.log(this.props.videos.items)
    if (this.props.videos) {
      return this.props.videos.map(video => {
        return (
          
            <VideoItem video={video} selectAVideo={this.props.selectAVideo} />
        
        )
      })
    } else (console.log('no item '))
  }

  render () {
    return <div className='ui three column grid'>{this.renderVideos()}</div>
  }
}
export default VideoList
