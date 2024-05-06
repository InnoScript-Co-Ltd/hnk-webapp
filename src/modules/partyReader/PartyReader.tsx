/* eslint-disable @typescript-eslint/no-unused-vars */
/** 
Component Name              - Party Radar Component [Page]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { useCallback, useEffect, useState } from "react";
// import { SetStateAction, useCallback, useEffect, useState } from "react";
import footerImg from "@/assets/images/footer.png";
// import outletpromotionTitle from "@/assets/svgs/OutletPromotion.svg";
import whereEvent from "@/assets/svgs/whereEvent.svg";
import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import OutletModal from "./OutletModal";
import { getRequest } from "@/lib/axios";
import { endpoints } from "@/constants/endpoints";
import RotatingSlogan from "@/components/RotatingSlogan";
import LoadingComponent from "@/components/LoadingComponent.tsx";
// import { openModal as openErrorModal } from "@/store/modalSlice";
// import { useDispatch } from "react-redux";
import EventSliderComponent from "./EventSlider";
import EventModal from "./EventModal";
// import { INTERNAL_SERVER, imageTitle } from "@/constants/config";
import { imageTitle } from "@/constants/config";
import "./partyReaderStyle.css";

type btnProps = {
  onBtnClick: () => void;
  label: string;
  backgroundColor?: string;
  minWidth?: string;
  arrow?: boolean;
  disabled?: boolean;
};

const PartyReader = (_props: btnProps) => {
  // const { arrow } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [promotionTab, setPromotionTab] = useState<any>(null);
  // const [userLocation, setUserLocation] = useState<any | null>({ lat: "", long: "" });
  // const [distance, setDistance] = useState<string>("10");
  const [selectedOutlet, setSelectedOutlet] = useState<any>(null);
  // const [outletList, setOutletList] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openEventModal, setOpenEventModal] = useState<boolean>();
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [slides, setSlides] = useState<Array<any>>([]);

  // const dispatch = useDispatch();

  // const openModal = (outlet: SetStateAction<null>) => {
  //   setSelectedOutlet(outlet);
  // };

  const closeModal = () => {
    setSelectedOutlet(null);
  };

  const closeEventModal = () => {
    setOpenEventModal(false);
  };

  /** Outlet Data Retrive With GeoLocation */
  // const loadingOutletWithLocation = async () => {
  //   setLoading(true);

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(async (success: any) => {
  //       const getCurrentLocation = await success.coords;

  //       if (getCurrentLocation.latitude && getCurrentLocation.longitude) {
  //         const updateUserLocation = { ...userLocation };
  //         updateUserLocation.lat = getCurrentLocation.latitude;
  //         updateUserLocation.long = getCurrentLocation.longitude
  //         setUserLocation(updateUserLocation);
  //       }
  //     },
  //       async (error: any) => {
  //         dispatch(
  //           openErrorModal({
  //             title: "Location Access",
  //             message: error.message
  //           })
  //         );
  //         setPromotionTab("ALL");
  //         setLoading(false);
  //       });
  //     setLoading(false);
  //   }

  //   if (userLocation.lat && userLocation.long) {
  //     setLoading(true);
  //     await getRequest(`${endpoints.outlet}?lat=${userLocation.lat}&long=${userLocation.long}&distance=${distance}`)
  //       .then((result: any) => {
  //         if (result.status === 200) {
  //           setOutletList(result.data.data);
  //           setLoading(false);
  //           return;
  //         }
  //         dispatch(
  //           openErrorModal({
  //             title: "Something Went Wrong!",
  //             message: INTERNAL_SERVER,
  //             theme: "error",
  //           })
  //         );
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         dispatch(
  //           openErrorModal({
  //             title: "Something Went Wrong!",
  //             message: INTERNAL_SERVER,
  //             theme: "error",
  //           })
  //         )
  //         setLoading(false);
  //       });
  //   }
  //   setLoading(false);
  // }

  /** Outlet Data Retrive Without GeoLocation */
  // const loadingOutlet = async () => {
  //   setLoading(true);
  //   await getRequest(endpoints.outlet)
  //     .then((result: any) => {
  //       if (result.status === 200) {
  //         setOutletList(result.data.data);
  //         setLoading(false);
  //         return;
  //       }

  //       dispatch(
  //         openErrorModal({
  //           title: "Something Went Wrong!",
  //           message: INTERNAL_SERVER,
  //           theme: "error",
  //         })
  //       );
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       dispatch(
  //         openErrorModal({
  //           title: "Something Went Wrong!",
  //           message: INTERNAL_SERVER,
  //           theme: "error",
  //         })
  //       )
  //       setLoading(false);
  //     });
  // }

  /** Loading GeoLoacation */
  // const loadingGeoLocation = useCallback(async () => {
  //   setLoading(true);
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(async (success: any) => {
  //       const getCurrentLocation = await success.coords;

  //       if (getCurrentLocation.latitude && getCurrentLocation.longitude) {
  //         const updateUserLocation = { ...userLocation };
  //         updateUserLocation.lat = getCurrentLocation.latitude;
  //         updateUserLocation.long = getCurrentLocation.longitude;
  //         setUserLocation(updateUserLocation);
  //         updateUserLocation.distance = distance;
  //         setPromotionTab("PROMOTION");
  //       }
  //     },
  //       async () => {
  //         setPromotionTab("ALL");
  //       });
  //   }
  // }, []);

  /** Loading Event Slider */
  const loadingEventSlider = useCallback(async () => {
    setLoading(true);
    const resultEventSlider: any = await getRequest(endpoints.eventSlider);

    if (resultEventSlider.status === 200) {
      setSlides(resultEventSlider.data.data);
      setLoading(false);
      return;
    }
    setLoading(false);
  }, []);

  /** Watch GeoLoacation */
  // useEffect(() => {
  //   loadingGeoLocation();
  // }, [loadingGeoLocation]);

  /** Watch Promotion Tab */
  // useEffect(() => {
  //   if (promotionTab && promotionTab === "ALL") {
  //     loadingOutlet();
  //     return;
  //   }

  //   if (promotionTab && promotionTab === "PROMOTION") {
  //     loadingOutletWithLocation();
  //     return;
  //   }
  // }, [promotionTab]);

  /** Watch Event Slider */
  useEffect(() => {
    loadingEventSlider();
  }, [loadingEventSlider]);

  /** Watch Distance */
  // useEffect(() => {
  //   if(distance) {
  //     loadingOutletWithLocation();
  //   }
  // }, [distance]);

  return (
    <div className="partyreader-container relative max-w-[420px] mx-auto">
      {loading && <LoadingComponent />}
      <div className="partyreader-content h-[100vh]">
        <div className="slider-content-wrapper">
          <RotatingSlogan />
          <div className="party-content-wrapper">
            <div className="outlet-promotion-title">
              <img src={whereEvent} alt={imageTitle} title={imageTitle} />
            </div>
            <p className="party-content px-[20px] font-medium leading-[19px]">
              ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း <span className="hnk-effect"> Refresh Nights </span> တွေမှာ
              စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို <span className="hnk-effect"> Music Event </span> တွေ
              ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
            </p>

            {slides && slides.length > 0 && (
              <div className="slidder-wrapper mt-[20px] mb-[20px]">
                <EventSliderComponent autoPlay>

                  {slides.map((slide, index) => (
                    <div className="p-2" key={index}>
                      {slide?.cover_photo.image &&
                        <img
                          src={`${endpoints.image}/${slide?.cover_photo.image}`}
                          alt="HNK Refresh Music"
                          className="slider-img"
                          onClick={() => {
                            setOpenEventModal(true);
                            setDescription(slide);
                            setTitle(slide.name);
                          }}
                        />
                      }
                      <h3 className="event-slider-name"> {slide.name }</h3>
                    </div>
                  ))}
                </EventSliderComponent>
              </div>
            )}
          </div>
        </div>
        <div className="promotion-wrapper">
          {/* <div className="outlet-promotion-title">
            <img src={outletpromotionTitle} alt={imageTitle} title={imageTitle} />
          </div> */}
          {/* <p className="promotion-content px-[20px] font-medium leading-[19px]">
            ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားရင်း <span className="hnk-effect"> Refresh Nights </span> တွေမှာ
            စီးမျောဖို့ ရန်ကုန်မြို့ရဲ့ ဘယ်နေရာတွေမှာ ဘယ်လို <span className="hnk-effect"> Music Event </span> တွေ
            ရှိနေမလဲ ရှာဖွေကြည့်ရအောင်…
          </p> */}
          {/* <div className="promotion-btn-group">
            <button
              className={`btn-style ${promotionTab === 'PROMOTION' ? "active" : ""}`}
              onClick={() => setPromotionTab("PROMOTION")}
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
              className={`btn-style ${promotionTab === "ALL" ? "active" : ""}`}
              onClick={() => setPromotionTab("ALL")}
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
          </div> */}
          {/* {promotionTab === "PROMOTION" && (
            <>
              <div className="nearby-container">
                <span className="nearby-label">Near by</span>
                <Select
                  defaultValue={distance}
                  onValueChange={async (e) => {
                    setDistance(e);
                  }}
                >
                  <SelectTrigger className="w-[80px] text-[#00F944] rounded-full border-[#00F944]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 km </SelectItem>
                    <SelectItem value="20">20 km </SelectItem>
                    <SelectItem value="30">30 km </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )} */}
{/* 
          <div className="promotion-container px-[20px] !justify-between gap-[20px]">
            {outletList.map((item: any, index: any): any => (
              <button
                key={index}
                className="outlet-items w-[150px] md:w-[180px]"
                onClick={() => openModal(item)}
              >
                {item?.image?.image &&
                  <img
                    src={`${endpoints.image}/${item?.image?.image}`}
                    alt={imageTitle}
                    title={imageTitle}
                    className="outlet_img min-w-[150px] md:min-w-[180px]"
                  />
                }
                <p className="outlet_name w-full !pt-[10px]">{item.name}</p>
              </button>
            ))}
          </div> */}
          <div className="footer relative z-0">
            <img
              style={{ width: "100%" }}
              src={footerImg}
              alt={imageTitle}
              title={imageTitle}
            />
            <div>
              <img
                className="absolute z-50 bottom-[100px] left-[20px]"
                src={enjoyLogo}
                alt={imageTitle}
                title={imageTitle}
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
