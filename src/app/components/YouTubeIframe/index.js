import React from 'react'

const YouTubeIframe = ({ width, height, embedId }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      title="Embedded youtube video"
    />
  )
}

export default YouTubeIframe
