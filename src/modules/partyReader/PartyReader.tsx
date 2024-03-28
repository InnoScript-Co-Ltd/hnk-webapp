import React, { useEffect, useState } from "react";
import "./partyReaderStyle.css";
import starIcon from "@/assets/images/star.png";
import outletPromotion from "@/assets/images/Outlet_Promotion.png";
import partyTitle from "@/assets/images/partyTitle.png";
import slide1 from "@/assets/images/event1.png";
import slide2 from "@/assets/images/event2.png";
import promotion from "@/assets/images/promotion.png";
import footerImg from "@/assets/images/footer.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useNavigate } from "react-router-dom";
import OutletModal from "./OutletModal";

interface Location {
  lat: number;
  lng: number;
}

const sliders = [
  {
    id: 1,
    image: slide1,
  },
  {
    id: 2,
    image: slide2,
  },
];

const outletPromotions = [
  {
    id: 1,
    image: promotion,
    name: "Kan Daw Gyi",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
  {
    id: 2,
    image: promotion,
    name: "Time city",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
  {
    id: 3,
    image: promotion,
    name: "Kan Daw Gyi",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
];

const all_outlets = [
  {
    id: 1,
    image: promotion,
    name: "Kan Daw Gyi",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
  {
    id: 2,
    image: promotion,
    name: "Time City",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
  {
    id: 3,
    image: promotion,
    name: "Kan Daw Gyi",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
  {
    id: 4,
    image: promotion,
    name: "Kan Daw Gyi",
    phone: "9887766565",
    address: "NO.2, ioj  jo  id f Yangon, Myanmar",
    date: "23.3.2024",
    time: "12 pm to 10 pm",
    promotion: "10% off",
    promo_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I",
    latitude: 16.77925491444093,
    longitude: 96.15483604133,
  },
];

const PartyReader = () => {
  const [promotionTab, setPromotionTab] = useState(true);
  const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedDistance, setSelectedDistance] = useState("10km");
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const openModal = (outlet) => {
    setSelectedOutlet(outlet);
  };

  const closeModal = () => {
    setSelectedOutlet(null);
  };

  console.log(selectedOutlet);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="partyreader-container">
      <div className="partyreader-content">
        <div className="slider-content-wrapper">
          <div className="partyreader-ads-content">
            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>

            <div className="ads-item loop-text">
              <img
                src={starIcon}
                alt="HNK Refresh Music"
                title="HNK Refresh Music"
              />
              <label> Refresh Your Music </label>
            </div>
          </div>
          {/* <RotatingSlogan /> */}
          <div className="party-content-wrapper">
            <img
              src={partyTitle}
              alt="HNK Refresh Music"
              className="party-title"
            />
            {/* <p 
              className="party-title-1"
            >ဘယ်နေရာလဲ...</p>
            <p
              className="party-title-2"
            >ဘာပွဲလဲ...?</p> */}
            <p className="party-content">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း Refresh Nights တွေမှာ
              စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို Music Event တွေ
              ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>
            <div className="slidder-wrapper">
              <Carousel className="">
                <CarouselContent>
                  {sliders.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="p-2">
                        <img
                          src={slide.image}
                          alt="HNK Refresh Music"
                          className="slider-img"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="promotion-wrapper">
          <img
            src={outletPromotion}
            alt="HNK Refresh Music"
            className="promotion-title"
          />
          <p className="promotion-content">
            ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း Refresh Nights တွေမှာ
            စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို Music Event တွေ
            ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
          </p>
          <div className="promotion-btn-group">
            <button
              className={`promotion-btn ${
                promotionTab === true ? "active" : ""
              }`}
              onClick={() => setPromotionTab(true)}
            >
              Promotion
            </button>
            <button
              className={`all-btn ${promotionTab === false ? "active" : ""}`}
              onClick={() => setPromotionTab(false)}
            >
              All
            </button>
          </div>
          {promotionTab && (
            <div className="promotion-container">
              {outletPromotions.map((item, index) => (
                <button
                  key={index}
                  className="promotion-item"
                  onClick={() => openModal(item)}
                >
                  <img
                    src={item.image}
                    alt="HNK Fresh Drink"
                    className="promotion_img"
                  />
                  <span className="outlet_name">{item.name}</span>
                </button>
              ))}
            </div>
          )}
          {!promotionTab && (
            <>
              <div className="nearby-container">
                <span className="nearby-label">Near by</span>
                <Select defaultValue={selectedDistance}>
                  <SelectTrigger className="w-[80px] text-[#00F944] rounded-full border-[#00F944]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10km">10km</SelectItem>
                    <SelectItem value="20km">20km</SelectItem>
                    <SelectItem value="30km">30km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="promotion-container">
                {all_outlets.map((item, index) => (
                  <button
                    key={index}
                    className="outlet-items"
                    onClick={() => openModal(item)}
                  >
                    <img
                      src={item.image}
                      alt="HNK Fresh Drink"
                      className="outlet_img"
                    />
                    <span className="outlet_name">{item.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          {selectedOutlet && (
        <OutletModal outlet={selectedOutlet} onClose={closeModal} />
      )}
          <div className="footer">
            <img
              style={{ width: "100%" }}
              src={footerImg}
              alt="Henineken"
              title="Henineken"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartyReader;
