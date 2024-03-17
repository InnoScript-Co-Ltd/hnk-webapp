import React from 'react'
import './style.css'
import RotatingSlogan from '@/components/RotatingSlogan'
import earphone from '../../assets/images/randr/episode_1/earphone.png'
import mp3Player from '../../assets/images/randr/episode_1/mp3Player.png'
import profile from '../../assets/images/HomePage/profile 1.png'
import inviteContent from '../../assets/images/Invite/content.png'
import feedbackStar from '../../assets/images/Invite/feedbackStar.png'
import bottle from '../../assets/images/HomePage/beerbottle.png'
import enjoyLogo from '../../assets/images/HomePage/enjoyLogo.png';
import ButtonComponent from '@/components/ButtonComponent'
import { useNavigate } from 'react-router-dom'

const Invite = () => {
    const navigate = useNavigate()

    const onShare = () => {

    }

    const onGoBack = () => {
        navigate('/randr');
    }
  return (
    <div className='ep1-container'>
        <RotatingSlogan />
        <div style={{marginTop: '50px'}} className='section-wrapper'>
            <div className="invite-profile">
                <img className="profile-invite-img" src={profile} alt="Mini Logo" />
            </div>
            <img className='invite-beer-bottle' src={bottle} />
            <div className='invite-section'>
                <p className='user-name'>
                    User Name
                </p>
                <img className='invite-content' src={inviteContent} />
                <img className='feed-back-stars' src={feedbackStar} alt="feedbackStar" />
            </div>
            <div className='share-back-btn'>
                <ButtonComponent minWidth='200px' label='Share' onBtnClick={onShare} />
                <p className='or-text'>
                    OR
                </p>

                <ButtonComponent minWidth='300px' arrow label='Go to Campaign Info' onBtnClick={onGoBack} />
            </div>
        </div>

        <img className='invite-enjoy' src={enjoyLogo} />
        <div className='invite-footer'>
            <img className='earphone' src={earphone} />
            <img className='mp3Player' src={mp3Player} />
        </div>
    </div>
  )
}

export default Invite