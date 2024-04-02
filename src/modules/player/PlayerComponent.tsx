/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import starIcon from "@/assets/images/star.png";
import "./playerStyle.css";
import { useEffect, useState } from "react";
import singer from "@/assets/images/singer.png";
import player from "@/assets/images/turntable_detail.png";
import redGuitar from "@/assets/images/heart_dagger.png";
import greenGuitar from "@/assets/images/green_guitar.png";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import music from '@/assets/LEE HONGGI (이홍기) X YOO HWESEUNG (유회승) STILL LOVE YOU (사랑했었다) LYRICS (Han_Rom_Eng) COLOUR CODED.mp3'
import RotatingSlogan from "@/components/RotatingSlogan";
import { motion, useAnimation} from "framer-motion"

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
  let height = screen.height;

  const [currentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const control = useAnimation();

  // const playSong = (index: number) => {
  //   setCurrentSongIndex(index);
  //   const audioElement = document.getElementById("audio") as HTMLAudioElement;
  //   audioElement.load();
  //   audioElement.play();
  // };

  // const nextSong = () => {
  //   const newIndex = (currentSongIndex + 1) % songs.length;
  //   setCurrentSongIndex(newIndex);
  //   const audioElement = document.getElementById("audio") as HTMLAudioElement;
  //   audioElement.load();
  //   audioElement.play();
  // };

  // const previousSong = () => {
  //   const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  //   setCurrentSongIndex(newIndex);
  //   const audioElement = document.getElementById("audio") as HTMLAudioElement;
  //   audioElement.load();
  //   audioElement.play();
  // };

  useEffect(() => {
    if(isPlaying){
      control.start({
        rotate: 360,
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: 'linear'
        }
      })
    }else{
      control.stop()
    }
  },[isPlaying])

  return (
    <div className="playlist-container">
      <div className="playlist-content" style={{height: height}}>
        <RotatingSlogan />
        <div className="content-wrapper">
         <div className="h-[430px]">
         <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // marginTop: "60px",
              position: "relative",
              top: "60px",
              margin: "0 auto"
            }}
          >
            <div className="img-outer-wrapper">
              <div className="img-wrapper">
                <motion.img
                  animate={control}
                  src={songs[currentSongIndex].singerImage}
                  alt={songs[currentSongIndex].artist}
                  className="singer-img"
                />
              </div>
            </div>
            <div 
            style={{
              transform: isPlaying ? 'rotate(0deg)' : 'rotate(-30deg)',
              transformOrigin: '0px 0px',
              transition: 'transform 0.5s linear'
            }}
            className="turntable"
            >
              <img src={player} alt="HNK Refresh Music" />
            </div>
            <div className="guitars">
            <img src={greenGuitar} alt="HNK Refresh Music" className="green-guitar" />
            <img src={redGuitar} alt="HNK Refresh Music" className="red-guitar" />
          </div>
          </div>
         </div>
          
          <div className="singer-info-container">
            <p className="song-title">{songs[currentSongIndex].title}</p>
            <p className="artist-name">{songs[currentSongIndex].artist}</p>
          </div>
          <div className="audio-player-container">
            <AudioPlayer
              autoPlay
              src={music}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              volume={1}
              loop={false}
              showSkipControls
              showJumpControls={false}
              style={{ backgroundColor: "transparent", boxShadow: 'none'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerComponent;
