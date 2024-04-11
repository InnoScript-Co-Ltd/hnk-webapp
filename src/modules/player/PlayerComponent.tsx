/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import starIcon from "@/assets/images/star.png";
import "./playerStyle.css";
import { useCallback, useEffect, useRef, useState } from "react";
import player from "@/assets/images/turntable_detail.png";
import redGuitar from "@/assets/images/heart_dagger.png";
import greenGuitar from "@/assets/images/green_guitar.png";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import RotatingSlogan from "@/components/RotatingSlogan";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import { useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "@/components/LoadingComponent.tsx";

const PlayerComponent = () => {
  let height = screen.height;
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [singerSlider, setSingerSlider] = useState([]);
  const [currentSong, setCurrentSong]: any = useState(null);
  const intervalRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const singerSliderLoading = useCallback(async () => {
    const result: any = await getRequest(`${endpoints.singerSlider}`);

    if (result.status === 200) {
      setSingerSlider(result.data.data);
    }
  }, []);

  console.log(singerSlider)

  const nextSong = () => {
    singerSlider.filter((value: any, index: number) => {
      if(value.id === currentSong.id) {
        const nextMusic: any = singerSlider[index + 1];

        if(nextMusic) {
          navigate(`/play/${nextMusic.id}`)
        }
      }
    });
  }
  
  const previousSong = () => {
    singerSlider.filter((value: any, index: number) => {
      if(value.id === currentSong.id) {
        const previousMusic: any = singerSlider[index -1];

        if(previousMusic) {
          navigate(`/play/${previousMusic.id}`);
        }
      }
    });
  }

  useEffect(() => {
    singerSliderLoading();
  }, [singerSliderLoading]);

  useEffect(() => {
    if (params.id) {
      const getCurrentSong: any = singerSlider.filter((value: any) => value.id === params.id)[0];
      setCurrentSong(getCurrentSong);
      // setIsPlaying(true);
    }
  }, [params.id, singerSlider]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setRotateDeg(prev => prev + 10);
      }, 300)
    } else {
      window.clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  const onLoadStart = () => {
    setIsLoading(true);
    setIsPlaying(false);
  }


  const loadEndedHandler = () => {
    setIsLoading(false);
    // setIsPlaying(true);
  }


  return (
    <div className="playlist-container">
      {
        isLoading && (
          <LoadingComponent />
        )
      }
      <div className="playlist-content" style={{ height: height }}>
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
                {currentSong && (
                  <div className="img-wrapper">
                    <img
                      style={{
                        transform: `rotate(${rotateDeg}deg)`,
                        transition: 'transform 0.3s linear'
                      }}
                      src={`${endpoints.image}/${currentSong.singer.profile.image}`}
                      alt={currentSong.singer.profile.name}
                      className="singer-img"
                    />
                  </div>
                )}
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

          {currentSong && (
            <div className="singer-info-container">
              <p className="song-title">{currentSong.song.name}</p>
              <p className="artist-name">{currentSong.singer.name}</p>
            </div>
          )}
          <div className="audio-player-container">
            {currentSong && (
              <AudioPlayer
                autoPlay
                onClickNext={() => nextSong()}
                onClickPrevious={() => previousSong()}
                src={`${endpoints.audio}/${currentSong.song.file_path}`}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadStart={onLoadStart}
                onCanPlay={loadEndedHandler}
                volume={1}
                loop={false}
                showSkipControls={true}
                showJumpControls={false}
                style={{ backgroundColor: "transparent", boxShadow: 'none' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerComponent;
