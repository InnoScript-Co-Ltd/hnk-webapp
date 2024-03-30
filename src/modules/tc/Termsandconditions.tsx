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

const Termsandconditions = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
    });

    const [payload, setPayload] = useState({
        is_campaign: false
    });

    const navigate = useNavigate();

    const initialLoading = useCallback(() => {
        if(story) {
            setPayload(story);
        }
    },[story]);

    const handleTcAccept = () => {
        navigate('/');
    }

    useEffect(() => {
        initialLoading();
    },[initialLoading]);

    return (
        <div className="tnc-container">
            <div className="tnc-content">

                <div className="ads-content">
                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>

                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>

                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>

                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>

                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>

                    <div className="ads-item loop-text">
                        <img src={starIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />
                        <label> Refresh Your Music </label>
                    </div>
                </div>

                <div className="tnc-card">
                    <h1 className="tnc-card-title"> Campaign အကြောင်း </h1>
                    <p className="tnc-card-content">
                        ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားနိုင်မယ့် Heineken®Refresh
                        Your Music, Refresh Your Nights က မြန်မာနိုင်ငံကို
                        ပြန်လည်ရောက်ရှိလာပါပြီ။ ၂၀၂၂ ခုနှစ်တုန်းက International EDM Artist
                        THE CHAINSMOKERS ရဲ့ နာမည်ကျော်သီချင်းတွေကို Local Artists
                        တွေဖြစ်ကြတဲ့ ဝေလ၊ SNARE၊ ထက်ယံ၊ အမရာဖုန်းတို့က ပြန်လည် Refresh
                        လုပ်ပြီး ရန်ကုန်မြို့က Heineken®Premium Outlets တွေမှာ
                        ဖျော်ဖြေခဲ့ကြပါတယ်။
                    </p>

                    <p className="tnc-card-content">
                        အခု ၂၀၂၃ ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့ ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့ Refresh Your Music, Refresh Your Nights 2023 ကို (၁၁) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ်ထိ ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local Artists တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့ ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည် အခု ၂၀၂၃ ခုနှစ်မှာလည်း ဆန်းသစ်တဲ့ ဂီတအရသာတွေနဲ့စီးမျောခံစားဖို့ Refresh Your Music, Refresh Your Nights 2023 ကို (၁၁) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ် မှ (၁၉) ရက် နိုဝင်ဘာလ၊ ၂၀၂၃ ခုနှစ်ထိ ကျင်းပသွားမှာဖြစ်ပါတယ်။ နိုင်ငံကျော် Local Artists တွေဖြစ်တဲ့ ဝေလ၊ လွှမ်းပိုင်၊ ထက်ယံ နဲ့ ပန်းရောင်ခြယ်တို့က ဂီတသံစဉ်တွေကို ကိုယ့်အကြိုက်သူ့အကြိုက် ပြောင်းလဲပြီး ပြန်လည် ဆန်းသစ်ကြမယ့်အ
                    </p>

                    <div className="tnc-checkbox-group">
                        <input
                            className="tnc-input-checkbox"
                            type="checkbox"
                            checked={payload.is_campaign}
                            onChange={(e) => {
                                const updatePayload = { ...payload }
                                updatePayload.is_campaign = e.target.checked;
                                setPayload(updatePayload);
                            }}
                        />
                        <label> I Accept these terms and conditions </label>
                    </div>

                    <div className="hnk-btn-group">
                        <button className="hnk-btn" style={{ width: "100px" }} onClick={() => navigate("/")}> Back </button>
                        <button disabled={!payload.is_campaign} className="hnk-btn" style={{ width: "100px" }} onClick={handleTcAccept}> Next </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Termsandconditions;