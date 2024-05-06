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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";
import EventModal from "@/modules/partyReader/EventModal";

const EventSlider = () => {

    const [loading, setLoading] = useState(false);
    const [sliders, setSlider]: any = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [selectSlider, setSelectSlider] = useState(null);

    const initLoadingData = useCallback(async () => {
        setLoading(true);
        const resultEventSlider: any = await getRequest(endpoints.eventSlider);

        if (resultEventSlider.status === 200) {
            setSlider(resultEventSlider.data.data);
            setLoading(false);
            return;
        }
        setLoading(false);
    }, []);

    useEffect(() => {
        initLoadingData()
    }, [initLoadingData]);

    return (
        <div className="event-slider-wrapper">
            {!loading && sliders && (
                <Swiper
                    className="event-slider-swiper-wrapper"
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
                                className="event-slider-item"
                                key={`event_slider_id_${index}`}
                                onClick={() => {
                                    setSelectSlider(slider)
                                    setOpenModel(true)
                                }}
                            >
                                <img className="event-slider-img" src={`${endpoints.image}/${slider.cover_photo.image}`} alt={imageTitle} title={imageTitle} />
                                <h3 className="event-slider-name"> {slider.name} </h3>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            )}

            {openModel && (
                <EventModal
                    dataSource={selectSlider}
                    onClose={() => setOpenModel(false)}
                />
            )}
        </div>
    )
}

export default EventSlider;