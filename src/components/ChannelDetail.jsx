import React ,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import FetchAPI from './utils/FetchAPI';
import './ChannelDetail.css';
import Videos from './Videos';



const ChannelDetail = () => {

  const [channelData, setchannelData] = useState({});
  const [videos, setvideos] = useState([]);

  const { id } = useParams();

  useEffect( () => {

    FetchAPI( `channels?part=snippet&id=${id}` )
    .then( (data) => {
      
      setchannelData(data.items[0]);
    })

    FetchAPI( `search?channelId=${id}&part=snippet` )
    .then( (data) => {
      setvideos(data.items);
    })

  }, [id])

  console.log(channelData);
  console.log(videos);

  return (
    <div className='channell'>
        <div className='background'>
          <div className='content'>
            <img src={channelData?.snippet?.thumbnails?.high?.url} alt={channelData?.snippet?.title} />
            <h2>{channelData?.snippet?.title}</h2>
            <h4>{channelData?.statistics?.subscriberCount} Subscriber</h4>
          </div>
          <div className='allvideo'>
            <Videos videos = {videos}/>
          </div>
        </div>
    </div>
  )
}

export default ChannelDetail