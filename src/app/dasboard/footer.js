import React from "react";
import Image from "next/image";
import {
  BsFillSkipStartFill,
  BsFillSkipEndFill,
  BsShuffle,
  BsRepeat,
  BsFillVolumeDownFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiSolidPlaylist } from "react-icons/bi";
import { Grid, Slider } from "@mui/material";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
            <Image src={''} alt="" width={60} height={60} className="footer_albumLogo"/>
            <div className="footer_songInfo">
                <h4>Yeah!</h4>
                <p>Usher</p>
            </div>
      </div>
      <div className="footer_center">
        <BsShuffle className="footer_green" />
        <BsFillSkipStartFill className="footer_icon" />
        <AiOutlinePlayCircle className="footer_icon" />
        <BsFillSkipEndFill className="footer_icon" />
        <BsRepeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <BiSolidPlaylist className="footer_icon" />
          </Grid>
          <Grid item>
            <BsFillVolumeDownFill />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
