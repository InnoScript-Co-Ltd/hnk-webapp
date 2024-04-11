/** 
Component Name              - Register Complete Invitation Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import RotatingSlogan from "@/components/RotatingSlogan";
import earphone from "../../assets/images/randr/episode_1/earphone.png";
import mp3Player from "../../assets/images/randr/episode_1/mp3Player.png";
import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/svgs/bottle.svg";
import hand from "../../assets/images/hand.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import { useSelector } from "react-redux";
import { USER_STORY } from "@/models/story.model";
import { imageTitle } from "@/constants/config";
import "./style.css";

const Invitation = () => {

    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
    });

    return (
        <>
            <div className="invitation-container max-w-[420px] mx-auto">
                <RotatingSlogan />
                <div className="invitation-section-wrapper relative">
                    <img
                        className=" absolute -top-[58px] left-[5px]"
                        src={bottle}
                        alt={imageTitle}
                        title={imageTitle}
                    />
                    <div className="invitation-section">
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
                </div>

                <div className="invitation-detail flex  flex-col items-center justify-center gap-2 z-30">
                    <p className="text-md text-white font-normal font-hanikenSerif text-shadow-sm" style={{ marginBottom: "20px" }}>
                        Myanmar Plaza က Levitate မှာ ကျင်းပသွားမ​​ယ့်
                        <span className="text-[#01EC48] px-2">
                            Heineken®Refresh Your Music, Refresh Your Nights
                        </span>
                        မှာ Mi Sandi၊ Ar-T၊ Jewels၊ Double J၊ Shine နဲ့
                        Amera Hpone တို့က Heineken နဲ့အတူ အသစ်လွင်ဆုံး
                        ဂီတသံစဉ်တွေ Live Performance တင်ဆက်သွားမှာဖြစ်ပါတယ်။
                    </p>

                    <p className=" text-md text-white font-normal font-hanikenSerif text-shadow-sm" style={{ marginBottom: "20px" }}>
                        အခု Invitation နဲ့အတူ ပွဲကိုလာရောက်မယ်ဆိုရင် 1 free
                        <span className="text-[#01EC48] px-2">
                            Heineken®
                        </span>
                        , 10% discount@ food stall တွေရရှိမှာမို့ ၂၀.၄.၂၀၂၄
                        (စနေနေ့) ညနေ ၆ နာရီအတွက် ကြို plan
                        ထားလိုက်ပါတော့နော် မှာ Mi Sandi၊ Ar-T၊ Jewels၊
                        Double J၊ Shine နဲ့ Amera Hpone တို့က Heineken
                        နဲ့အတူ အသစ်လွင်ဆုံး ဂီတသံစဉ်တွေ Live Performance
                        တင်ဆက်သွားမှာဖြစ်ပါတယ်။
                    </p>
                </div>

                <img className="invitation-enjoy" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
                <div className="invitation-footer">
                    <img className="earphone" src={earphone} alt={imageTitle} title={imageTitle} />
                    <img className="mp3Player" src={mp3Player} alt={imageTitle} title={imageTitle} />
                </div>
            </div>
        </>
    );
};

export default Invitation;
