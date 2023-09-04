"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  addToken,
  addPlaylist,
  addDiscoverWeekly,
} from "@/store/userSlice";
import { AiFillPlayCircle, AiFillHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { getTokenFromResponse } from "../spotify";
import SongRow from "./songrow";
import SpotifyWebApi from "spotify-web-api-js";
import Header from "./header";
import "./body.css";

const spotify = new SpotifyWebApi();

function Dasboard() {
  const dispatch = useDispatch();
  const discoverWeekly = useSelector((state) => state.user?.discoverWeekly);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch(addToken(_token));
      console.log("token: ", _token);
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch(addUser(user));
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch(addPlaylist(playlists));
      });
      spotify.getPlaylist("37i9dQZEVXcNww3Ltx4qz8").then((discoverWeekly) => {
        dispatch(addDiscoverWeekly(discoverWeekly));
      });
    }
  }, []);

  return (
    <div className="body">
      <Header />
      <div className="body_info">
        <Image
          src={discoverWeekly?.images[0]?.url}
          width={0}
          height={0}
          sizes="100%"
          style={{ width: "30%", height: "auto" }}
          alt=""
        />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <AiFillPlayCircle className="body_icon_playbutton" />
          <AiFillHeart className="body_icon_likebutton" />
          <FiMoreHorizontal className="body_icon_morebutton" />
        </div>
        {discoverWeekly?.tracks.items.map((item,index)=>(
          <SongRow track={item.track} key={index}></SongRow>
        ))}
      </div>
    </div>
  );
}

export default Dasboard;
