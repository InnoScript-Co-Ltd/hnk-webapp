import starIcon from "@/assets/images/star.png";
import "./playerStyle.css";
import { useRef, useState } from "react";
import singer from "@/assets/images/singer.png";
import player from "@/assets/images/turntable_detail.png";
import redGuitar from "@/assets/images/heart_dagger.png";
import greenGuitar from "@/assets/images/green_guitar.png";

interface Song {
  title: string;
  artist: string;
  url: string;
  singerImage: string;
}

const PlayerComponent = () => {
  const [songs] = useState<Song[]>([
    {
      title: "Song 1",
      artist: "Artist 1",
      url: "song1.mp3",
      singerImage: singer,
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      url: "song2.mp3",
      singerImage: singer,
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      url: "song3.mp3",
      singerImage: singer,
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);

  const playSong = (index: number) => {
    setCurrentSongIndex(index);
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.load();
    audioElement.play();
  };

  const nextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.load();
    audioElement.play();
  };

  const previousSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
    const audioElement = document.getElementById("audio") as HTMLAudioElement;
    audioElement.load();
    audioElement.play();
  };

  return (
    <div className="playlist-container">
      <div className="playlist-content">
        <div className="content-wrapper">
          <div className="playlist-ads-content">
            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <div className="img-outer-wrapper">
              <div className="img-wrapper">
                <img
                  src={songs[currentSongIndex].singerImage}
                  alt={songs[currentSongIndex].artist}
                  className="singer-img"
                />
              </div>
            </div>
            <div className="turntable">
              <img src={player} alt="HNK Refresh Music" />
            </div>
          </div>
          <div className="guitars">
          <img src={greenGuitar} alt="HNK Refresh Music" className="green-guitar"/>
            <img src={redGuitar} alt="HNK Refresh Music" className="red-guitar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerComponent;
