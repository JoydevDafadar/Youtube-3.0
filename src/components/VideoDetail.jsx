import React , { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import FetchAPI from './utils/FetchAPI'
import Videos from './Videos'
import './VideoDetail.css'

const VideoDetail = () => {

  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState([]);

  useEffect( () => {

    FetchAPI( `videos?part=snippet,statistics&id=${id}` )
    .then( (data) => {
      setMainVideo( data.items[0] );
      console.log( data );
    })

    FetchAPI( `search?part=snippet&relatedToVideoId=${id}&type=video` )
    .then( (data) => {
      setVideos(data.items);
    } )

  }, [id])

  if( !mainVideo?.snippet ) return (
    <div className='video-content-page'>
      <h1>Loading ...</h1>
    </div>
  )
  const { snippet : { channelTitle, channelId , title }, statistics : {  likeCount, viewCount } } = mainVideo;

  return (
    <div className='video-content-page'>
      <div className='video-player'>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width="100%"
            height="90%" controls />
        <h3>{title}</h3>
        <div className='video-content'>
          <Link to={`/channel/${channelId}`} >
            <h3><i className="fa-solid fa-circle-user"></i>  {channelTitle}</h3>
          </Link>
          <div className='video-view'>
            <h6> {parseInt(viewCount).toLocaleString()} Views</h6>
            <h6> {parseInt(likeCount).toLocaleString()} Likes</h6>
          </div>
        </div>
      </div>
      <div className='video-list'>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default VideoDetail