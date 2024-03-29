import React, { useEffect, useState } from 'react'
import './style.css'

const shareMedias = [
    'FB',
    'Insta',
    'Msgr',
    'Tele',
    'Whats',
    'VB'
]

type propType = {
    closeModal: () => void,
}

const ShareModalComponent = (props: propType) => {
    const {closeModal} = props;
    const [linkValue, setLinkValue] = useState(window.location.host);

    const onCopyLink = () => {
        navigator.clipboard.writeText(linkValue);
        closeModal();
    }

  return (
    <div className='share-modal'>
        <p className='share-title'>
            Share
        </p>
        <div className='social-group'>
            {
                shareMedias.map((media, index) => (
                    <div key={index} className='social-container'>
                        {media}
                    </div>
                ))
            }
        </div>
        <div className='share-input-container'>
            <input disabled className='share-input' type='text' value={linkValue} />
            <button
            onClick={onCopyLink}
            className='copy-link-btn'
            >
                Copy Link
            </button>
        </div>
    </div>
  )
}

export default ShareModalComponent