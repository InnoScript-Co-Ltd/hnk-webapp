import React from "react";
import "./outletDetailStyle.css";
import outletImg from "@/assets/images/outlet.png";
const OutletDetail = () => {

    

  return (
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
              <span>:RedStar Bar</span>
            </div>
          </div>
          <div className="outlet-item">
            <div className="outlet-item-label">
              <span>Address</span>
            </div>
            <div className="outlet-item-value">
              <span>:RedStar Bar</span>
            </div>
          </div>
          <div className="outlet-item">
            <div className="outlet-item-label"> 
              <span>Ph no</span>
            </div>
            <div className="outlet-item-value">
              <span>:RedStar Bar</span>
            </div>
          </div>
          <div className="outlet-item">
            <div className="outlet-item-label">
              <span>Date</span>
            </div>
            <div className="outlet-item-value">
              <span>:RedStar Bar</span>
            </div>
          </div>
          <div className="outlet-item">
            <div className="outlet-item-label">
              <span>Time</span>
            </div>
            <div className="outlet-item-value">
              <span>:RedStar Bar</span>
            </div>
          </div>
          <div className="outlet-item">
          <div className="outlet-item-label w-3/10">
              <span className="promotion-notice">Promotion</span>
            </div>
            <div className="outlet-item-value w-7/10">
              <span className="promotion-notice">:*HNK Hour (8pm) *Buy 1 Get 1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletDetail;
