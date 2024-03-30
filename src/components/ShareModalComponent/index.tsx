import './style.css'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaFacebookMessenger, FaTelegram, FaWhatsapp } from "react-icons/fa";

const color = '#FFF'

const shareMedias = [
    {media: <FaFacebookF color={color} />},
    {media: <FaInstagram color={color} />},
    {media: <FaFacebookMessenger color={color} />},
    {media: <FaTelegram color={color} />},
    {media: <FaWhatsapp color={color} />},
    // {media: <FaViber color={color} />},
]

type propType = {
    closeModal: () => void,
}

const ShareModalComponent = (props: propType) => {
    const {closeModal} = props;
    const linkValue = window.location.host;

    const onCopyLink = () => {
        navigator.clipboard.writeText(linkValue);
        closeModal();
    }

  return (
    <div  className='share-modal-container'>
        <div onClick={closeModal} className='close-modal-section' />
        <motion.div
        initial={{y: 300}}
        animate={{y: 0}}
        exit={{y: 300}}
        className='share-modal'>
            <p className='share-title'>
                Share
            </p>
            <div className='social-group'>
                {
                    shareMedias.map((media, index) => (
                        <div key={index} className='social-container'>
                            {media.media}
                        </div>
                    ))
                }
            </div>
            <div className='share-input-container'>
                <input id='share-input' disabled className='share-input' type='text' value={linkValue} />
                <button
                onClick={onCopyLink}
                className='copy-link-btn'
                >
                    Copy Link
                </button>
            </div>
        </motion.div>
    </div>
  )
}

export default ShareModalComponent