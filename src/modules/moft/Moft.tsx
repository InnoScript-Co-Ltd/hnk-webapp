/** 
Component Name              - MOFT Page Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import RotatingSlogan from "@/components/RotatingSlogan";
import BuyGift from "@/assets/svgs/Buy_Gift.svg";
import HeaderLeftImg from "@/assets/svgs/assets.svg"
import MusicPlayer from "@/assets/svgs/music_player.svg";
import guitar from "@/assets/images/moft/guitar.png";
import earbuds from "@/assets/images/moft/ear-bug.png";
import rymtshirt from "@/assets/images/moft/T-shirt.png";
import speaker from "@/assets/images/moft/RYM POSM JBL Mockup.png";
import bottle from "@/assets/images/moft/water bottle.png";
import bag from "@/assets/images/moft/water-proof-bag.png";
import can from "@/assets/images/moft/Can.png";
import fannypack from "@/assets/images/moft/penny bag.png";
import cardFooter from "@/assets/svgs/card_footer.svg";
import footerImage from "@/assets/svgs/moft-footer.svg";
import { imageTitle } from "@/constants/config";
import { MetaTags } from "@/components/MetaTag";
import "./style.css";

const Moft = () => {
  const metaData: any = {
    title: "HNK - Reresh Your Music | MOFT",
    description: "Heineken 33cl Free Can, Heineken Waterproof Bag, Heineken Fanny Pack, Heineken T shirt နှင့် Heineken Water Bottle ဆုမဲများကို သက်ဆိုင်ရာ CMHL ကောင်တာများ တွင် ချက်ချင်းထုတ်ယူနိုင်ပါသည်။",
    image: BuyGift
  };

  return (
    <>
    <MetaTags dataSource={metaData} />

      <div className="moft-wrapper">
        <div className="moft-container">
          <RotatingSlogan />

          <div className="moft-header">
            <img className="getter-img" src={HeaderLeftImg} alt={imageTitle} title={imageTitle} />
            <img className="gift-card" src={BuyGift} alt={imageTitle} title={imageTitle} />
          </div>

          <div className="promotion-period">
            <span className="moft-promotion-title"> <span className="moft-hnk-effect"> Promotion</span> ကာလ </span>
            <p className="moft-text"> မတ် (၂၈) ရက်၊ ၂၀၂၄ မှ ဧပြီ (၂၄) ရက် ၊၂၀၂၄ ထိ။ </p>
            <img className="moft-muisc-player" src={MusicPlayer} alt={imageTitle} title={imageTitle} />
          </div>

          <div className="promotion-period" style={{ top: "-222px" }}>
            <span className="moft-promotion-title">ပါဝင်ရန်နည်းလမ်း </span>
            <p className="moft-text"> မည်သည့် <span className="moft-hnk-effect"> City Mart </span> ဆိုင်မှာမဆို
              <span className="moft-hnk-effect"> Heineken® </span> (၆) ဘူး ဝယ်ယူသူတိုင်း ဆုလက်ဆောင်များစွာရယူနိုင်မယ့်
              <span className="moft-hnk-effect"> Lucky Draw </span> တစ်စောင် ကံစမ်းခွင့်ရရှိမှာပါ။</p>
          </div>
        </div>

        <div className="moft-promo-item-wrapper">
          <span className="moft-promotion-title"> ဆုလက်ဆောင်များ </span>
          <div className="moft-item-card">
            <div className="moft-item">
              <img src={guitar} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label" style={{ top: "-20px" }}> RYM YAMAHA Guitar </label>
            </div>

            <div className="moft-veritcal-item">
              <div className="moft-item">
                <img src={earbuds} alt={imageTitle} title={imageTitle} style={{ width: "100%" }} />
                <label className="moft-item-label" style={{ top: "-20px" }}> RYM Earbuds </label>
              </div>

              <div className="moft-item">
                <img src={bag} alt={imageTitle} title={imageTitle} style={{ width: "100%" }} />
                <label className="moft-item-label" style={{ top: "-20px" }}>RYM T-shirt </label>
              </div>
            </div>

            <div className="moft-item" style={{ width: "50%" }}>
              <img src={speaker} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label" style={{ top: "-20px" }}>RYM JBL Speakers </label>
            </div>

            <div className="moft-item" style={{ width: "50%" }}>
              <img src={bottle} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label"> RYM Water Bottle </label>
            </div>

            <div className="moft-item" style={{ width: "100%" }}>
              <img src={rymtshirt} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label" style={{ top: "-20px" }}> RYM T-shirt </label>
            </div>

            <div className="moft-item" style={{ width: "50%" }}>
              <img src={can} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label" style={{ top: "-20px" }}> RYM Water Bottle </label>
            </div>

            <div className="moft-item" style={{ width: "50%" }}>
              <img src={fannypack} alt={imageTitle} title={imageTitle} />
              <label className="moft-item-label" style={{ top: "-20px" }}> RYM Fanny Pack </label>
            </div>
          </div>

          <img className="card-footer" src={cardFooter} alt={imageTitle} title={imageTitle} />
        </div>

        <div className="moft-promo-detail">
          <label> ဆုလက်ဆောင်များထုတ်ယူခြင်း </label>
          <ul>
            <li>
              <span className="moft-hnk-effect"> Heineken 33cl Free Can, Heineken Waterproof Bag, Heineken Fanny Pack, Heineken T shirt</span> နှင့်
              <span className="moft-hnk-effect"> Heineken Water Bottle </span> ဆုမဲများကို သက်ဆိုင်ရာ
              <span className="moft-hnk-effect"> CMHL</span> ကောင်တာများ တွင် ချက်ချင်းထုတ်ယူနိုင်ပါသည်။
            </li>

            <li>
              <span className="moft-hnk-effect"> Heineken Earbuds, Heineken Speaker, Heineken Guitar </span> များ ကံထူးပါက ဖုန်းနံပါတ်
              <span className="moft-hnk-effect"> 09756597201 </span> (သို့) <span className="moft-hnk-effect"> Heineken Myanmar Facebook Messenger </span>
              သို့ မိမိကံထူးထားသော <span className="moft-hnk-effect"> Coupon </span> ပြပြီး ဆက်သွယ်ထုတ်ယူနိုင်ပါသည်။
            </li>
          </ul>

          <label> စည်းမျဉ်းစည်းကမ်းများ </label>
          <ul>
            <li>
              ဤအစီအစဉ်ကို မြန်မာနိုင်ငံသားမှတ်ပုံတင် (ID card) ကိုင်ဆောင်ထားသော (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်နှင့်အထက် ရှိပြီးဖြစ်သော
              သူများသာပါဝင်ခွင့်ရှိပါသည်။
            </li>

            <li>
              (၂၈)ရက်၊ မတ်လ၊ ၂၀၂၄ ခုနှစ်တွင် အသက် (၂၁)နှစ်မပြည့်သေးသူများ၊ <span className="moft-hnk-effect"> Heineken® </span> မှဝန်ထမ်းများ နှင့်
              <span className="moft-hnk-effect"> Heineken® </span> ၏မိတ်ဖက် အရောင်းမြှင့်တင်ရေးအေဂျင်စီများ၊
              ၄င်းတို့၏ မိသားစုဝင်များ၊ ဥပဒေအရတားမြစ်ခြင်းခံရသူများ ပါဝင်ခွင့်မရှိပါ။
            </li>

            <li> ဆုလက်ဆောင်များအား အခြားအကျိုးခံစားခွင့်များနှင့် လဲလှယ်ခြင်း၊ ငွေသားဖြင့်လဲလှယ်ခြင်းများ ပြုလုပ်ခွင့်မရှိပါ။  </li>

            <li>
              အထက်ဖော်ပြပါ အချက်များအပြင် <span className="moft-hnk-effect"> Heineken® </span> သည် ယခု
              <span className="moft-hnk-effect"> Promotion </span> အစီအစဉ်အား ကြိုတင်အကြောင်းကြားခြင်းမပြုဘဲ ပြင်ဆင်ခြင်း၊ ဖြည့်စွက်ခြင်း၊
              အစားထိုးခြင်းများ ပြုလုပ်နိုင်ခွင့် ရှိပါသည်။
            </li>

            <li> ဤအစီအစဉ်၍ အငြင်းပွားဖွယ်ရာ တစ်စုံတစ်ရာ ရှိပါက <span className="moft-hnk-effect"> Heineken Myanmar Limited </span> ၏ ဆုံးဖြတ်ချက်သည်သာလျှင် အတည်ဖြစ်သည်။ </li>
          </ul>

          <div className="moft-footer">
            <img src={footerImage} alt={imageTitle} title={imageTitle} />
          </div>
        </div>
      </div>
    </>
  )
}
export default Moft;