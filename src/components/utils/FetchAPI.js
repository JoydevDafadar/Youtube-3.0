import axios from 'axios';

// REACT_APP_RAPID_API_KEY
// 47a1b9771amshaeeb25e35d6e467p122058jsnf39f6609aed1

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


const FetchAPI = async (url) => {
  // console.log( process.env.REACT_APP_RAPID_API_KEY );
  
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  // console.log( data );
  return data;

}

// const Key = process.env.REACT_APP_RAPID_API_KEY;
// const X_RapidAPI_Host = "youtube-v31.p.rapidapi.com";

// const FetchAPI = async ( url ) => {
//   const data = await axios.get( `${BASE_URL}/${url}&rapidapi-key=${Key}&X-RapidAPI-Host=${X_RapidAPI_Host}` );
  
//   return data;
// }

export default FetchAPI