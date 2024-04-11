import RotatingSlogan from "@/components/RotatingSlogan";
import "./style.css";
import headerbox2 from "@/assets/images/moft/tagline for ms copy 1.svg";
import cha1 from "@/assets/images/moft/cha1.png";
import cha2 from "@/assets/images/moft/cha2.png";
import guitar from "@/assets/images/moft/guitar.png";
import earbuds from "@/assets/images/moft/ear-bug.png";
import bag from "@/assets/images/moft/water-proof-bag.png";
import speaker from "@/assets/images/moft/RYM POSM JBL Mockup.png";
import bottle from "@/assets/images/moft/water bottle.png";
import rymtshirt from "@/assets/images/moft/T-shirt.png";
import can from "@/assets/images/moft/Can.png";
import fannypack from "@/assets/images/moft/penny bag.png";
import footer from "@/assets/images/moft/moft-footer.png";
import footerCha from "@/assets/images/moft/moft-character.png";
import eLogo from "@/assets/images/moft/Heineken E logo.png";
import frame from "@/assets/images/moft/frame 1.png";

export default function Moft() {
  return (
    <div className="moft-container relative max-w-[420px] mx-auto">
      <div className="moft-content">
        <div className="header-content-wrapper h-[767px]">
          <RotatingSlogan />
          <div className="moft-header ">
            <img src={headerbox2} alt="Refresh With Music" />
            <div className="header-text-wrapper">
              <span className="moft-header-white-text">Buy 6</span>
              <br />
              <span className="moft-header-green-text">Get a Chance</span>{" "}
              <span className="moft-header-green-text">to Refresh</span>
            </div>
          </div>
          <div className="pl-5">
            <p className="promotion-title">
              Promotion <span className="promotion-title-mm">ကာလ</span>
            </p>
            <p className="promotion-date mt-2">
              မတ် (၂၈) ရက်၊ ၂၀၂၄ မှ ဧပြီ (၂၄) ရက် ၊၂၀၂၄ ထိ။
            </p>
          </div>
          <div className="pl-5 pt-3.5">
            <p className="promotion-title-mm">ပါဝင်ရန်နည်းလမ်း</p>
            <p className="promotion-way mt-2">
              မည်သည့် City Mart ဆိုင်မှာမဆို Heineken® (၆) ဘူး ဝယ်ယူသူတိုင်း
              ဆုလက်ဆောင်များစွာရယူနိုင်မယ့် Lucky Draw တစ်စောင်
              ကံစမ်းခွင့်ရရှိမှာပါ။
            </p>
          </div>
          <div>
            <img src={cha1} alt="Refresh with music" className="cha1" />
            <img src={cha2} alt="Refresh with music" className="cha2" />
          </div>
          <p className="promotion-prize pl-5 mt-3.5">ဆုလက်ဆောင်များ</p>
        </div>
        <div className="prize-container">
          <div className="flex flex-row items-center justify-center h-[324px]">
            <div>
              <img src={guitar} alt="Refresh with music" />
              <span className="prize-titles absolute top-[290px]">RYM YAMAHA Guitar</span>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <img src={earbuds} alt="Refresh with music" />
                <span className="prize-titles absolute top-[130px]">RYM Earbuds</span>
              </div>{" "}
              <div className="h-[128px] flex flex-col items-center">
                <img src={bag} alt="Refresh with music" />
                <span className="prize-titles absolute top-[260px]">RYM WaterProof Bag</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col items-center">
              <img
                src={speaker}
                alt="Refresh with music"
                className="w-[164px] h-[82px] mt-5"
              />
              <span className="prize-titles absolute top-[410px]">RYM JBL Speakers</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={bottle} alt="Refresh with music" className="mt-[-30px]"/>
              <span className="prize-titles absolute top-[450px]">RYM Water Bottle</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={rymtshirt} alt="Refresh with music" />
            <span className="prize-titles absolute top-[630px]">RYM T-shirt</span>
          </div>
          <div className="flex flex-row">
          <div className="flex flex-col items-center">
              <img src={can} alt="Refresh with music" />
              <span className="prize-titles absolute top-[810px]">RYM Can</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={fannypack} alt="Refresh with music" />
              <span className="prize-titles absolute top-[790px]">RYM Fanny Pack</span>
            </div>
          </div>
        </div>
        <div className="pl-[30px] mt-[-20px]">
          <img src={frame} alt="Refresh with music" />
        </div>
      </div>
      <div className="footer-content-container">
        <div className="p-5">
          <p className="promotion-title-mm">ဆုလက်ဆောင်များထုတ်ယူခြင်း</p>
          <ul>
            <li>
              Heineken 33cl Free Can, Heineken Waterproof Bag, Heineken Fanny
              Pack, Heineken T shirt နှင့် Heineken Water Bottle ဆုမဲများကို
              သက်ဆိုင်ရာ CMHLကောင်တာများ တွင် ချက်ချင်းထုတ်ယူနိုင်ပါသည်။
            </li>
            <li>
              Heineken Earbuds, Heineken Speaker, Heineken Guitar များ ကံထူးပါက
              ဖုန်းနံပါတ် 09756597201 (သို့) Heineken Myanmar Facebook Messenger
              သို့ မိမိကံထူးထားသော Coupon ပြပြီး ဆက်သွယ်ထုတ်ယူနိုင်ပါသည်။
            </li>
          </ul>
        </div>
        <div className="p-5">
          <p className="promotion-title-mm ">စည်းမျဉ်းစည်းကမ်းများ</p>
          <ul>
            <li>
              ဤအစီအစဉ်ကို မြန်မာနိုင်ငံသားမှတ်ပုံတင် (ID card) ကိုင်ဆောင်ထားသော
              (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်နှင့်အထက်
              ရှိပြီးဖြစ်သော သူများသာပါဝင်ခွင့်ရှိပါသည်။
            </li>
            <li>
              (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်မပြည့်သေးသူများ၊
              Heineken® မှဝန်ထမ်းများ နှင့် Heineken®၏မိတ်ဖက်
              အရောင်းမြှင့်တင်ရေးအေဂျင်စီများ၊ ၄င်းတို့၏ မိသားစုဝင်များ၊
              ဥပဒေအရတားမြစ်ခြင်းခံရသူများ ပါဝင်ခွင့်မရှိပါ။
            </li>
            <li>
              ဆုလက်ဆောင်များအား အခြားအကျိုးခံစားခွင့်များနှင့် လဲလှယ်ခြင်း၊
              ငွေသားဖြင့်လဲလှယ်ခြင်းများ ပြုလုပ်ခွင့်မရှိပါ။
            </li>
            <li>
              အထက်ဖော်ပြပါ အချက်များအပြင်Heineken® သည် ယခု Promotion အစီအစဉ်အား
              ကြိုတင်အကြောင်းကြားခြင်းမပြုဘဲ ပြင်ဆင်ခြင်း၊ ဖြည့်စွက်ခြင်း၊
              အစားထိုးခြင်းများ ပြုလုပ်နိုင်ခွင့် ရှိပါသည်။
            </li>
            <li>
              ဤအစီအစဉ်၍ အငြင်းပွားဖွယ်ရာ တစ်စုံတစ်ရာ ရှိပါက Heineken Myanmar
              Limited ၏ ဆုံးဖြတ်ချက်သည်သာလျှင် အတည်ဖြစ်သည်။
            </li>
          </ul>
        </div>
        <div className="footer-imgs">
          <img
            src={footer}
            alt="Refresh with music"
            className="absolute bottom-0 left-0 right-0"
          />
          <img
            src={footerCha}
            alt="Refresh with music"
            className="absolute bottom-0 left-0 right-0"
          />
          <img
            src={eLogo}
            alt="Refresh with music"
            className="absolute right-5 bottom-10"
          />
        </div>
      </div>
    </div>
  );
}