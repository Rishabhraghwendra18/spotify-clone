import React from "react";
import "./songrow.css";
import Image from "next/image";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <Image
        className="songRow_album"
        src={track.album.images[0].url}
        width={0}
        height={0}
        sizes="100%"
        style={{ width: "40px", height: "40px" }}
        alt="album"
      />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
