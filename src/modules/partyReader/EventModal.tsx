import './eventModalStyle.css'

export default function EventModal({description, onClose, title}:any) {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[9999] backdrop-blur-sm bg-white/30">
      <div className="modal-detail-container overflow-hidden">
        <div className="modal-detail-content" style={{padding: "20px"}}>
          <p className="modal-title">{title}</p>
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
