import React from 'react'
import './eventModalStyle.css'

export default function EventModal({description, onClose}:any) {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] backdrop-blur-sm bg-white/30">
      <div className="modal-detail-container overflow-hidden">
        <div className="modal-detail-content">
          
          <p className="modal-title">Event Detail</p>
          <div className="modal-content">
              <div className="modal-item-value"> {description} </div>
          </div>
          <button className="close-button" style={{ paddingBottom: '10px' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
