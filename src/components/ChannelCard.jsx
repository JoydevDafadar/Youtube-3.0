import React from 'react'
import {Link} from 'react-router-dom'

const ChannelCard = ({channel : {id :{channelId}, snippet : { title , thumbnails}}}) => {
  // console.log( channelId, title, thumbnails )
  return (
    <>
    <Link to={channelId ? `/channel/${channelId}` : `/channel/123`}>
      <img className='channel' src={thumbnails.high.url} alt={title} />
      <h2>{title}</h2>
    </Link>
    </>
  )
}

export default ChannelCard