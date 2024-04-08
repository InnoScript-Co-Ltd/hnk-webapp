/* eslint-disable @typescript-eslint/no-explicit-any */
import { endpoints } from "@/constants/endpoints";
import "./outletDetailStyle.css";
import outletImage from '@/assets/images/outlet.png';

const OutletModal = ({ outlet, onClose }: any) => {
    return (
        <div className="w-full h-full fixed top-0 left-0 z-[9999] backdrop-blur-sm bg-white/30">
            <div className="outlet-detail-container overflow-hidden">
                <div className="outlet-detail-content">
                    {outlet?.image?.image &&
                        <img
                        src={`${endpoints.image}/${outlet?.image?.image}`}
                        alt=""
                        className="outlet-cover-img min-h-[200px]"
                    />
                    }
                    {!outlet?.image?.image &&
                        <img
                        src={outletImage}
                        alt=""
                        className="outlet-cover-img min-h-[200px]"
                    />
                    }
                    <p className="outlet-title">Outdoor TOV</p>
                    <div className="outlet-content">
                        <div className="outlet-item">
                            <div className="outlet-item-label"> Location </div>
                            <div className="outlet-item-value">
                                {" "}
                                :{outlet.name}{" "}
                            </div>
                        </div>
                        <div className="outlet-item">
                            <div className="outlet-item-label">
                                <span>Address</span>
                            </div>
                            <div className="outlet-item-value">
                                <span>:{outlet.address}</span>
                            </div>
                        </div>
                        <div className="outlet-item">
                            <div className="outlet-item-label">
                                <span>Ph no</span>
                            </div>
                            <div className="outlet-item-value">
                                <span>:{outlet.phone}</span>
                            </div>
                        </div>
                        <div className="outlet-item">
                            <div className="outlet-item-label">
                                <span>Date</span>
                            </div>
                            <div className="outlet-item-value">
                                <span>:{outlet.date}</span>
                            </div>
                        </div>
                        <div className="outlet-item">
                            <div className="outlet-item-label">
                                <span>Time</span>
                            </div>
                            <div className="outlet-item-value">
                                <span>:{outlet.time}</span>
                            </div>
                        </div>

                        <div className="promotion-note">
                            <span className="promotion-notice">Promotion</span>
                            <span className="promotion-notice">
                                {" "}
                                :{outlet.promotion}
                            </span>
                        </div>
                    </div>
                    <button
                        className="close-button"
                        style={{ paddingBottom: "10px" }}
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OutletModal;
