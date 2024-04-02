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
import { USER_STORY } from '@/models/story.model';
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
          <img className=" absolute -top-[58px] left-[5px]" src={bottle} />
          <div className="invite-section">
            <p className="user-name">{story.name}</p>
            <p className="invite-content">
              <span className="invite-content-green-text">
              <span className="invite-content-white-text">wrlxl;jcm;wJh</span> *Dwtopf <span className="invite-content-white-text">awGudk <br /> udk,fwdkif</span> <span className="invite-content-eng-text">Live</span> cHpm;em; qifzdkY <br /> <span className="invite-content-eng-text">HNK Outdoor TOV</span> <br /> <span className="invite-content-white-text">odkY zdwfac:ygw,f...</span>
              </span>
            </p>
            <img
              className="feed-back-stars"
              src={feedbackStar}
              alt="feedbackStar"
            />
          </div>
          <img className=" absolute top-[100px] right-[5px]" src={hand} />
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
