import { useEffect, useState } from "react";
import redStar from "../../assets/images/HomePage/redstar.png";
import './style.css'

const RotatingSlogan = () => {
  const [stopSlogan, setStopSlogan] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [scroll, setScroll] = useState(0);

  const handleScrollSlogan = () => {
    const sloganElement = document.getElementById('rotating-slogan');
    const sloganPosition = sloganElement?.getBoundingClientRect();
    setScroll(window.scrollY);
    if(sloganPosition && sloganPosition.y <= 102){
      if(currentPosition === 0){
        setCurrentPosition(window.scrollY)
      }
      setStopSlogan(true);
    }
  }

  useEffect(() => {
    if(scroll < currentPosition ){
      setStopSlogan(false);
    }
  }, [scroll])

  useEffect(() => {
    document.addEventListener('scroll', handleScrollSlogan);

    return () => removeEventListener('scroll', handleScrollSlogan)
  },[])

  return (
    <div 
    style={{
    maxWidth: stopSlogan ? '410px' : '',
    position: stopSlogan ? 'fixed' : 'relative',
    top: stopSlogan ? 100 : '0',
    transition: 'all 0.2s linear',
    // left: 0,
    zIndex: 21
    }} 
    id="rotating-slogan" 
    className="top-slogan"
    >
      <div
       className='slogan-container'
       >
        Refresh Your Music
        <img className="redStar" src={redStar} />
        Refresh Your Night
        <img className="redStar" src={redStar} />
        Refresh Your Music
        <img className="redStar" src={redStar} />
        Refresh Your Night
        <img className="redStar" src={redStar} />
        Refresh Your Night
        <img className="redStar" src={redStar} />
      </div>
    </div>
  )
}

export default RotatingSlogan