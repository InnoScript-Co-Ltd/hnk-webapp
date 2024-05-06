import './eventModalStyle.css'

export default function EventModal({ dataSource, onClose }: any) {

  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] backdrop-blur-sm bg-white/30">
      <div className="modal-detail-container overflow-hidden">
        <div className="modal-detail-content">

          <div className="event-modal-content">
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

            <div className='promotion-item-value'>
              <label> Promotion :  </label>
              <span> {dataSource.promotion}</span>
            </div>
          </div>

          <button className="close-button" style={{ paddingBottom: '10px' }} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
