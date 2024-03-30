/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
// import menubarIcon from "@/assets/images/menu.png";
// import hnkRefreshMusicImage from "@/assets/images/hnk_refresh_music.png";
// import profileImage from "@/assets/images/profile.png";
import starIcon from "@/assets/images/star.png";
import { useSelector } from "react-redux";
import { USER_STORY } from "@/store/storySlice";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { Button } from "@/components/ui/button";

const Termsandconditions = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
    });

    const [payload, setPayload] = useState({
        is_campaign: false,
    });

    const navigate = useNavigate();

    const initialLoading = useCallback(() => {
        if (story) {
            setPayload(story);
        }
    }, [story]);

    const handleTcAccept = () => {
        navigate("/");
    };

    const adsItems = [
        { alt: "HNK Refresh Music", label: "Refresh Your Music" },
        { alt: "HNK Refresh Music", label: "Refresh Your Night" },
        { alt: "HNK Refresh Music", label: "Refresh Your Music" },
        { alt: "HNK Refresh Music", label: "Refresh Your Night" },
        { alt: "HNK Refresh Music", label: "Refresh Your Music" },
        { alt: "HNK Refresh Music", label: "Refresh Your Night" },
    ];

    useEffect(() => {
        initialLoading();
    }, [initialLoading]);

    return (
        <div className="bg-tandc bg-no-repeat bg-cover display flex flex-col justify-center items-center p-4">
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="ads-content">
                    {adsItems.map((item) => (
                        <div className="ads-item loop-text">
                            <img
                                src={starIcon}
                                alt={item.alt}
                                title="HNK Refresh Music"
                            />
                            <label> {item.label}</label>
                        </div>
                    ))}
                </div>

                <div className="w-full h-[700px] font-natosansmm text-white bg-[rgba(30,18,115,0.88)]/30 backdrop-blur-2xl border border-[#EABFFF] rounded-lg verflow-hidden overflow-y-scroll scrollbar-none flex flex-col gap-4 p-5">
                    <h1 className="text-[25px] font-bold text-center">
                        Campaign အကြောင်း
                    </h1>
                    <p className="text-sm leading-6">
                        ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားနိုင်မယ့်
                        Heineken®Refresh Your Music, Refresh Your Nights က
                        မြန်မာနိုင်ငံကို ပြန်လည်ရောက်ရှိလာပါပြီ။ ၂၀၂၂
                        ခုနှစ်တုန်းက International EDM Artist THE CHAINSMOKERS
                        ရဲ့ နာမည်ကျော်သီချင်းတွေကို Local Artists တွေဖြစ်ကြတဲ့
                        ဝေလ၊ SNARE၊ ထက်ယံ၊ အမရာဖုန်းတို့က ပြန်လည် Refresh
                        လုပ်ပြီး ရန်ကုန်မြို့က Heineken®Premium Outlets တွေမှာ
                        ဖျော်ဖြေခဲ့ကြပါတယ်။
                    </p>

                    <p className="text-sm leading-6">
                        အခု ၂၀၂၃ ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့
                        ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့ Refresh Your Music,
                        Refresh Your Nights 2023 ကို (၁၁) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃
                        ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ်ထိ
                        ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local Artists
                        တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့
                        ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို
                        ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည် အခု ၂၀၂၃
                        ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့ ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့
                        Refresh Your Music, Refresh Your Nights 2023 ကို (၁၁)
                        ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃
                        ခုနှစ်ထိ ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local
                        Artists တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့
                        ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို
                        ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည်
                        ဆန်းသစ်ကြမယ့်အ
                    </p>

                    <div className="flex justify-center gap-4">
                        <input
                            className="w-5 h-5 rounded-5 border-none outline-none shadow-[-1px_3px_0px_1px_rgba(0,0,0,1)] bg-white"
                            type="checkbox"
                            checked={payload.is_campaign}
                            onChange={(e) => {
                                const updatePayload = { ...payload };
                                updatePayload.is_campaign = e.target.checked;
                                setPayload(updatePayload);
                            }}
                        />
                        <label className="text-md md:text-[18px]">
                            I Accept these terms and conditions
                        </label>
                    </div>

                    <div className="flex justify-around px-4">
                        <Button
                            variant="hnk"
                            size="hnksm"
                            onClick={() => navigate("/")}
                            className="text-black"
                        >
                            Back
                        </Button>
                        <Button
                            variant="hnk"
                            size="hnksm"
                            className="text-black"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Termsandconditions;
