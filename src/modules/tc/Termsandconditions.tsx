/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RotatingSlogan from "@/components/RotatingSlogan";
import "./style.css";
// import { Header } from "@/components/Header";

const Termsandconditions = () => {
    const [payload, setPayload] = useState({
        is_campaign: false,
    });

    const navigate = useNavigate();

    const handleTcAccept = () => {
        navigate("/randr/episode-1");
    };

    return (
        <div className="bg-tandc bg-no-repeat bg-cover display flex flex-col justify-center items-center p-1 max-w-[420px] mx-auto relative">
            {/* <Header /> */}
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <RotatingSlogan />
                <div className="w-full h-full font-natosansmm text-white bg-[rgba(30,18,115,0.88)]/30 backdrop-blur-2xl border border-[#EABFFF] rounded-lg verflow-hidden overflow-y-scroll scrollbar-none flex flex-col gap-4 p-5">
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

                    <p className="text-sm leading-6 line-[12]">
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
                            onClick={() => navigate("/randr")}
                            className="text-black"
                        >
                            Back
                        </Button>
                        <Button
                            disabled={!payload.is_campaign}
                            onClick={handleTcAccept}
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
