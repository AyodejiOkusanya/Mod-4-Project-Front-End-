import React from 'react'
import VideoItem from './VideoItem'
import InfiniteScroll from 'react-infinite-scroller'

class VideoList extends React.Component {
  renderVideos = () => {
    // console.log(this.props.videos.items)

    if (this.props.videos) {
      return this.props.videos.map(video => {
        return (
          <VideoItem
            key={video.id}
            video={video}
            selectAVideo={this.props.selectAVideo}
          />
        )
      })
    } else console.log('no item ')
  }

  render () {
    console.log("this.props.gitVids", this.props.getVideosFromScroll);
    console.log("this.props.hasMore", this.props.hasMore);
    
    
    return (
      <div  style={{ height: '700px overflow:auto'  }}>
        <InfiniteScroll
          pageStart={0}
          // initialLoad = {true}
          loadMore={this.props.getVideosFromScroll}
          hasMore={this.props.hasMore}
          loader={
            <div className='loader' key={0}>
              Loading ...
            </div>
          }
          useWindow
          // getScrollParent={() => this.scrollParentRef}
        >
          <div
            className='ui grid'
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {this.renderVideos()}
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}
export default VideoList
