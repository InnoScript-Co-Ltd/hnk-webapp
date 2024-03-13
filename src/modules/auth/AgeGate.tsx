import ShadowButton from "@/components/global/ShadowButton";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/images/HNK logo 1.png";
import LabelLogo from "@/assets/images/05 1.png";
import BgMask from "@/assets/images/Mask group.png";
import KpopOp from "@/assets/images/K-POP-OP01 copy 1.png";
import Punk from "@/assets/images/PUNK copy 1.png";
import WaterMark from "@/assets/images/Heineken E logo.png";

const AgeGate = () => {
  const [overEighteen, setOverEighteen] = useState(false);
  const navigation = useNavigate();
  const ageGate = () => {
    setOverEighteen(true);
    navigation("/register");
    console.log("clicked", overEighteen);
  };

  return (
    <div className="bg-[#009D1B] min-h-screen">
      <div className="flex justify-center">
        <img src={HNKLogo} alt="" />
      </div>
      <div className="flex justify-center  mx-auto">
        <img src={LabelLogo} alt="" className="absolute top-20" />
      </div>
      <div className="flex justify-center">
        <span
          style={{
            color: "white",
            textShadow: "-2px 2px 0px rgba(0, 0, 0, 0.5)",
          }}
          className="absolute top-[333px] text-white border-dark md:text-3xl text-2xl font-normal text-center"
        >
          အသက် <span className="text-[#00FF70]">(၂၁)နှစ်ပြည့်ပြီး</span>{" "}
          ဖြစ်ပါသည်။
        </span>
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
          {/* <ShadowButton label="Yes, I am" />
          <ShadowButton label="No, I am not" /> */}
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
  );
};

export default AgeGate;
