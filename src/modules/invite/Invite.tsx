import { useState } from "react";
import "./style.css";
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
// import { Header } from "@/components/Header";

const Invite = () => {
    const navigate = useNavigate();
    const [openShareModel, setOpenShareModel] = useState(false);

    const onShare = () => {
        setOpenShareModel(true);
    };

    const onGoBack = () => {
        navigate("/party-radar");
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
                {/* <Header backgroundColor="#000242" /> */}
                <RotatingSlogan />

                <div className="invite-section-wrapper relative">
                    <img
                        className=" absolute -top-[58px] left-[5px]"
                        src={bottle}
                    />
                    <div className="invite-section">
                        <p className="user-name">{story.name}</p>
                        <p className=" text-lg text-white font-normal font-hanikenSerif text-shadow px-5">
                            Myanmar Plaza က Levitate မှာ ကျင်းပသွားမ​​ယ့်
                            <span className="text-[#01EC48] px-2">
                                Heineken®Refresh Your Music, Refresh Your Nights
                            </span>
                            မှာ Mi Sandi၊ Ar-T၊ Jewels၊ Double J၊ Shine နဲ့
                            Amera Hponeတို့က Heineken နဲ့အတူ အသစ်လွင်ဆုံး
                            ဂီတသံစဉ်တွေ Live Performance တင်ဆက်သွားမှာဖြစ်ပါတယ်။
                        </p>
                        <img
                            className="feed-back-stars"
                            src={feedbackStar}
                            alt="feedbackStar"
                        />
                    </div>
                    <img
                        className=" absolute top-[100px] right-[5px]"
                        src={hand}
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
                            onBtnClick={onGoBack}
                        />
                    </div>
                </div>

                <img className="invite-enjoy" src={enjoyLogo} />
                <div className="invite-footer">
                    <img className="earphone" src={earphone} />
                    <img className="mp3Player" src={mp3Player} />
                </div>
            </div>
        </>
    );
};

export default Invite;
