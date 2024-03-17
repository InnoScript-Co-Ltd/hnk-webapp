import React, { useEffect, useState } from "react";
import "./partyReaderStyle.css";
import starIcon from "@/assets/images/star.png";
import menubarIcon from "@/assets/images/menu.png";
import hnkRefreshMusicImage from "@/assets/images/hnk_refresh_music.png";
import outletPromotion from "@/assets/images/Outlet_Promotion.png";
import profileImage from "@/assets/images/profile.png";
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
import { useNavigate } from "react-router-dom";

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
    name: "Outlet Name",
  },
  {
    id: 2,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 3,
    image: promotion,
    name: "Outlet Name",
  },
];

const all_outlets = [
  {
    id: 1,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 2,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 3,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 4,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 5,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 6,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 7,
    image: promotion,
    name: "Outlet Name",
  },
  {
    id: 8,
    image: promotion,
    name: "Outlet Name",
  },
]

const PartyReader = () => {
  const [promotionTab, setPromotionTab] = useState(true);
  const navigate =  useNavigate()
  const [userLocation, setUserLocation] = useState<Location | null>(null);

  console.log(userLocation);
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => { 
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
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
        <div className="partyreader-header">
          <img
            className="menubar-btn"
            src={menubarIcon}
            alt="HNK Refresh Music"
            title="HNK Refresh Music"
          />
          <img
            src={hnkRefreshMusicImage}
            alt="HNK Refresh Music"
            title="HNK Refresh Music"
          />
          <img
            className="profile-btn"
            src={profileImage}
            alt="HNK Refresh Music"
            title="HNK Refresh Music"
          />
        </div>

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
          <div className="party-content-wrapper">
            <img
              src={partyTitle}
              alt="HNK Refresh Music"
              className="party-title"
            />
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
            <div className="promotion-container" >
              {outletPromotions.map((item, index) => (
                <button key={index} className="promotion-item" onClick={(() => navigate(`/outlet-detail/${item.id}`))}>
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
            <div className="promotion-container" >
            {all_outlets.map((item, index) => (
              <button key={index} className="outlet-item" onClick={(() => navigate(`/outlet-detail/${item.id}`))}>
                <img
                  src={item.image}
                  alt="HNK Fresh Drink"
                  className="outlet_img"
                />
                <span className="outlet_name">{item.name}</span>
              </button>
            ))}
          </div>
          )

          }
          <div className="footer">
                <img style={{width: "100%"}} src={footerImg} alt="Henineken" title="Henineken" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PartyReader;
