import { useCallback, useEffect, useState } from 'react'
import './style.css'
import RotatingSlogan from '@/components/RotatingSlogan'
import titleIllu from '../../../assets/images/randr/episode_1/titleIllu.png'
import earphone from '../../../assets/images/randr/episode_1/earphone.png'
import mp3Player from '../../../assets/images/randr/episode_1/mp3Player.png'
import ButtonComponent from '@/components/ButtonComponent'
import enjoyLogo from '../../../assets/images/HomePage/enjoyLogo.png'
import { useNavigate } from 'react-router-dom'
// import rap from '../../../assets/images/randr/episode_1/rap.png'
// import pop from '../../../assets/images/randr/episode_1/pop.png'
// import randb from '../../../assets/images/randr/episode_1/randb.png'
// import rock from '../../../assets/images/randr/episode_1/rock.png'
import { useDispatch } from 'react-redux'
import { getGenre } from '@/lib/randrApi'
import { IGenrereResponse } from '@/models/genre.model'
import { IMAGE_ROUTE } from '@/constants/keys'
import LoadingComponent from '@/components/LoadingComponent.tsx'
import { openModal } from '@/store/modalSlice'

const EpisodeOne = () => {
  const [boxState, setBoxState] = useState<IGenrereResponse>({
    id: '',
    color: '',
    icon: null,
    name: '',
    rate: '',
    status: ''
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [genreList, setGenreList] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch();

  const voteHandler = (data: IGenrereResponse) => {
    setBoxState(data)
  }

  const onDoneClick = async() => {
    navigate(`/register/${boxState.name}`)
    // if(boxState.name !== ''){
    //   setLoading(true);
    //   await voteGenre(story.id, {vote_genre: boxState.name})
    //   .then(() => {
    //     setLoading(false);
    //     // dispatch(openModal({
    //     //   title: 'Success Vote',
    //     //   message: 'Vote Genres Successfully',
    //     //   theme: 'success'
    //     // }))
    //     navigate('/invite')
    //   })
    //   .catch((error) => {
    //     dispatch(openModal({
    //       title: 'Error when voting',
    //       message: `${error.response.data.message}. Please check your data and try again later.`,
    //       theme: 'error'
    //     }));
    //     setLoading(false);
    //   })
    // }
  }

  const loadGenreData = useCallback(async() => {
    setLoading(true);
    await getGenre().then((response) => {
      setGenreList(response.data.data);
      setLoading(false);
    }).catch((error) => {
      dispatch(openModal({
        title: 'Error loading Genres',
        message: `${error.response.data.message}. Please check your data and try again later.`,
        theme: 'error'
      }));
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    loadGenreData();
  }, [loadGenreData])
  
  return (
    <>
      {
        loading && (
          <LoadingComponent />
        )
      }
        <div className='ep1-container'>
          <RotatingSlogan />
          <div className='section-wrapper'>
            <img src={titleIllu} />
            {/* <img src={title} /> */}
            <p className='section-title'>
            vGrf;ydkif&JY   <span className='bold-text'>wpf&mwef</span>  udk
            b,fvdkyHkpHeJY     <span className='bold-text'>em;axmifcsifvJ...?</span>
              {/* လွှမ်းပိုင်ရဲ့ <span className='bold-text'>တစ်ရာတန်</span>ကို<br/>
              ဘယ်လိုပုံစံနဲ့ <span className='bold-text'>နားထောင်ချင်လဲ...<span className='question-mark'>?</span></span> */}
            </p>
          </div>
          <div className='genre-select'>
            <p className='genre-title'>
              Select Genre
            </p>
            
            <div className='genre-grid'>
              {
                genreList.map((data : IGenrereResponse, index) => (
                  <button
                  onClick={() => voteHandler(data)}
                  style={{
                    backgroundImage: `url(${IMAGE_ROUTE}/${data.icon?.image})`,
                    boxShadow: boxState.id === data.id ? `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000, 0px 0px 25px 10px ${data.color}` : `3px 5px 0px 0px ${data.color}, 4px 6px 0px 0px #000`,
                  }}
                  key={index} 
                  className='genre-btn'>
                    <div style={{backgroundColor: data.color}} className='wave'></div>
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
          <img className='ep1-enjoy' src={enjoyLogo} />
          <div className='footer-wrapper'>
              <img className='earphone' src={earphone} />
              <img className='mp3Player' src={mp3Player} />
            </div>
      </div>
    </>
  )
}

export default EpisodeOne