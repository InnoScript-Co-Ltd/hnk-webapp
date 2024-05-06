/** 
Component Name              - TermsAndCondition Page Component
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RotatingSlogan from "@/components/RotatingSlogan";
import AlertModal from "@/components/modals/alert-modal";
import "./style.css";

const Termsandconditions = () => {
    const [payload, setPayload] = useState({
        is_campaign: false,
    });

    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const params = useParams();


    const handleTcAccept = () => {
        navigate(`/register/${params.vote}/${params.type}`);
    };

    const onClose = () => {
        setPayload({ ...payload, is_campaign: false });
        setOpen(false);
    };

    return (
        <div className="bg-tandc bg-no-repeat bg-cover display flex flex-col justify-center items-center p-1 max-w-[420px] mx-auto relative">
            <AlertModal
                isOpen={open}
                onClose={() => onClose()}
                onConfirm={() => setOpen(false)}
            />

            <div className="w-full flex flex-col justify-center items-center gap-3">
                <RotatingSlogan />
                <div className="w-full h-full font-natosansmm text-white bg-[rgba(30,18,115,0.88)]/30 backdrop-blur-2xl border border-[#EABFFF] rounded-lg verflow-hidden overflow-y-scroll scrollbar-none flex flex-col gap-4 p-5">
                    <h1 className="text-[25px] font-bold text-center"> ကမ်ပိန်းစည်းမျဉ်းစည်းကမ်းများ </h1>
                    <ul className="tc-list-wrapper">
                        <li className="tc-list">
                            <span className="hnk-font"> Heineken®Refresh Your Music, Refresh Your Nights </span> ကမ်ပိန်းကို မြန်မာနိုင်ငံသားမှတ်ပုံတင် (ID card) ကိုင်ဆောင်ထားသော (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်နှင့်အထက် ရှိပြီးဖြစ်သော သူများသာပါဝင်ခွင့်ရှိပါသည်။
                        </li>

                        <li className="tc-list">
                            (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်မပြည့်သေးသူများ၊ <span className="hnk-font"> Heineken® </span> မှဝန်ထမ်းများ နှင့် <span className="hnk-font"> Heineken® </span> ၏မိတ်ဖက် အရောင်းမြှင့်တင်ရေးအေဂျင်စီများ၊ ၄င်းတို့၏ မိသားစုဝင်များ၊ ဥပဒေအရတားမြစ်ခြင်းခံရသူများ ပါဝင်ခွင့်မရှိပါ။
                        </li>

                        <li className="tc-list">
                            <span className="hnk-font"> Heineken® </span> သည် လူမှုကွန်ရက်စာမျက်နှာ (social media)များမှ တဆင့်ကြိုတင်အကြောင်းကြား၍ ကမ်ပိန်းကျင်းပမည့် နေ့ရက်များကို ပြောင်းလဲရန်၊ ရုပ်သိမ်းရန် သို့မဟုတ် ပြန်လည်စီစဉ်ရန် ဆုံးဖြတ်ပိုင်ခွင့်ရှိထားသည်ကိုလည်း သိရှိရပါမည်။
                        </li>

                        <li className="tc-list">
                            ဆုလက်ဆောင်များမှာ Heineken YAMAHA Guitar, Heineken JBL Speaker, Heineken Earbuds,  Heineken Waterproof Bag, Heineken Fanny Pack, Heineken T shirt နှင့် Heineken Water Bottle များဖြစ်ပါသည်။
                        </li>

                        <li className="tc-list">
                            ဆုလက်ဆောင်များကို www.refreshyourmusichnk.com ရှိ <a href="/home"> Refresh with Double J </a> တွင် ဖော်ပြထားသောနည်းလမ်းများဖြင့် ရယူနိုင်ပါသည်။
                        </li>

                        <li className="tc-list">
                            ဆုလက်ဆောင်များအား လူအစားထိုးလဲလှယ်ခြင်းများ၊ အခြားအကျိုးခံစားခွင့်များနှင့် လဲလှယ်ခြင်း၊ ငွေသားဖြင့်လှဲလှယ်ခြင်းများ  ပြုလုပ်ပေးသွားမည်မဟုတ်ပါ။
                        </li>

                        <li className="tc-list">
                            ဤကမ်ပိန်းတွင်ပါဝင်မည့်သူသည်  <span className="hnk-font"> Heineken® </span>နှင့် ၎င်း၏မိတ်ဖက်များကို ဆုလက်ဆောင်များတွင် မပါဝင်ဘဲ တစ်ပိုင်းတစ်စ၊ သို့မဟုတ် အပြည့်အဝ ဖြစ်ပေါ်လာနိုင်သော၊ သို့မဟုတ် ပြိုင်ပွဲဝင်သူတွင် ရှိသော ဆုံးရှုံးမှုများ၊ အခွင့်အရေးများ၊ တောင်းဆိုမှုများ၊ ကုန်ကျမှုများနှင့် စပ်လျဉ်း၍ တိုက်ရိုက်ဖြစ်စေ၊ သွယ်ဝိုက်ဖြစ်စေ အပြစ်တင်စွဲ ဆိုနိုင်ခြင်းမရှိသည်ကို နားလည်ထားပြီး ဖြစ်ရပါမည်။
                        </li>

                        <li className="tc-list">
                            ဤကမ်ပိန်းတွင် ပါဝင်ခြင်းအားဖြင့် ပါဝင်သူများသည် မိမိတို့ပါဝင်ယှဉ်ပြိုင်ထားသော သီချင်းများ၊ Video များ၊ ဓာတ်ပုံများနှင့် ပတ်သက်သော မူပိုင်ခွင့်များအား <span className="hnk-font"> Heineken® </span> သို့ ပေးအပ်ပြီးဖြစ်ပါသည်။ ပေးအပ်ထားသော မူပိုင်ခွင့်များတွင် အကြောင်းအရာများအား သင့်တော်သလို ပြန်လည်တည်းဖြတ်ခြင်း၊ အပြောင်းအလဲများပြုလုပ်ခြင်း၊ စီးပွားရေး ကြော်ငြာများ ၊ အရောင်းမြှင့်တင်ရေးလုပ်ငန်းများတွင် အသုံးပြုခြင်း၊ တိုက်ရိုက် အရောင်းမြှင့်တင်ခြင်း၊ အီလက်ထရောနစ်မီဒီယာများမှ တဆင့် အရောင်းမြှင့်တင်ခြင်း လုပ်ငန်းများတွင် အသုံးပြုခြင်းများအတွက်ပါ အခွင့်အရေးပေးထားပြီး ဖြစ်ကြောင်း အသိပေးအပ်ပါသည်။
                        </li>

                        <li className="tc-list">
                            အထက်ဖော်ပြပါ အချက်များအပြင်  <span className="hnk-font"> Heineken® </span> သည် ကမ်ပိန်းစည်းမျဉ်းကန့်သတ်ချက်များအား ကြိုတင်အကြောင်းကြားခြင်းမပြုဘဲ ပြင်ဆင်ခြင်း၊ ဖြည့်စွက်ခြင်း၊ အစားထိုးခြင်းများ ပြုလုပ်နိုင်ခွင့် ရှိပါသည်။ ဤကမ်ပိန်းတွင် ပါဝင်ခြင်းဖြင့် အဆိုပါပြင်ဆင်မှုများ၊ ဖြည့်စွက်မှု၊အစားထိုးမှုများနှင့်အတူစည်းမျဉ်းကန့်သတ်ချက်များနှင့် အားလုံးကို  <span className="hnk-font"> Heineken® </span> မှ နောက်ဆုံး ဆုံးဖြတ်မည်ကို သိရှိလက်ခံထားပြီး ဖြစ်ပါသည်။
                        </li>

                        <li className="tc-list">
                            ကမ်ပိန်းအစီစဉ်များ၊ စည်းမျဉ်းကန့်သတ်ချက်ကို မြန်မာနိုင်ငံ၏ ဥပဒေများဖြင့် ထိန်းသိမ်းကြီးကြပ်သွားပါမည်။
                        </li>
                    </ul>

                    <div className="flex justify-center gap-4">
                        <input
                            className="w-5 h-5 rounded-5 border-none outline-none shadow-[-1px_3px_0px_1px_rgba(0,0,0,1)] bg-white"
                            type="checkbox"
                            checked={payload.is_campaign}
                            onChange={(e) => {
                                const updatePayload = { ...payload };
                                updatePayload.is_campaign = e.target.checked;
                                setPayload(updatePayload);
                                setOpen(!payload.is_campaign);
                            }}
                        />
                        <label className="text-md md:text-[18px]"> စည်းမျဉ်းများအား သေချာစွာဖတ်ရှု့ထားပြီး သဘောတူပါသည်။ </label>
                    </div>

                    <div className="flex justify-around px-4">
                        <Button
                            variant="hnk"
                            size="hnksm"
                            onClick={() => navigate("/home")}
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
