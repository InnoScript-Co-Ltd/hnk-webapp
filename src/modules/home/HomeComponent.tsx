import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import titleRightIllu from "../../assets/images/HomePage/titleRightIllu.png";
import contentIllu from "../../assets/images/HomePage/contentIlluLeft.png";
import beerBottle from "../../assets/images/HomePage/beerbottle.png";
import contentsection2leftIllu from "../../assets/images/HomePage/section2leftillu.png";
import footerImg from "../../assets/images/HomePage/footer.png";
import randr from "../../assets/images/HomePage/r&r.png";
import { useNavigate } from "react-router-dom";
import RotatingSlogan from "@/components/RotatingSlogan";
import { useState } from "react";
import "./style.css";

const HomeComponent = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  const openMoreText = () => {
    setShowMore(!showMore);
  }

  const handleClickRandR = () => {
    navigate('/randr')
  }

  const handleClickPartyRadar = () => {
    navigate('/party-radar');
  }

  return (
    <>
      {/* {token && ( */}
      <div className="home-container max-w-[420px] mx-auto">
        {/* <Header imageWidth={"130px"} /> */}
        <div>
          <img className="enjoy-logo" src={enjoyLogo} />
        </div>
        <div className="content-section">
          <div className="right-illu">
            <img src={titleRightIllu} />
          </div>
          <RotatingSlogan />
          <div className="content-title">
            <h1 className=" text-center text-primary-white text-[36px]">qef;opfxl;jcm;wJh <span className=" text-primary-white text-green">*Dwt&omawGudk</span> <br /> udk,fwdkif pD;arsmcHpm;zdkY ...</h1>
          </div>
          <div className="content-texts pl-[20px] pr-[50px] font-semibold leading-[19px]">
            <p>
              ဂီတဟာ ခံစားမှု၊ စိတ်ကူးနိုင်စွမ်းနဲ့  <span className="text-effect"> Refresh Vibes </span> တွေကိုပါ ရရှိစေပါတယ်။  ဒါကြောင့် လူငယ်အများစုဟာ အရင်တုန်းကလို <span className="text-effect"> Refresh </span> ညတွေ ပြန်ရဖို့
              ကိုယ့်အကြိုက်ဆုံးသီချင်းတွေ ကြားရမယ့်နေရာတွေဆီ သွားလေ့ရှိကြပေမယ့်  <span className="text-effect"> Social Media  Algorithms </span> တွေကြောင့် ပုံစံတူသီချင်း၊ ခံစားမှုတွေဆီမှာပဲ
              ပိတ်မိပြန်ပါတယ် <span className="seemore-text" onClick={openMoreText}> see more </span>
            </p>

            {showMore && (
              <>
                <p> ဒီအတွက် <span className="text-effect"> Heineken®Refresh Your Music, Refresh Your Nights </span> ပြန်လည်ရောက်ရှိလာပါပြီ </p>

                <p> ခေါက်ရိုးကျိုးပုံစံတွေကနေ ပြောင်းလဲဆန်းသစ်ထားတဲ့ ဂီတသံစဉ်တွေနဲ့ ဖောက်ထွက်နိုင်မယ့် <span className="text-effect"> Heineken </span>  ရဲ့
                  <span className="text-effect"> campaign </span> တစ်ခုဖြစ်ပြီးတော့ ၂၀၂၂ ခုနှစ်တုန်းကလည်း ရန်ကုန်မြို့က <span className="text-effect"> Heineken®Premium Outlets </span> တွေမှာ
                  <span className="text-effect"> International EDM Artist THE CHAINSMOKERS </span> ရဲ့ နာမည်ကျော်သီချင်းတွေကို
                  <span className="text-effect"> Local Artists  </span> တွေဖြစ်ကြတဲ့ ဝေလ၊ SNARE၊ ထက်ယံ၊ အမရာဖုန်းတို့က ဖျော်ဖြေခဲ့ကြပါသေးတ​ယ်။
                </p>

                <p> ဒီနှစ် <span className="text-effect"> Refresh Your Music, Refresh Your Nights 2024 </span> မှာတော့ ပရိသတ်အကြိုက်ဆုံးသီချင်းတွေ ဖန်တီးထားကြတဲ့
                  Local Artists Mi Sandi၊ Ar-T၊ Jewel၊ Double J၊ Shine နဲ့  Amera Hpone တို့က <span className="text-effect"> Heineken </span> နဲ့အတူ အသစ်လွင်ဆုံး
                  ဂီတသံစဉ်ကို အတူဖန်တီးသွားကြမှာဖြစ်ပါတယ်။ ဖန်တီးတဲ့တစ်လျှောက်လုံး <a className="" href="https://www.refreshyourmusichnk.com" target="_blank"> www.refreshyourmusichnk.com </a>
                  ကတဆင့် ပရိသတ်တွေကိုယ်တိုင်ပါဝင်နိုင်မယ့် အစီအစဉ်တွေအပြင် <span className="text-effect"> Live Performance </span> အဖြစ် ကိုယ်တိုင် နားထောင်နိုင်မယ့် <span className="text-effect"> Event </span> တွေလည်းပါဝင်ဦးမှာပါ။
                  ဒီအစီအစဉ်တွေကနေ <span className="text-effect"> Heineken </span> ရဲ့ <span className="text-effect"> Exclusive </span>
                  ဆုလက်ဆောင်တွေရယူနိုင်မယ့် အခွင့်အရေးတွေလည်းရှိနေမှာမို့  ဘယ်လိုပုံစံနဲ့ <span className="text-effect"> Refresh </span> သွားမလဲ? စောင့်မျှော်ခံစားကြည့်လိုက်ပါ…
                </p>
              </>
            )}
          </div>
          <div className="content-illu relative">
            <img className="content-left-illu" src={contentIllu} />
            <img className="content-right-illu" src={beerBottle} />

            <div className="right-bottom-clip !-bottom-[164px]">
              <svg
                width="100"
                height="199"
                viewBox="0 0 176 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 165C22 177 16 191.5 0.5 198.5H175.5V0.5L36 86C26.909 92.1 24.2985 95.9305 23.5 103.5V165Z"
                  fill="#040658"
                />
              </svg>
            </div>
          </div>
          <button onClick={handleClickPartyRadar} className="rader btn">
            <span>Party Radar</span>
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                fill="black"
              />
            </svg>
          </button>
          <div className="content-section-bottom"></div>

          <div className="content-section-2">
            <img
              className="section-2-left-illu"
              src={contentsection2leftIllu}
            />
            <img className="section-2-randr-illu" src={randr} />
            <button onClick={handleClickRandR} className="randr btn fix-btn">
              <span> Refresh with Double J </span>
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>

          <div className="footer-img relative">
            <img className=" w-full" src={footerImg} />
            <div>
              <img className="enjoy-logo absolute z-50 !bottom-[120px] !right-[20px]" src={enjoyLogo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent;