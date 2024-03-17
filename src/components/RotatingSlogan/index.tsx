import redStar from "../../assets/images/HomePage/redstar.png";
import './style.css'

const RotatingSlogan = () => {

  return (
    <div className="top-slogan">
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
        Refresh Your Music
        <img className="redStar" src={redStar} />
      </div>
    </div>
  )
}

export default RotatingSlogan