/** 
Component Name              - Ep01 Page Component
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { useCallback, useEffect, useState } from 'react'
import RotatingSlogan from '@/components/RotatingSlogan'
import titleIllu from '../../../assets/images/randr/episode_1/titleIllu.png'
import earphone from '../../../assets/images/randr/episode_1/earphone.png'
import mp3Player from '../../../assets/images/randr/episode_1/mp3Player.png'
import ButtonComponent from '@/components/ButtonComponent'
import enjoyLogo from '../../../assets/images/HomePage/enjoyLogo.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { IGenrereResponse } from '@/models/genre.model'
import LoadingComponent from '@/components/LoadingComponent.tsx'
import { openModal } from '@/store/modalSlice'
import { endpoints } from '@/constants/endpoints'
import { getRequest } from '@/lib/axios'
import { INTERNAL_SERVER, imageTitle } from '@/constants/config'
import './style.css'
import { Helmet } from 'react-helmet'

const EpisodeOne = () => {
  const [boxState, setBoxState] = useState<IGenrereResponse>({
    id: '',
    color: '',
    icon: null,
    name: '',
    rate: '',
    status: ''
  });

  const [loading, setLoading] = useState(false);
  const [genreList, setGenreList] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const voteHandler = (data: IGenrereResponse) => {
    setBoxState(data)
  }

  const onDoneClick = async () => {
    navigate(`/register/${boxState.name}/client`)
  }

  const loadGenreData = useCallback(async () => {
    setLoading(true);
    const genreResult: any = await getRequest(`${endpoints.genre}`);

    if (genreResult.status === 200) {
      setGenreList(genreResult.data.data);
      setLoading(false);
    } else {
      dispatch(openModal({
        title: 'Something Went Wrong!',
        message: INTERNAL_SERVER,
        theme: 'error'
      }));
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    loadGenreData();
  }, [loadGenreData])

  return (
    <div>
      <Helmet>
        <title> ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ကိုယ်တိုင်စီးမျောခံစားဖို... </title>
        <meta name="description" content=" Take Care by Double J ကို ဘယ်လို Music Style နဲနားထောင်ချင်လဲ? ရွေးချယ်လိုက်ပါ" data-react-helmet="true" />
        <meta property="og:url" content="https://refreshyourmusichnk.com/randr/episode-1" data-react-helmet="true" />
        <meta property="og:type" content="article" data-react-helmet="true" />
        <meta property="og:image" content="https://refreshyourmusichnk.com/assets/landingBg-CjO8QWGu.png" data-react-helmet="true" />
      </Helmet>
      {
        loading && (
          <LoadingComponent />
        )
      }
      <div className='ep1-container'>
        <RotatingSlogan />
        <div className='section-wrapper'>
          <img src={titleIllu} alt={imageTitle} title={imageTitle} />
          <p className='section-title'>
            <span className='bold-text'> Take Care by Double J </span> ကို ဘယ်လို <span className='bold-text'> Music Style </span> နဲ နားထောင်ချင်လဲ? ရွေးချယ်လိုက်ပါ
          </p>
        </div>
        <div className='genre-select'>
          <p className='genre-title'>
            Select Genre
          </p>

          <div className='genre-grid'>
            {
              genreList.map((data: IGenrereResponse, index) => (
                <button
                  onClick={() => voteHandler(data)}
                  style={{
                    backgroundImage: `url(${endpoints.image}/${data.icon?.image})`,
                    boxShadow: boxState.id === data.id ? `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000, 0px 0px 25px 10px ${data.color}` : `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000`,
                  }}
                  key={index}
                  className='genre-btn'>
                  <div style={{ backgroundColor: data.color }} className='wave'></div>
                  <span className='label left'>{data.name}</span>
                  <span className='label right'>{data.rate}%</span>
                </button>
              ))
            }
          </div>
          <div className='done-btn'>
            <ButtonComponent disabled={boxState.id === ''} minWidth='187px' label='Done' onBtnClick={onDoneClick} />
          </div>
        </div>
        <img className='ep1-enjoy' src={enjoyLogo} alt={imageTitle} title={imageTitle} />
        <div className='footer-wrapper'>
          <img className='earphone' src={earphone} alt={imageTitle} title={imageTitle} />
          <img className='mp3Player' src={mp3Player} alt={imageTitle} title={imageTitle} />
        </div>
      </div>
    </div>
  )
}

export default EpisodeOne