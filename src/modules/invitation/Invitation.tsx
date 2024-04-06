import { useState } from "react";
// import "./style.css";
import RotatingSlogan from "@/components/RotatingSlogan";

import mp3 from "../../assets/images/randr/episode_1/mp3.png";
import feedbackStar from "../../assets/images/Invite/feedbackStar.png";
import bottle from "../../assets/svgs/bottle.svg";
import hand from "../../assets/images/hand.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";

import { useNavigate } from "react-router-dom";
import ShareModalComponent from "@/components/ShareModalComponent";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { USER_STORY } from "@/models/story.model";
// import { Header } from "@/components/Header";

const Invitation = () => {
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
            <div className="relative rounded-lg bg-[#00880F] max-w-[420px] mx-auto ">
                <AnimatePresence>
                    {openShareModel && (
                        <ShareModalComponent closeModal={modalCloseHandler} />
                    )}
                </AnimatePresence>
                {/* <Header backgroundColor="#000242" /> */}
                <RotatingSlogan />

                <div className="flex flex-col items-center justify-center relative gap-10 h-full py-10 ">
                    <img
                        className=" absolute -top-4 left-[5px] z-10"
                        src={bottle}
                    />
                    <img
                        className=" absolute top-[100px] right-[5px] z-10"
                        src={hand}
                    />
                    <div className="flex  flex-col items-center justify-center gap-6 max-w-[350px] bg-[#532B6F] border-2 border-black rounded-lg shadow-[-3px_3px_0px_1px_rgba(0,0,0,1)] p-5 transition hover:scale-[1.02]">
                        <p className=" text-center text-[#01EC48] font-hanikenSerif text-shadow text-3xl">
                            Hello {story.name} ,
                        </p>
                        <p className="text-center text-[25px] text-white font-normal leading-[50px] font-w14art text-shadow select-none ">
                            ပြောင်းလဲဆန်းသစ်ထားတဲ့ ဂီတခံစားမှုအသစ်တွေကို
                            ကိုယ်တိုင်ကိုယ်ကျ လာရောက်ခံစားပြီး Refresh လုပ်ဖို့
                            ဖိတ်ခေါ်လိုက်ပါတယ်နော်
                        </p>
                        <img
                            className="mx-auto"
                            src={feedbackStar}
                            alt="feedbackStar"
                        />
                    </div>

                    <div className="max-w-[350px] flex  flex-col items-center justify-center gap-2 z-30">
                        <p className=" text-md text-white font-normal font-hanikenSerif text-shadow-sm">
                            Myanmar Plaza က Levitate မှာ ကျင်းပသွားမ​​ယ့်
                            <span className="text-[#01EC48] px-2">
                                Heineken®Refresh Your Music, Refresh Your Nights
                            </span>
                            မှာ Mi Sandi၊ Ar-T၊ Jewels၊ Double J၊ Shine နဲ့
                            Amera Hponeတို့က Heineken နဲ့အတူ အသစ်လွင်ဆုံး
                            ဂီတသံစဉ်တွေ Live Performance တင်ဆက်သွားမှာဖြစ်ပါတယ်။
                        </p>

                        <p className=" text-md text-white font-normal font-hanikenSerif text-shadow-sm">
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
                    <img
                        className="z-20 absolute bottom-3 right-3 "
                        src={enjoyLogo}
                    />
                    <img
                        className="z-10 absolute bottom-3 w-full mx-auto"
                        src={mp3}
                    />
                </div>
            </div>
        </>
    );
};

export default Invitation;
