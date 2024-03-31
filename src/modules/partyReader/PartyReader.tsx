/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { endpoints } from "@/constants/endpoints";
import RotatingSlogan from "@/components/RotatingSlogan";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { Header } from "@/components/Header";
interface Location {
  lat: number;
  long: number;
  distance: number;
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

const PartyReader = () => {
  const [promotionTab, setPromotionTab] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedDistance, setSelectedDistance] = useState<any>("10km");
  const [selectedOutlet, setSelectedOutlet] = useState<any>(null);
  const [outletList, setOutletList] = useState<Array<any>>([]);
  const [selectChange, setSelectChange] = useState<boolean | undefined>();
  const [loading, setLoading] = useState<boolean>();

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
          
          if (promotionTab && selectedDistance && position !== null) {
            setUserLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
              distance: Number(selectedDistance.replace(/km/g, ""))
            });
          } else {
            setUserLocation(null);
          }
        },
        (error) => {
          console.warn(error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [selectedDistance, navigator, promotionTab]);

  const getOutlet = useCallback(async () => {
    setLoading(true);
    const response: any = await getRequest('outlet', userLocation);

    if (response.status === 200) {
      setOutletList(response.data.data);
      setLoading(false)
    }

    setLoading(false)
  }, [userLocation])


  useEffect(() => {
    getOutlet()
  }, [getOutlet])
  

  return (
    <div className="partyreader-container">
      {
        loading && <LoadingComponent />
      }
      <div className="partyreader-content h-[100vh]">
        {/* <div className="partyreader-header">
          <img className="hnk-image" src={hnkRefreshMusicImage} alt="HNK Refresh Music" title="HNK Refresh Music" />
        </div> */}
        {/* <img className="menubar-btn" src={menubarIcon} alt="HNK Refresh Music" title="HNK Refresh Music" /> */}

        <div className="slider-content-wrapper">
          <Header backgroundColor={"#000242"} />
          <RotatingSlogan />
          <div className="party-content-wrapper">
            {/* <img
              src={partyTitle}
              alt="HNK Refresh Music"
              className="party-title"
            /> */}
            <h1 className=" flex justify-start items-start gap-2 mx-auto text-primary-white text-white text-[40px]">b,fae&mvJ...<span className=" text-primary-white text-green">bmyGJvJ...</span> <p className=" text-secondary-green ">?</p> </h1>
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
            <div className="slidder-wrapper mt-[20px] mb-[20px]">
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
          <h1 className=" text-secondary-green text-white text-[30px] text-center mt-[20px]">
            Outlet <span className=" text-secondary-green">Promotion</span>
          </h1>
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
            <>
              <div className="nearby-container">
                <span className="nearby-label">Near by</span>
                <Select onOpenChange={(e) => setSelectChange(e)} defaultValue={selectedDistance} onValueChange={setSelectedDistance}>
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
            </>
          )}

          <div className="promotion-container px-[20px] !justify-between gap-[20px]">
            {outletList.map((item: any, index: any): any => (
              <button
                key={index}
                className="outlet-items w-[150px] md:w-[180px]"
                onClick={() => selectChange !== true && openModal(item)}
              >
                <img
                  src={`${endpoints.image}/${item?.image?.image}`}
                  alt="HNK Fresh Drink"
                  className="outlet_img min-w-[150px] md:min-w-[180px]"
                />
                <p className="outlet_name w-full !pt-[10px]">{item.name}</p>
              </button>
            ))}
          </div>
          <div className="footer relative z-0">
            <img
              style={{ width: "100%" }}
              src={footerImg}
              alt="Henineken"
              title="Henineken"
            />
            <div>
              <img className="enjoy-logo absolute z-50 bottom-[80px] left-[20px]" src={enjoyLogo} />
            </div>
          </div>
        </div>
      </div>
      {selectedOutlet && (
            <OutletModal outlet={selectedOutlet} onClose={closeModal} />
          )}
    </div>
  );
};

export default PartyReader;
