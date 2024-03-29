import { useEffect, useState } from 'react'
import './style.css'
import RotatingSlogan from '@/components/RotatingSlogan'
import titleIllu from '../../../assets/images/randr/episode_1/titleIllu.png'
import earphone from '../../../assets/images/randr/episode_1/earphone.png'
import mp3Player from '../../../assets/images/randr/episode_1/mp3Player.png'
import ButtonComponent from '@/components/ButtonComponent'
import enjoyLogo from '../../../assets/images/HomePage/enjoyLogo.png'
import { useNavigate } from 'react-router-dom'
import rap from '../../../assets/images/randr/episode_1/rap.png'
import pop from '../../../assets/images/randr/episode_1/pop.png'
import randb from '../../../assets/images/randr/episode_1/randb.png'
import rock from '../../../assets/images/randr/episode_1/rock.png'

const dummyData = [
  {
    id: 1,
    color: '#B371EE',
    text: 'Rap',
    percentage: 25,
    image: rap
  },
  {
    id: 2,
    color: '#FF00F5',
    text: 'Pop',
    percentage: 25,
    image: pop
  },
  {
    id: 3,
    color: '#0047FF',
    text: 'R&B',
    percentage: 25,
    image: randb
  },
  {
    id: 4,
    color: '#24FF00',
    text: 'Rock',
    percentage: 25,
    image: rock
  },
  
]

type boxType = {
  id: number,
  color: string,
  text: string,
  percentage: number,
  image: string
}

const EpisodeOne = () => {
  const [boxState, setBoxState] = useState<string>('');
  const navigate = useNavigate();

  const voteHandler = (data: boxType) => {
    setBoxState(data.text)
  }

  const onDoneClick = () => {
    if(boxState !== ''){
      navigate('/invite')
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  },[])
  
  return (
    <div className='ep1-container'>
        <RotatingSlogan />
        <div className='section-wrapper'>
          <img src={titleIllu} />
          {/* <img src={title} /> */}
          <p className='section-title'>
            လွှမ်းပိုင်ရဲ့ <span className='bold-text'>တစ်ရာတန်</span>ကို<br/>
            ဘယ်လိုပုံစံနဲ့ <span className='bold-text'>နားထောင်ချင်လဲ...<span className='question-mark'>?</span></span>
          </p>
        </div>
        <div className='genre-select'>
          <p className='genre-title'>
            Select Genre
          </p>
          
          <div className='genre-grid'>
            {
              dummyData.map((data, index) => (
                <button
                onClick={() => voteHandler(data)}
                style={{
                  backgroundImage: `url(${data.image})`,
                  boxShadow: boxState === data.text ? `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000, 0px 0px 25px 10px ${data.color}` : `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000`,
                }}
                key={index} 
                className='genre-btn'>
                  <div style={{backgroundColor: data.color}} className='wave'></div>
                  <span className='label left'>{data.text}</span>
                  <span className='label right'>{data.percentage}%</span>
              </button>
              ))
            }
          </div>
          <div className='done-btn'>
            <ButtonComponent disabled={boxState === ''} minWidth='187px' label='Done' onBtnClick={onDoneClick} />
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