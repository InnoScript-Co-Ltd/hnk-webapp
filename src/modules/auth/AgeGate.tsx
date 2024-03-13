import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <img src="/src/assets/HNK logo 1.png" alt="" />
      </div>
      <div className="flex justify-center  mx-auto">
        <img src="/src/assets/05 1.png" alt="" className="absolute top-20" />
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
            className="w-[247px] h-[64px] bg-white text-dark rounded-full text-xl active:bg-transparent"
            style={{ boxShadow: "-2px 6px 0px 0px rgba(0, 0, 0, 1)" }}
          >
            Yes, I am
          </Button>
          <Button
            onClick={() => setOverEighteen(false)}
            className="w-[247px] h-[64px] bg-white text-dark rounded-full shadow-lg text-xl"
            style={{ boxShadow: "-2px 6px 0px 0px rgba(0, 0, 0, 1)" }}
          >
            No, I am not
          </Button>
        </div>
      </div>
      <div>
        <div>
          <img
            src="/src/assets/Mask group.png"
            alt=""
            className="absolute bottom-0"
          />
        </div>
        <img
          src="/src/assets/K-POP-OP01 copy 1.png"
          alt=""
          className="absolute bottom-0"
        />
        <img
          src="/src/assets/PUNK copy 1.png"
          alt=""
          className="absolute bottom-0 right-0"
        />
        <img
          src="/src/assets/Heineken E logo 1.png"
          alt=""
          className="absolute bottom-5 right-5"
        />
      </div>
    </div>
  );
};

export default AgeGate;
