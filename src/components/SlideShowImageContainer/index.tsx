import React from 'react'
import bgImage from '../../assets/images/util_imgs/bgtest.png'
import bottleImg from '../../assets/images/randr/singerBottle.png'
import './style.css'

type propsTypes = {
    color: string,
    singerName: string,
    singerSlogan: string,
}

const SlideShowImageContainer = ({color, singerName, singerSlogan}: propsTypes) => {
  return (
    <div className='img-container'>
        <div className='img-background'>
            <div 
            style={{
                backgroundImage: `url(${bgImage})`,
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