'use client'
import { useEffect,useState } from 'react';
import {getTokenFromResponse} from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function dasboard() {
    const [token, setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);
    }
  },[])

  return (
    <div>dasboard</div>
  )
}

export default dasboard