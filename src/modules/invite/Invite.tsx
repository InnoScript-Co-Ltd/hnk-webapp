/** 
Component Name              - Register Complete Invite Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { useState } from "react";
import RotatingSlogan from "@/components/RotatingSlogan";
import earphone from "../../assets/images/randr/episode_1/earphone.png";
import mp3Player from "../../assets/images/randr/episode_1/mp3Player.png";
import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/svgs/bottle.svg";
import hand from "../../assets/images/hand.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import ShareModalComponent from "@/components/ShareModalComponent";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { USER_STORY } from "@/models/story.model";
import { imageTitle } from "@/constants/config";
import "./style.css";

const Invite = () => {
    const navigate = useNavigate();
    const [openShareModel, setOpenShareModel] = useState(false);

    const onShare = () => {
        setOpenShareModel(true);
    };

    const modalCloseHandler = () => {
        setOpenShareModel(false);
    };

    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
    });

    return (
        <>
            <div className="invite-container max-w-[420px] mx-auto">
                <AnimatePresence>
                    {openShareModel && (
                        <ShareModalComponent closeModal={modalCloseHandler} />
                    )}
                </AnimatePresence>

                <RotatingSlogan />

                <div className="invite-section-wrapper relative">
                    <img
                        className=" absolute -top-[58px] left-[5px]"
                        src={bottle}
                        alt={imageTitle}
                        title={imageTitle}
                    />
                    <div className="invite-section">
                        <p className="user-name">Hello {story.name} </p>
                        <p className=" text-lg text-white font-normal font-hanikenSerif text-shadow px-5">
                            ပြောင်းလဲဆန်းသစ်ထားတဲ့ ဂီတခံစားမှုအသစ်တွေကို ကိုယ်တိုင်ကိုယ်ကျ လာရောက်ခံစားပြီး <span className="text-[#01EC48] px-2"> Refresh </span> လုပ်ဖို့ ဖိတ်ခေါ်လိုက်ပါတယ်နော်…
                        </p>
                        <img
                            className="feed-back-stars"
                            src={feedbackStar}
                            alt={imageTitle}
                            title={imageTitle}
                        />
                    </div>
                    <img
                        className=" absolute top-[100px] right-[5px]"
                        src={hand}
                        alt={imageTitle}
                        title={imageTitle}
                    />
                    <div className="share-back-btn">
                        <ButtonComponent
                            minWidth="200px"
                            label="Share"
                            onBtnClick={onShare}
                        />
                        <p className="or-text">OR</p>

                        <ButtonComponent
                            minWidth="300px"
                            arrow
                            label="Go to Campaign Info"
                            onBtnClick={() => navigate("/campign-info")}
                        />
                    </div>
                </div>

                <img className="invite-enjoy" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
                <div className="invite-footer">
                    <img className="earphone" src={earphone} alt={imageTitle} title={imageTitle} />
                    <img className="mp3Player" src={mp3Player} alt={imageTitle} title={imageTitle} />
                </div>
            </div>
        </>
    );
};

export default Invite;
