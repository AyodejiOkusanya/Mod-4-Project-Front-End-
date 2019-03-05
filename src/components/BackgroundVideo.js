import React from 'react'

class BackgroundVideo extends React.Component {
  render () {
    const videoSrc = `https://www.youtube.com/embed/0LHxvxdRnYc?autoplay=1&loop=1`

    const videoWrapperStyle = {
      position: 'relative',
      paddingBottom: '56.25%' /* 16:9 */,
      paddingTop: '25px',
      height: '0'
    }

    const vidoeIframeStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    }
    return (
      <div style={{ height: '50px' }}>
        <div style={{ ...videoWrapperStyle }}>
          <iframe
            style={{ ...vidoeIframeStyle }}
            width='100%'
            height='400px'
            src={videoSrc}
            frameBorder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
}

export default BackgroundVideo
