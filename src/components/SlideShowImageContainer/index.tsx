import { endpoints } from '@/constants/endpoints'
import bottleImg from '../../assets/images/randr/singerBottle.png'
import './style.css'

type propsTypes = {
    color: string,
    singerName: string,
    singerSlogan: string,
    image: string,
    onContainerClicked: () => void
}

const SlideShowImageContainer = ({color, singerName, singerSlogan, image, onContainerClicked}: propsTypes) => {
  return (
    <div onClick={onContainerClicked} className='img-container'>
        <div className='img-background'>
            <div 
            style={{
                backgroundImage: `url(${endpoints.image}/${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                // backgroundColor: '#FFF',
                boxShadow: `-3px 6px 0px 1px ${color}, -4px 7px 0px 1px #000000`,
            }} 
            className='img' 
            >
                <img className='bottle-img' src={bottleImg}/>
                <p className='singer-name'>
                    {singerName}
                </p>
                <p className='singer-slogan'>
                    {singerSlogan}
                </p>
            </div>
        </div>
    </div>
  )
}

export default SlideShowImageContainer