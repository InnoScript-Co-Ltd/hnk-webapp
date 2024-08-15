import { endpoints } from '@/constants/endpoints'
import './eventModalStyle.css'

export default function EventModal({ dataSource, onClose }: any) {

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] backdrop-blur-sm bg-white/30">
      <div className="modal-detail-container">
        <div className="modal-detail-content">

          <div className="event-modal-content">
            <img
              style={{ marginBottom: "20px" }}
              src={`${endpoints.image}/${dataSource.cover_photo.image}`}
              alt={dataSource.name}
              title={dataSource.name}
            />

            <h3 className='title-name'> {dataSource.name} </h3>

            <div className="modal-item-value">
              <span> Location : </span>
              <span> {dataSource.location} </span>
            </div>

            <div className="modal-item-value">
              <span> Address : </span>
              <span> {dataSource.address} </span>
            </div>


            <div className="modal-item-value">
              <span> Date : </span>
              <span> {dataSource.date} </span>
            </div>

            <div className="modal-item-value">
              <span> Time : </span>
              <span> {dataSource.time} </span>
            </div>

            {dataSource.artist_lineup && (
              <div className='artist-lineup'>
                <span> Artist Line Up </span>
                <span> {dataSource.artist_lineup} </span>
              </div>
            )}

            <div className='promotion-item-value'>
              <label> Promotion :  </label>
              <span> {dataSource.promotion}</span>
            </div>
          </div>

          <div className='close-button-wrapper'>
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
