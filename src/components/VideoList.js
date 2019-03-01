import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  renderVideos = () => {
    // console.log(this.props.videos.items)
    if (this.props.videos.items) {
      return this.props.videos.items.map(video => {
        return (
          
            <VideoItem video={video} selectAVideo={this.props.selectAVideo} />
        
        )
      })
    } else (console.log('no item '))
  }

  render () {
    return <div class='ui three column grid'>{this.renderVideos()}</div>
  }
}
export default VideoList
