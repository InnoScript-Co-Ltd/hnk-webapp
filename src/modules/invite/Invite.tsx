import { useState } from "react";
import "./style.css";
import RotatingSlogan from "@/components/RotatingSlogan";
import earphone from "../../assets/images/randr/episode_1/earphone.png";
import mp3Player from "../../assets/images/randr/episode_1/mp3Player.png";
import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/images/HomePage/beerbottle.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import ShareModalComponent from "@/components/ShareModalComponent";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { USER_STORY } from '@/models/story.model';

const Invite = () => {
  const navigate = useNavigate();
  const [openShareModel, setOpenShareModel] = useState(false);

  const onShare = () => {
    setOpenShareModel(true);
  };

  const onGoBack = () => {
    navigate("/term-and-condition");
  };

  const modalCloseHandler = () => {
    setOpenShareModel(false);
  };

  const story: USER_STORY = useSelector((state: any) => {
    return state.story;
  });

  return (
    <>
      <div className="invite-container">
        <AnimatePresence>
          {openShareModel && (
            <ShareModalComponent closeModal={modalCloseHandler} />
          )}
        </AnimatePresence>
        <RotatingSlogan />
        <div style={{ marginTop: "50px" }} className="invite-section-wrapper">
          <img className="invite-beer-bottle" src={bottle} />
          <div className="invite-section">
            <p className="user-name">{story.name}</p>
            <p className="invite-content">
              <span className="invite-content-white-text">တမူထူးခြားတဲ့</span>
              <span className="invite-content-green-text">ဂီတအသစ်</span>
              <span className="invite-content-white-text">တွေကို</span>
              <span className="invite-content-white-text">ကိုယ်တိုင်</span>
              <span className="invite-content-eng-text">Live</span>
              <span className="invite-content-green-text">ခံစားနားဆင်ဖို့</span>
              <span className="invite-content-eng-text">HNK Outdoor TOV</span>
              <span className="invite-content-white-text">သို့</span>
              <span className="invite-content-white-text">ဖိတ်ခေါ်ပါတယ်</span>
            </p>
            <img
              className="feed-back-stars"
              src={feedbackStar}
              alt="feedbackStar"
            />
          </div>
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
