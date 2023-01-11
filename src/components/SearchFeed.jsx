import React , { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Videos from "./Videos";
import FetchAPI from './utils/FetchAPI'


const SearchFeed = () => {

  const {searchTerm} = useParams();

  const [videos, setvideos] = useState([]);

  useEffect(() => {
    FetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then( (data) => {
      setvideos(data.items);
    }).catch( (err) => {
      console.log(err);
    })
  }, [searchTerm])
  
  return (
    <div className='main'>
      <div className='interface'>
        <h2>Searched Result for  <span>{searchTerm} Videos</span></h2>
        <Videos videos={videos}/>
      </div>
    </div>
  )
}

export default SearchFeed