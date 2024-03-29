import logoText from "../../assets/images/logotext.svg";
import slogan from "../../assets/images/HomePage/slogan.png";
import redStar from "../../assets/images/redstar.svg";
import './style.css'

const LoadingComponent = () => {
  return (
    <div className="loading-container">
        <div 
            style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
            }} 
            className="loading-logo">
                <div className="loading-mainlogo">
                    <img
                        style={{
                        marginBottom: "10px",
                        width: "100px",
                        transition: "width 0.3s linear",
                        }}
                        src={logoText}
                        alt="Logo"
                    />
                    <img
                        className="loading-redstar"
                        src={redStar}
                        width={'35px'}
                        alt="Logo"
                    />
                </div>
            <img
                style={{
                width: "168px",
                }}
                src={slogan}
                alt="Slogan"
            />
        </div>
    </div>
  )
}

export default LoadingComponent