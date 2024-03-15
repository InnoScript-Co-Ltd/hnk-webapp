import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import redStar from "../../assets/images/HomePage/redstar.png";
import "./tncstyle.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Options {
  text: string;
  maxLength: number;
}

const ExpandableParagraph = ({ text, maxLength }: Options) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="p-2.5 text-[12px] font-bold text-white leading-5">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        {!isExpanded && text.length > maxLength && (
          <span
            style={{ color: "white", cursor: "pointer" }}
            onClick={toggleExpansion}
          >
            {" "}
            See more
          </span>
        )}
        {isExpanded && (
          <span
            style={{ color: "white", cursor: "pointer" }}
            onClick={toggleExpansion}
          >
            {" "}
            See less
          </span>
        )}
      </p>
    </div>
  );
};

const Termsandconditions = () => {
  const token = useSelector(selectToken);
  console.log(token);
  const navigate = useNavigate();
  const [isAccept, setIsAccept] = useState(false);

  const longText =
    "အခု ၂၀၂၃ ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့ ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့ Refresh Your Music, Refresh Your Nights 2023 ကို  (၁၁) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ်ထိ ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local Artists တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့ ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည် အခု ၂၀၂၃ ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့ ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့ Refresh Your Music, Refresh Your Nights 2023 ကို  (၁၁) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ်ထိ ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local Artists တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့ ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည် ဆန်းသစ်ကြမယ့်အ...";

  const handleCheckboxChange = () => {
    setIsAccept(!isAccept);
  };

  useEffect(() => {
    if (!token) {
      navigate("/register");
    }
  }, [token, navigate]);

  return (
    <>
      {token && (
        <div className="homee-container">
          <div className="content-sectiontnc">
            <div className="top-slogantnc">
              Refresh Your Music
              <img className="redStar" src={redStar} />
              Refresh Your Night
              <img className="redStar" src={redStar} />
              Refresh Your Music
              <img className="redStar" src={redStar} />
              Refresh Your Night
              <img className="redStar" src={redStar} />
            </div>
          </div>
          <div className="background-card absolute top-[150px] ">
            <span className="flex justify-center campaign-title border-y-black">
              Campaign အကြောင်း
            </span>
            <p className="p-2.5 text-[12px] font-bold text-white leading-5">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားနိုင်မယ့် Heineken®Refresh
              Your Music, Refresh Your Nights က မြန်မာနိုင်ငံကို
              ပြန်လည်ရောက်ရှိလာပါပြီ။ ၂၀၂၂ ခုနှစ်တုန်းက International EDM Artist
              THE CHAINSMOKERS ရဲ့ နာမည်ကျော်သီချင်းတွေကို Local Artists
              တွေဖြစ်ကြတဲ့ ဝေလ၊ SNARE၊ ထက်ယံ၊ အမရာဖုန်းတို့က ပြန်လည် Refresh
              လုပ်ပြီး ရန်ကုန်မြို့က Heineken®Premium Outlets တွေမှာ
              ဖျော်ဖြေခဲ့ကြပါတယ်။
            </p>
            <ExpandableParagraph text={longText} maxLength={500} />
            <div className="flex justify-center items-center p-3">
              <div className="flex items-center space-x-2 mt-3 justify-center w-[312px]">
                <Checkbox
                  id="terms"
                  checked={isAccept}
                  onClick={handleCheckboxChange}
                  className="check-button"
                />
                <label
                  htmlFor="terms"
                  className="text-[15px] text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 terms-label"
                >
                  I Accept these terms and conditions
                </label>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-3 py-5">
              <Button
                // onClick={() => navigate("/verifyage")}
                className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
              >
                Back
              </Button>
              <Button
                // onClick={handleRegister}
                disabled={isAccept == false}
                className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Termsandconditions;
