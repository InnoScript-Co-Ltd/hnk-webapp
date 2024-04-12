/** 
Component Name              - Campign Info Page Component [Component]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import RotatingSlogan from "@/components/RotatingSlogan";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
import { MetaTags } from "@/components/MetaTag";
import metaImage from "@/assets/images/hnk_refresh_music.png";
import "./style.css";

const CampignInfo = () => {

    // const navigate = useNavigate();

    const metaData: any = {
        title: "Campaign အကြောင်း",
        description : "ဂီတဟာ ခံစားမှု၊ စိတ်ကူးနိုင်စွမ်းနဲ့ Refresh Vibes တွေကိုပါ ရရှိစေပါတယ်။  ဒါကြောင့် လူငယ်အများစုဟာ အရင်တုန်းကလို Refresh ညတွေ ပြန်ရဖို့ ကိုယ့်အကြိုက်ဆုံးသီချင်းတွေ ကြားရမယ့်နေရာတွေဆီ သွားလေ့ရှိကြပေမယ့် Social Media  Algorithms တွေကြောင့် ပုံစံတူသီချင်း၊ ခံစားမှုတွေဆီမှာပဲ ပိတ်မိပြန်ပါတယ်",
        image: metaImage,
    }

    return (
        <>
            <MetaTags dataSource={metaData} />

            <div className="bg-tandc bg-no-repeat bg-cover display flex flex-col justify-center items-center p-1 max-w-[420px] mx-auto relative">
                <div className="w-full flex flex-col justify-center items-center gap-3">
                    <RotatingSlogan />
                    <div className="w-full h-full font-natosansmm text-white bg-[rgba(30,18,115,0.88)]/30 backdrop-blur-2xl border border-[#EABFFF] rounded-lg verflow-hidden overflow-y-scroll scrollbar-none flex flex-col gap-4 p-5">
                        <h1 className="text-[25px] font-bold text-center"> Campaign အကြောင်း </h1>
                        <ul className="campign-list-wrapper">
                            <li className="campign-list">
                                ဂီတဟာ ခံစားမှု၊ စိတ်ကူးနိုင်စွမ်းနဲ့ <span className="hnk-font"> Refresh Vibes</span> တွေကိုပါ ရရှိစေပါတယ်။
                                ဒါကြောင့် လူငယ်အများစုဟာ အရင်တုန်းကလို <span className="hnk-font"> Refresh </span> ညတွေ ပြန်ရဖို့
                                ကိုယ့်အကြိုက်ဆုံးသီချင်းတွေ ကြားရမယ့်နေရာတွေဆီ သွားလေ့ရှိကြပေမယ့် <span className="hnk-font"> Social Media  Algorithms </span>
                                တွေကြောင့် ပုံစံတူသီချင်း၊ ခံစားမှုတွေဆီမှာပဲ ပိတ်မိပြန်ပါတယ် ဒီအတွက်  <span className="hnk-font"> Heineken®Refresh Your Music, Refresh Your Nights </span>
                                ပြန်လည်ရောက်ရှိလာပါပြီ
                            </li>

                            <li className="campign-list">
                                ခေါက်ရိုးကျိုးပုံစံတွေကနေ ပြောင်းလဲဆန်းသစ်ထားတဲ့ ဂီတသံစဉ်တွေနဲ့ ဖောက်ထွက်နိုင်မယ့် <span className="hnk-font"> Heineken </span> ရဲ့
                                <span className="hnk-font"> campaign </span> တစ်ခုဖြစ်ပြီးတော့ ၂၀၂၂ ခုနှစ်တုန်းကလည်း ရန်ကုန်မြို့က <span className="hnk-font"> Heineken®Premium Outlets </span>  တွေမှာ
                                <span className="hnk-font"> International EDM Artist THE CHAINSMOKERS </span> ရဲ့ နာမည်ကျော်သီချင်းတွေကို  <span className="hnk-font"> Local Artists </span>
                                တွေဖြစ်ကြတဲ့ ဝေလ၊ SNARE၊ ထက်ယံ၊ Amera Hpone တို့က ဖျော်ဖြေခဲ့ကြပါသေးတယ်။
                            </li>

                            <li className="campign-list">
                                ဒီနှစ် <span className="hnk-font"> Refresh Your Music, Refresh Your Nights 2024 </span>  မှာတော့ ပရိသတ်အကြိုက်ဆုံးသီချင်းတွေ ဖန်တီးထားကြတဲ့
                                <span className="hnk-font"> Local Artists </span> မိစန္ဒီ၊ Ar-T၊ Jewel၊ Double J၊ Shine နဲ့  Amera Hpone တို့က
                                <span className="hnk-font"> Heineken </span> နဲ့အတူ အသစ်လွင်ဆုံး ဂီတသံစဉ်ကို အတူဖန်တီးသွားကြမှာဖြစ်ပါတယ်။ ဖန်တီးတဲ့တစ်လျှောက်လုံး
                                www.refreshyourmusichnk.com ကတဆင့် ပရိသတ်တွေ ကိုယ်တိုင်ပါဝင်နိုင်မယ့် အစီအစဉ်တွေအပြင်  <span className="hnk-font"> Live Performance </span>
                                အဖြစ် ကိုယ်တိုင် နားထောင်နိုင်မယ့် <span className="hnk-font">Event </span> တွေလည်းပါဝင်ဦးမှာပါ။ ဒီအစီအစဉ်တွေကနေ <span className="hnk-font"> Heineken </span>  ရဲ့
                                <span className="hnk-font"> Exclusive </span>  ဆုလက်ဆောင်တွေရယူနိုင်မယ့် အခွင့်အရေးတွေလည်းရှိနေမှာမို့  ဘယ်လိုပုံစံနဲ့ <span className="hnk-font"> Refresh </span>  သွားမလဲ?
                                စောင့်မျှော်ခံစားကြည့်လိုက်ပါ…
                            </li>
                        </ul>

                        {/* <div className="flex justify-around px-4">
                            <Button
                                variant="hnk"
                                size="hnksm"
                                onClick={() => navigate("/home")}
                                className="text-black"
                            >
                                Back
                            </Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CampignInfo;
