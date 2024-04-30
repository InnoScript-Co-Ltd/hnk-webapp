/** 
Component Name              - Event Detail [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

/** Import Image & SVG file */
import whereEventImg from "@/assets/svgs/whereEvent.svg";
import footerImg from "@/assets/images/footer.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";

import LoadingComponent from "@/components/LoadingComponent.tsx";
import { endpoints } from "@/constants/endpoints";
import { getRequest } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageTitle } from "@/constants/config";
import "./index.css";
import RotatingSlogan from "@/components/RotatingSlogan";

const EventDetail = () => {

    const [slider, setSlider]: any = useState(null);
    const [loading, setLoading] = useState(false);

    const params = useParams();

    const initDataLoading = useCallback(async () => {
        setLoading(true);
        const result: any = await getRequest(`${endpoints.eventSlider}/${params.id}`);

        if (result.status === 200) {
            setSlider(result.data.data);
        }

        setLoading(false);
    }, [params.id]);

    useEffect(() => {
        initDataLoading();
    }, [initDataLoading]);

    return (
        <div className="party-radar-wrapper">
            {loading && <LoadingComponent />}

            <RotatingSlogan />

            <img className="party-radar-where-event-img" src={whereEventImg} alt={imageTitle} title={imageTitle} />

            <p className="party-radar-content">
                ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း <span className="hnk-text"> Refresh Nights </span> တွေမှာ
                စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို <span className="hnk-text"> Music Event </span> တွေ
                ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>

            {slider && (
                <div className="event-detail-wrapper">
                    <img className="event-detail-img" src={`${endpoints.image}/${slider.cover_photo.image}`} alt={imageTitle} title={imageTitle} />

                    <h3 className="event-detail-title"> {slider.name} </h3>

                    <div className="event-detail-info-item">
                        <label> Location </label>
                        <span> {slider.location} </span>
                    </div>

                    <div className="event-detail-info-item">
                        <label> Address </label>
                        <span> {slider.address} </span>
                    </div>

                    <div className="event-detail-info-item">
                        <label> Date </label>
                        <span> {slider.date} </span>
                    </div>

                    <div className="event-detail-info-item">
                        <label> Time </label>
                        <span> {slider.time} </span>
                    </div>

                    <div className="event-detail-promotion-item">
                        <label> Promotion </label>
                        <span> {slider.promotion} </span>
                    </div>
                </div>
            )}

            <div className="event-slider-footer">
                <img className="event-slider-bg" src={footerImg} alt={imageTitle} title={imageTitle} />
                <img className="event-slider-elogo" src={enjoyLogo} alt={imageTitle} title={imageTitle} />
            </div>
        </div>
    )
}

export default EventDetail;