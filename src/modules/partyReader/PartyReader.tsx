/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useCallback, useEffect, useState } from "react";
import slide1 from "@/assets/images/event1.png";
import slide2 from "@/assets/images/event2.png";
import footerImg from "@/assets/images/footer.png";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import OutletModal from "./OutletModal";

import "./partyReaderStyle.css";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import RotatingSlogan from "@/components/RotatingSlogan";
import LoadingComponent from "@/components/LoadingComponent.tsx";
interface Location {
  lat: number;
  long: number;
  distance: number;
}
import { openModal as openErrorModal } from "@/store/modalSlice";
import { useDispatch } from "react-redux";
import EventSliderComponent from "./EventSlider";
import EventModal from "./EventModal";

type btnProps = {
  onBtnClick: () => void;
  label: string;
  backgroundColor?: string;
  minWidth?: string;
  arrow?: boolean;
  disabled?: boolean;
};

const sliders = [
  {
    id: 1,
    image: slide1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam asperiores, dolor possimus amet veritatis, labore illo cumque iste natus ratione, dicta reiciendis nostrum odit id ullam eligendi expedita voluptatem?",
  },
  {
    id: 2,
    image: slide2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam asperiores, dolor possimus amet veritatis, labore illo cumque iste natus ratione, dicta reiciendis nostrum odit id ullam eligendi expedita voluptatem?",
  },
  {
    id: 3,
    image: slide1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ipsam asperiores, dolor possimus amet veritatis, labore illo cumque iste natus ratione, dicta reiciendis nostrum odit id ullam eligendi expedita voluptatem?",
  },
];

const PartyReader = (props: btnProps) => {
  const { onBtnClick, label, backgroundColor, minWidth, arrow, disabled } =
    props;
  const [promotionTab, setPromotionTab] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const navigate = useNavigate();
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [selectedDistance, setSelectedDistance] = useState<any>("10km");
  const [selectedOutlet, setSelectedOutlet] = useState<any>(null);
  const [outletList, setOutletList] = useState<Array<any>>([]);
  const [selectChange, setSelectChange] = useState<boolean | undefined>();
  const [loading, setLoading] = useState<boolean>();
  const [openEventModal, setOpenEventModal] = useState<boolean>();
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slides, setSlides] = useState<Array<any>>([]);
  const dispatch = useDispatch();

  const openModal = (outlet: SetStateAction<null>) => {
    setSelectedOutlet(outlet);
  };

  const closeModal = () => {
    setSelectedOutlet(null);
  };

  const closeEventModal = () => {
    setOpenEventModal(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (promotionTab && selectedDistance && position !== null) {
            setUserLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
              distance: Number(selectedDistance.replace(/km/g, "")),
            });
          } else {
            setUserLocation(null);
          }
        },
        (error) => {
          // console.warn(error.message);
          dispatch(
            openErrorModal({
              title: "Location Error",
              message: `${error.message}`,
              theme: "error",
            })
          );
        }
      );
    } else {
      // console.error("Geolocation is not supported by this browser.");
      dispatch(
        openErrorModal({
          title: "Location Error",
          message: "Geolocation is not supported by this browser.",
          theme: "error",
        })
      );
    }
  }, [selectedDistance, navigator, promotionTab]);

  const getOutlet = useCallback(async () => {
    setLoading(true);

    try {
      const response: any = await getRequest("outlet", userLocation);

      if (response.status === 200) {
        setOutletList(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      dispatch(
        openErrorModal({
          title: "Outlet Error",
          message: "Failed to get outlets",
          theme: "error",
        })
      );
      setLoading(false);
    }
  }, [userLocation]);

  const getEventSliders = async() => {
    try{
      const response: any = await getRequest("/event-slider");
      if(response.status === 200) {
      console.log(response);
      setSlides(response.data.data)
      }
    } catch (error) {
      dispatch(
        openErrorModal({
          title: "Event Slide Error",
          message: "Failed to get events",
          theme: "error",
        })
      );
    }
  }

  console.log(slides[0]?.cover_photo.image);
  
  
  useEffect(() => {
    getOutlet();
  }, [getOutlet]);

  useEffect(() => {
    getEventSliders()
  },[])

  return (
    <div className="partyreader-container relative max-w-[420px] mx-auto">
      {loading && <LoadingComponent />}
      {/* <Header backgroundColor={"#000242"} /> */}
      <div className="partyreader-content h-[100vh]">
        {/* <div className="partyreader-header">
          <img className="hnk-image" src={hnkRefreshMusicImage} alt="HNK Refresh Music" title="HNK Refresh Music" />
        </div> */}
        {/* <img className="menubar-btn" src={menubarIcon} alt="HNK Refresh Music" title="HNK Refresh Music" /> */}

        <div className="slider-content-wrapper">
          <RotatingSlogan />
          <div className="party-content-wrapper">
            <h1 className=" flex justify-start items-start gap-2 mx-auto text-primary-white text-white text-[40px]">
              b,fae&mvJ...
              <span className=" text-primary-white text-green">
                bmyGJvJ...
              </span>{" "}
              <p className=" text-secondary-green ">?</p>{" "}
            </h1>
            <p className="party-content px-[20px] font-medium leading-[19px]">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း Refresh Nights တွေမှာ
              စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို Music Event တွေ
              ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>
            {sliders.length > 0 && 
              <div className="slidder-wrapper mt-[20px] mb-[20px]">
              <EventSliderComponent autoPlay>
                {slides?.map((slide, index) => (
                  <div className="p-2" key={index}>
                    <img
                      src={`${endpoints.image}/${slide?.cover_photo.image}`}
                      alt="HNK Refresh Music"
                      className="slider-img"
                      onClick={() => {
                        setOpenEventModal(true);
                        setDescription(slide.description);
                        setTitle(slide.name);
                      }}
                    />
                  </div>
                ))}
              </EventSliderComponent>
            </div>
            }
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
              className={`btn-style ${promotionTab === true ? "active" : ""}`}
              onClick={() => setPromotionTab(true)}
            >
              <span className="button-label">Promotion</span>
              {arrow && (
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
            <button
              className={`btn-style ${promotionTab === false ? "active" : ""}`}
              onClick={() => setPromotionTab(false)}
            >
              <span className="button-label">All</span>
              {arrow && (
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
          </div>
          {promotionTab && (
            <>
              <div className="nearby-container">
                <span className="nearby-label">Near by</span>
                <Select
                  onOpenChange={(e: any) => setSelectChange(e)}
                  defaultValue={selectedDistance}
                  onValueChange={setSelectedDistance}
                >
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
              <img
                className="absolute z-50 bottom-[100px] left-[20px]"
                src={enjoyLogo}
              />
            </div>
          </div>
        </div>
      </div>
      {selectedOutlet && (
        <OutletModal outlet={selectedOutlet} onClose={closeModal} />
      )}
      {openEventModal && (
        <EventModal description={description} title={title} onClose={closeEventModal} />
      )}
    </div>
  );
};

export default PartyReader;
