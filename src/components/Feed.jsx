import React,{useEffect, useState} from 'react'

import Sidebar from './Sidebar';
import Videos from './Videos';
import './Feed.css';

import FetchAPI from './utils/FetchAPI'


const Feed = () => {

  const [selectedTopic, setselectedTopic] = useState('New');
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${selectedTopic}`)
    .then( (data) => {
      setvideos(data.items);
    }).catch( (err) => {
      console.log(err);
    })
    
  }, [selectedTopic]);
  

  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar 
        selectedTopic = {selectedTopic}
        setselectedTopic = {setselectedTopic}
        />
        <p>@CopyRight Youtube 3.0 </p>
      </div>
      <div className='interface'>
        <h2>{selectedTopic} <span>Videos</span></h2>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default Feed