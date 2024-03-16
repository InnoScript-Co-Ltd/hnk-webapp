import React from 'react'
import './style.css'
import RotatingSlogan from '@/components/RotatingSlogan'
import titleIllu from '../../../assets/images/randr/episode_1/titleIllu.png'
import title from '../../../assets/images/randr/episode_1/title.png'
import earphone from '../../../assets/images/randr/episode_1/earphone.png'
import mp3Player from '../../../assets/images/randr/episode_1/mp3Player.png'
import ButtonComponent from '@/components/ButtonComponent'
import enjoyLogo from '../../../assets/images/HomePage/enjoyLogo.png'
import { useNavigate } from 'react-router-dom'

const EpisodeOne = () => {
  const navigate = useNavigate();

  const onDoneClick = () => {
    navigate('/invite')
  }
  return (
    <div className='ep1-container'>
        <RotatingSlogan />
        <div className='section-wrapper'>
          <img src={titleIllu} />
          <img src={title} />
          {/* <p className='section-title'>
            လွှမ်းပိုင်ရဲ့ တစ်ရာတန်ကို
            ဘယ်လိုပုံစံနဲ့ နားထောင်ချင်လဲ...?
          </p> */}
        </div>
        <div className='genre-select'>
          <p className='genre-title'>
            Select Genre
          </p>
          
          <div className='genre-grid'>
            <button className='rap'>
              <span className='label left'>Rap</span>
              <span className='label right'>25%</span>
            </button>
            <button className='pop'>
            <span className='label left'>Pop</span>
              <span className='label right'>25%</span>
            </button>
            <button className='randb'>
            <span className='label left'>R&B</span>
              <span className='label right'>25%</span>
            </button>
            <button className='rock'>
            <span className='label left'>Rock</span>
              <span className='label right'>25%</span>
            </button>
          </div>
          <div className='done-btn'>
            <ButtonComponent minWidth='187px' label='Done' onBtnClick={onDoneClick} />
          </div>
        </div>
        <img className='ep1-enjoy' src={enjoyLogo} />
        <div className='footer-wrapper'>
            <img className='earphone' src={earphone} />
            <img className='mp3Player' src={mp3Player} />
          </div>
    </div>
  )
}

export default EpisodeOne