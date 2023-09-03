'use client'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import {addUser,addToken,addPlaylist} from "@/store/userSlice";
import {getTokenFromResponse} from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import './body.css';

const spotify = new SpotifyWebApi();

function Dasboard() {
  const dispatch = useDispatch();
    const [token, setToken] = useState(null);

  useEffect(()=>{
    const hash = getTokenFromResponse();
    window.location.hash="";
    const _token = hash.access_token;
    if(_token){
      dispatch(addToken(_token));
      console.log("token: ",_token)
      setToken(_token)
      spotify.setAccessToken(_token);

      spotify.getMe().then(user=>{
        dispatch(addUser(user));
      })
      spotify.getUserPlaylists().then(playlists=>{
        dispatch(addPlaylist(playlists))
      })
    }
  },[])

  return (
    <div className='body'>
      jjj
    </div>
  )
}

export default Dasboard