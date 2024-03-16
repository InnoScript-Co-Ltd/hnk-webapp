/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/images/hnk_logo.png";
import LabelLogo from "@/assets/images/hnk_label_logo.png";
import BgMask from "@/assets/images/mask_group_bg.png";
import KpopOp from "@/assets/images/K_POP_OP01.png";
import Punk from "@/assets/images/PUNK.png";
import AgeGateTitle from "@/assets/images/ageGateTitle.png";
import { useDispatch, useSelector } from "react-redux";
import { USER_STORY, storyUpdate } from "@/store/storySlice";
import "./style.css";

const AgeGate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const story: USER_STORY = useSelector((state: any) => {
    return state.story;
  });

  const ageGate = (value: boolean) => {
    const updateStory: USER_STORY = {...story };
    updateStory.is_over_twentyone = value;
    dispatch(storyUpdate(updateStory));
    navigate("/register");
  };

  return (
    <div className="age-gate-wrapper">
      <img className="age-gate-hnk-logo" src={HNKLogo} alt="Heineken" title="Heineken" />
      <img src={LabelLogo} alt="Heineken Refresh Your Music" title="Heineken Refresh Your Music" className="age-gate-refresh-music-logo" />
      <img src={AgeGateTitle} alt="Heineken Refresh Your Music" title="Heineken Refresh Your Music" />
      <Button
        onClick={() => ageGate(true)}
        className="age-gate-btn"
      >
        Yes, I am
      </Button>

      <Button
        onClick={() => ageGate(false)}
        className="age-gate-btn"
      >
        No, I am not
      </Button>

      <div className="footer-background">
        <img src={BgMask} alt="Heineken Refresh Your Music" title="Heineken Refresh Your Music" />
        <img src={KpopOp} alt="Heineken Refresh Your Music" title="Heineken Refresh Your Music" className="age-gate-left-vector" />
        <img src={Punk} alt="Heineken Refresh Your Music" title="Heineken Refresh Your Music" className="age-gate-right-vector" />
      </div>
    </div>
  );
};

export default AgeGate;
