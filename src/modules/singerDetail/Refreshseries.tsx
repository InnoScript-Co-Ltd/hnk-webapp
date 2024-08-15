import HNKBLT from "@/assets/images/hnk_bottle.png";
import BTNPLAY from "@/assets/images/btn-play.png";
import RotatingSlogan from "@/components/RotatingSlogan";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import { imageTitle } from "@/constants/config";
import HNK_VIDEO_COVER from "@/assets/images/video-poster.png";
import "./index.css";


const Refreshseries = () => {
    const [loading, setLoading] = useState(false);
    const [singer, setSinger]: any = useState(null);
    const [singers, setSingers]: any = useState([]);
    const [videos, setVideos]: any = useState([]);
    const [currentVideo, setCurrentVideo]: any = useState(null);
    const [isPlay, setIsPlay] = useState(false);

    const params: any = useParams();
    const palyerRef: any = useRef(null);
    const navigate = useNavigate()

    const loadingSinger = async (value: string) => {
        navigate(`/refresh-series/${value}`)
        // setLoading(true);
        // setIsPlay(false);
        // const result: any = await getRequest(`${endpoints.singer}/${value}`);

        // if (result.status === 200) {
        //     setSinger(result.data.data);
        //     setVideos(result.data.data.videos);
        //     setCurrentVideo(result.data.data.videos[0]);
        //     setIsPlay(false);

        //     if(palyerRef.current) {
        //         palyerRef.current.load();
        //     }
        // }
        // setLoading(false);
    }

    const initLoading = useCallback(async () => {
        setLoading(true);

        const singerList: any = await getRequest(`${endpoints.singer}`);

        if (singerList.status === 200) {
            // const data: any = singerList.data.data.filter((value: any) => {
            //     if (value.id === params.id) {
            //         return value;
            //     }
            // });

            const result: any = await getRequest(`${endpoints.singer}/${params.id}`);

            if (result.status === 200) {
                setSinger(result.data.data);
                setVideos(result.data.data.videos);
                setCurrentVideo(result.data.data.videos[0]);
                setIsPlay(false);

                if(palyerRef.current) {
                    palyerRef.current.load();
                }
            }
            setSingers(singerList.data.data);
        }

        setLoading(false);
    }, [params.id]);


    useEffect(() => {
        initLoading();
    }, [initLoading]);


    return (
        <div className="singer-detail-wrapper">
            {loading && <LoadingComponent />}
            <RotatingSlogan />

            {singer && (
                <div className="singer-wrapper" style={{ backgroundImage: `url(${endpoints.image}/${singer.cover_photo})` }}>
                    <h3 className="singer-title">
                        <span> {singer.detail_title} </span>
                        <span> {singer.slider_description} </span>
                    </h3>

                    <img className="btl-image" src={HNKBLT} alt={imageTitle} title={imageTitle} />
                </div>
            )}


            <div className="video-wrapper">
                <div className="singer-list">
                    {singers && singers.map((value: any, index: number) => {
                        return (
                            <div className="singer-btn" key={`singer_id_${index}`} onClick={() => loadingSinger(value.id)}>
                                <span> {value.name} </span>
                            </div>
                        )
                    })}
                </div>

                <h3 className="video-title"> Refresh Series </h3>
                {currentVideo && (
                    <div className="video-player">
                        <div className="video-poster" style={{ display: isPlay ? "none" : "" }}>
                            <button
                                className="btn-play"
                                style={{ display: isPlay ? "none" : "" }}
                                onClick={() => {
                                    palyerRef.current.play();
                                    setIsPlay(true);
                                }}>
                                <img className="play-btn-icon" src={BTNPLAY} title={imageTitle} alt={imageTitle} />
                            </button>

                            <div className="video-poster-title">
                                <h4> {currentVideo && currentVideo.album_name} </h4>
                                <p> {currentVideo && currentVideo.title} </p>
                            </div>
                        </div>
                        <video className="video-play" controls={isPlay} ref={palyerRef}>
                            <source src={`${endpoints.image}/${currentVideo.video}`} />
                        </video>
                    </div>

                )}

                {videos && videos.map((value: any, index: number) => {
                    return (
                        <div
                            key={`video_id_${index}`}
                            className="video-item-wrapper"
                            onClick={() => {
                                palyerRef.current.pause();
                                setIsPlay(false);
                                palyerRef.current.currentTime = 0;
                                setCurrentVideo(value);
                                palyerRef.current.load();
                            }}>
                            <div className="video-thum">
                                <img src={HNK_VIDEO_COVER} alt={value.title} title={value.title} />
                            </div>

                            <div className="video-detail">
                                <h4> {value.title} </h4>
                                <p> {value.album_name}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{ background: "#000", position: "absolute", width: "100%", height: "25px", bottom: "0px" }}>

            </div>
        </div>
    )
}

export default Refreshseries;