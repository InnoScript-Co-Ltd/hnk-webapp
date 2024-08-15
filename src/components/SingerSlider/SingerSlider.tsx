/** 
Component Name              - Event Slider Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { endpoints } from "@/constants/endpoints";
import { getRequest } from "@/lib/axios";
import { useCallback, useEffect, useState } from "react";
import { imageTitle } from "@/constants/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import NKKBTL from "@/assets/images/hnk_bottle.png";
import { useNavigate } from "react-router-dom";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";

const SingerSlider = () => {

    const [loading, setLoading] = useState(false);
    const [sliders, setSlider]: any = useState(null);

    const navigate = useNavigate();
    
    const initLoadingData = useCallback(async () => {
        setLoading(true);
        const resultSingerSlider: any = await getRequest(endpoints.singer);

        if (resultSingerSlider.status === 200) {
            const showSlider = resultSingerSlider.data.data.filter((value: any) => value.show_slider === "ACTIVE");
            setSlider(showSlider);
            setLoading(false);
            return;
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        initLoadingData()
    }, [initLoadingData]);

    return (
        <div className="singer-slider-wrapper">
            {!loading && sliders && (
                <Swiper
                    className="singer-slider-swiper-wrapper"
                    spaceBetween={50}
                    modules={[Pagination]}
                    autoplay={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {sliders.length > 0 && sliders.map((slider: any, index: number) => {
                        return (
                            <SwiperSlide
                                className="singer-slider-item"
                                key={`sinfer_slider_id_${index}`}
                                onClick={() => {
                                    navigate(`/refresh-series/${slider.id}`)
                                }}
                            >
                                <img className="singer-slider-img" src={`${endpoints.image}/${slider.slider_image}`} alt={imageTitle} title={imageTitle} />
                                <h3 className="singer-slider-name"> 
                                    <span> {slider.name} </span>
                                    <span> {slider.slider_description} </span>
                                </h3>
                                <img className="hnk_btl" src={NKKBTL} alt={imageTitle} title={imageTitle} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}
        </div>
    )
}

export default SingerSlider;