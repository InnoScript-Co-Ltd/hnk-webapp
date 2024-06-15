/** 
Component Name              - Register Complete Invite Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import RotatingSlogan from "@/components/RotatingSlogan";
import earphone from "../../assets/images/randr/episode_1/earphone.png";
import mp3Player from "../../assets/images/randr/episode_1/mp3Player.png";
import AMRA_VIDEO from "@/assets/videos/amera_intro.mp4";
import AMRA_CONT from "@/assets/images/amera_content.svg";
// import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/svgs/bottle.svg";
import hand from "../../assets/images/hand.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { USER_STORY } from "@/models/story.model";
import { imageTitle } from "@/constants/config";
import "./style.css";
import { useEffect, useRef } from "react";

const Invite = () => {
    const navigate = useNavigate();

    const palyerRef: any = useRef(null);

    useEffect(() => {
        palyerRef.current.play();
    }, []);
    return (
        <div>
            <div className="invite-container max-w-[420px] mx-auto">
                <RotatingSlogan />

                <div className="invite-section-wrapper relative">

                    <div className="amera-header-wrapper">
                        <img
                            className="amera-bottle-img"
                            src={bottle}
                            alt={imageTitle}
                            title={imageTitle}
                        />
                        <img className="amera-content-img" src={AMRA_CONT} alt={imageTitle} title={imageTitle} />
                    </div>

                    <video 
                        controls
                        preload="auto" 
                        autoPlay={true} 
                        width={"280px"}
                        ref={palyerRef}
                        playsInline
                    >
                        <source src={AMRA_VIDEO} type="video/mp4" />
                    </video>

                    <img
                        className="absolute top-[300px] right-[0px]"
                        src={hand}
                        alt={imageTitle}
                        title={imageTitle}
                    />

                    <div className="share-back-btn">
                        <ButtonComponent
                            minWidth="300px"
                            arrow
                            label="Go to Event"
                            onBtnClick={() => navigate("/party-radar")}
                        />
                    </div>

                </div>

                <img className="invite-enjoy" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
                <div className="invite-footer">
                    <img className="earphone" src={earphone} alt={imageTitle} title={imageTitle} />
                    <img className="mp3Player" src={mp3Player} alt={imageTitle} title={imageTitle} />
                </div>
            </div>
        </div>
    );
};

export default Invite;