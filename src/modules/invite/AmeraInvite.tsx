/** 
Component Name              - Register Complete Invite Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import RotatingSlogan from "@/components/RotatingSlogan";
import earphone from "../../assets/images/randr/episode_1/earphone.png";
import mp3Player from "../../assets/images/randr/episode_1/mp3Player.png";
import AMRA_PHOTO from "@/assets/images/amera_photo.png";
import AMRA_CONT from "@/assets/images/amera_content.svg";
// import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/svgs/bottle.svg";
import hand from "../../assets/images/hand.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import ButtonComponent from "@/components/ButtonComponent";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { USER_STORY } from "@/models/story.model";
import { imageTitle } from "@/constants/config";
import "./style.css";

const Invite = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="invite-container max-w-[420px] mx-auto">
                <RotatingSlogan />

                <div className="invite-section-wrapper relative">

                    <div className="amera-header-wrapper">
                        <img
                            className="amera-bottle-img"
                            src={bottle}
                            alt={imageTitle}
                            title={imageTitle}
                        />

                        <img className="amera-content-img" src={AMRA_CONT} alt={imageTitle} title={imageTitle} />
                    </div>

                    <img src={AMRA_PHOTO} alt={imageTitle} title={imageTitle} />
                    {/* <div className="invite-section">
                        <p className="user-name">Hello {story.name} </p> */}
                    {/* <p className=" text-lg text-white font-normal font-hanikenSerif text-shadow px-5">
                            invitation Card နဲ့ ပွဲကိုလာတဲ့ ပထမဆုံး အယောက် (၇၅ ယောက်)ကို Heineken Can - 2 ဘူး၊ Fanny Pack or Water Bottle ၁ခု မဲနှိက်ရွေးချယ်နိုင်မှာပါ။ 
                            ဒါ့အပြင် ပွဲထဲက Music Game Activities တွေမှာပါဝင်ပြီး Refresh Your Music ရဲ့ Premium Item ဖြစ်တဲ့ RYM Guitar၊ JBL Speaker တွေနဲ့အခြားသောအခွင့်အရေးတွေကိုပါ 
                            ရယူနိုင်မှာမို လာခဲ့ဖိုဖိတ်ခေါ်ပါတယ်နော်
                        </p> */}
                    {/* <p className=" text-lg text-white font-normal font-hanikenSerif text-shadow px-5">
                            ပြောင်းလဲဆန်းသစ်ထားတဲ့ ဂီတခံစားမှုအသစ်တွေကို ကိုယ်တိုင်ကိုယ်ကျ လာရောက်ခံစားပြီး <span className="text-[#01EC48] px-2"> Refresh </span> လုပ်ဖို့ ဖိတ်ခေါ်လိုက်ပါတယ်နော်…
                        </p>
                        <img
                            className="feed-back-stars"
                            src={feedbackStar}
                            alt={imageTitle}
                            title={imageTitle}
                        />
                    </div>  */}
                    <img
                        className="absolute top-[300px] right-[0px]"
                        src={hand}
                        alt={imageTitle}
                        title={imageTitle}
                    />
                    <div className="share-back-btn">
                        <ButtonComponent
                            minWidth="300px"
                            arrow
                            label="Go to Event"
                            onBtnClick={() => navigate("/party-radar")}
                        />
                    </div>
                </div>

                <img className="invite-enjoy" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
                <div className="invite-footer">
                    <img className="earphone" src={earphone} alt={imageTitle} title={imageTitle} />
                    <img className="mp3Player" src={mp3Player} alt={imageTitle} title={imageTitle} />
                </div>
            </div>
        </div>
    );
};

export default Invite;