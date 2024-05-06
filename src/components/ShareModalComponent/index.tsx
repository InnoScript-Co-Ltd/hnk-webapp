/** 
Component Name              - Social Media Share Component [Component]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { baseURL } from '@/constants/endpoints';
import { motion } from 'framer-motion'
// import { FaFacebookF, FaInstagram, FaFacebookMessenger, FaTelegram, FaWhatsapp } from "react-icons/fa";
// import { FacebookShareButton, TelegramShareButton, WhatsappShareButton, InstapaperShareButton, FacebookMessengerShareButton} from 'react-share';
import { FaFacebookF } from "react-icons/fa";
import { FacebookShareButton } from 'react-share';
import './style.css'

const color = '#FFF'

const shareMedias = [
    {media: <FacebookShareButton url={`${baseURL}/randr/episode-1`} hashtag={"#RefreshYourMusic #RefreshYourNights #RefreshExperience"}><FaFacebookF color={color} /> </FacebookShareButton>},
    // {media: <InstapaperShareButton url={`${baseURL}/home`}><FaInstagram color={color} /></InstapaperShareButton>},
    // {media: <FacebookMessengerShareButton appId='784926446458048' url={`${baseURL}/home`}><FaFacebookMessenger color={color} /></FacebookMessengerShareButton>},
    // {media: <TelegramShareButton url={`${baseURL}/home`} ><FaTelegram color={color} /></TelegramShareButton>},
    // {media: <WhatsappShareButton url={`${baseURL}/home`}><FaWhatsapp color={color} /></WhatsappShareButton>},
];


type propType = {
    closeModal: () => void,
}

const ShareModalComponent = (props: propType) => {
    const {closeModal} = props;
    const onCopyLink = () => {
        navigator.clipboard.writeText(`${baseURL}/randr/episode-1`);
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
                <input id='share-input' disabled className='share-input' type='text' value={`${baseURL}/randr/episode-1`} />
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