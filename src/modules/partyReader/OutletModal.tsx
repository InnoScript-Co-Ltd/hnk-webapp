import React from "react";
import "./outletDetailStyle.css";
import outletImg from "@/assets/images/outlet.png";
const OutletModal = ({outlet, onClose}) => {
  console.log(outlet);
  
  return (
    <div className="overlay">
    <div className="outlet-detail-container">
      <div className="outlet-detail-content">
        <img src={outletImg} alt="" className="outlet-cover-img" />
        <p className="outlet-title">Outdoor TOV</p>
        <div className="outlet-content">
          <div className="outlet-item">
            <div className="outlet-item-label">
              <span>Location</span>
            </div>
            <div className="outlet-item-value">
              <span>:{outlet.name}</span>
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
          <div className="outlet-item">
            <div className="outlet-item-label w-3/10">
              <span className="promotion-notice">Promotion</span>
            </div>
            <div className="outlet-item-value w-7/10">
              <span className="promotion-notice">
                :{outlet.promotion}
              </span>
              <span>{outlet.promo_description}</span>
            </div>
          </div>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
    </div>
  );
};

export default OutletModal;
