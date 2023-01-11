import React from 'react'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard';

const Videos = ({videos}) => {
  return (
    <div className='AllVideo'>
    {
      videos.map( (item, ind) => {
        return(
          <div key={ind} className="videocard">
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channel={item}/>}
          </div>
        )
      })
    }
    </div>
  )
}

export default Videos