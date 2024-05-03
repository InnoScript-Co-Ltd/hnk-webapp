/** 
Component Name              - Party Radar Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

/** Import Image & SVG file */
import whereEventImg from "@/assets/svgs/whereEvent.svg";
import footerImg from "@/assets/images/footer.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";

import LoadingComponent from "@/components/LoadingComponent.tsx";
import { useRef } from "react";
import { imageTitle } from "@/constants/config";
import EventSlider from "@/components/EventSlider/EventSlider";
import "./index.css";
import RotatingSlogan from "@/components/RotatingSlogan";

const PartyRadar = () => {

    const loading = useRef(false);
    return(
        <div className="party-radar-wrapper">
            {loading.current && <LoadingComponent />}
            <RotatingSlogan />

            <img className="party-radar-where-event-img" src={whereEventImg} alt={imageTitle} title={imageTitle} />

            <p className="party-radar-content">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း <span className="hnk-text"> Refresh Nights </span> တွေမှာ
              စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို <span className="hnk-text"> Music Event </span> တွေ
              ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>

            <EventSlider />

            <div className="event-slider-footer">
                <img className="event-slider-bg" src={footerImg} alt={imageTitle} title={imageTitle} />
                <img className="event-slider-elogo" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
            </div>
        </div>
    )
}

export default PartyRadar;