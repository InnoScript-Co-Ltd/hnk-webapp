/* eslint-disable @typescript-eslint/no-explicit-any */
import "./outletDetailStyle.css";
import outletImg from "@/assets/images/outlet.png";

const OutletModal = ({ outlet, onClose }: any) => {

  return (
    <div className="overlay">
      <div className="outlet-detail-container">
        <div className="outlet-detail-content">
          <img src={outletImg} alt="" className="outlet-cover-img" />
          <p className="outlet-title">Outdoor TOV</p>
          <div className="outlet-content">
            <div className="outlet-item">
              <div className="outlet-item-label"> Location </div>
              <div className="outlet-item-value"> :{outlet.name} </div>
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
              <span className="promotion-notice"> :{outlet.promotion}</span>
            </div>
          </div>
          <button className="close-button" style={{ paddingBottom: '10px' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutletModal;
