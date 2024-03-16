import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/images/HNK logo 1.png";
import LabelLogo from "@/assets/images/05 1.png";
import BgMask from "@/assets/images/Mask group.png";
import KpopOp from "@/assets/images/K-POP-OP01 copy 1.png";
import Punk from "@/assets/images/PUNK copy 1.png";
import WaterMark from "@/assets/images/Heineken E logo.png";
import AgeGateTitle from "@/assets/images/ageGateTitle.png";
import "./style.css";

const AgeGate = () => {
  const [overEighteen, setOverEighteen] = useState(false);
  const navigation = useNavigate();
  const ageGate = () => {
    setOverEighteen(true);
    navigation("/register");
    console.log("clicked", overEighteen);
  };

  return (
    <div className="home-container">
      <div className="bg-[#009D1B] min-h-screen">
        <div className="flex justify-center">
          <img src={HNKLogo} alt="" />
        </div>
        <div className="flex justify-center  mx-auto">
          <img src={LabelLogo} alt="" className="absolute top-20" />
        </div>
        <div className="flex justify-center">
          <img
            src={AgeGateTitle}
            alt=""
            className="absolute top-[333px] text-center"
          />
        </div>
        <div className="flex justify-center">
          <div className="absolute top-[390px] flex flex-col gap-3">
            <Button
              onClick={ageGate}
              className="text-dark login-button h-[64px] w-[247px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
            >
              Yes, I am
            </Button>
            <Button
              onClick={() => setOverEighteen(false)}
              className="text-dark login-button h-[64px] w-[247px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
            >
              No, I am not
            </Button>
          </div>
        </div>
        <div>
          <div>
            <img src={BgMask} alt="" className="absolute bottom-0" />
          </div>
          <img src={KpopOp} alt="" className="absolute bottom-0" />
          <img src={Punk} alt="" className="absolute bottom-0 right-0" />
          <img src={WaterMark} alt="" className="absolute bottom-5 right-5" />
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
