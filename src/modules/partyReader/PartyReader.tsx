/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useCallback, useEffect, useState } from "react";
import menubarIcon from "@/assets/images/menu.png";
import hnkRefreshMusicImage from "@/assets/images/hnk_refresh_music.png";
import starIcon from "@/assets/images/star.png";
import outletPromotion from "@/assets/images/Outlet_Promotion.png";
import partyTitle from "@/assets/images/partyTitle.png";
import slide1 from "@/assets/images/event1.png";
import slide2 from "@/assets/images/event2.png";
import promotion from "@/assets/images/promotion.png";
import footerImg from "@/assets/images/footer.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
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

import "./partyReaderStyle.css";
import { getRequest } from "@/lib/axios";
interface Location {
  lat: number;
  long: number;
  distance : number;
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedDistance, setSelectedDistance] = useState("10km");
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [outletList, setOutletList] = useState([]);

  const openModal = (outlet: SetStateAction<null>) => {
    setSelectedOutlet(outlet);
  };

  const closeModal = () => {
    setSelectedOutlet(null);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            distance: selectedDistance === '10km' ? 10 : Number(selectedDistance)
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [selectedDistance]);

  const getOutlet = useCallback(async () => {
    const response : any = await getRequest('outlet', userLocation)
    if(response.status === 200){
      console.log(response);
      
    }
  }, [userLocation])

  useEffect(() => {
    getOutlet()
  }, [getOutlet])

  return (
    <div className="partyreader-container">
      <div className="partyreader-content h-[100vh]">
        <div className="partyreader-header">
          <img className="hnk-image" src={hnkRefreshMusicImage} alt="HNK Refresh Music" title="HNK Refresh Music" />
        </div>
        <img className="menubar-btn" src={menubarIcon} alt="HNK Refresh Music" title="HNK Refresh Music" />

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
            {/* <p 
              className="party-title-1"
            >ဘယ်နေရာလဲ...</p>
            <p
              className="party-title-2"
            >ဘာပွဲလဲ...?</p> */}
            <p className="party-content px-[20px] font-medium leading-[19px]">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း Refresh Nights တွေမှာ
              စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို Music Event တွေ
              ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>
            <div className="slidder-wrapper mt-[20px]">
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
          <p className="promotion-content px-[20px] font-medium leading-[19px]">
            ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း Refresh Nights တွေမှာ
            စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို Music Event တွေ
            ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
          </p>
          <div className="promotion-btn-group">
            <button
              className={`promotion-btn ${promotionTab === true ? "active" : ""
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
              {outletList.map((item: any, index: any): any => (
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
                <Select defaultValue={selectedDistance} onValueChange={setSelectedDistance}>
                  <SelectTrigger className="w-[80px] text-[#00F944] rounded-full border-[#00F944]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10km</SelectItem>
                    <SelectItem value="20">20km</SelectItem>
                    <SelectItem value="30">30km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="promotion-container">
                {all_outlets.map((item: any, index: any): any => (
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
          <div className="footer relative z-0">
            <img
              style={{ width: "100%" }}
              src={footerImg}
              alt="Henineken"
              title="Henineken"
            />
            <div>
              <img className="enjoy-logo z-50 bottom-[80px] left-[20px]" src={enjoyLogo} />
            </div>
          </div>
        </div>
        {selectedOutlet && (
            <OutletModal outlet={selectedOutlet} onClose={closeModal} />
          )}
      </div>
    </div>
  );
};

export default PartyReader;
