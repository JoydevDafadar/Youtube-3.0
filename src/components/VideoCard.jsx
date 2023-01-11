import React from 'react'
import { Link } from 'react-router-dom'

import { demoThumbnailUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from './utils/constanats'

const VideoCard = ({video : { id : {videoId}, snippet }}) => {
  return (
    <>
    <Link to={videoId ? `/videos/${videoId}` : demoVideoUrl }>
        <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl } alt={snippet?.title} />
        <h4>{snippet?.title.slice(0, 60) || demoVideoTitle}</h4>
    </Link>
    <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
        <h2><i className="fa-solid fa-circle-user"></i>  {snippet?.channelTitle || demoChannelTitle}</h2>
    </Link>
    
    </>
  )
}

export default VideoCard