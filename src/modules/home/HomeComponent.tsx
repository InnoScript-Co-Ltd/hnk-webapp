import enjoyLogo from "../../assets/images/HomePage/enjoyLogo.png";
import redStar from "../../assets/images/HomePage/redstar.png";
import title from "../../assets/images/HomePage/title.png";
import titleRightIllu from "../../assets/images/HomePage/titleRightIllu.png";
import contentIllu from "../../assets/images/HomePage/contentIlluLeft.png";
import beerBottle from "../../assets/images/HomePage/beerbottle.png";
import contentsection2leftIllu from "../../assets/images/HomePage/section2leftillu.png";
import footerImg from "../../assets/images/HomePage/footer.png";
import randr from "../../assets/images/HomePage/r&r.png";
// import "./style.css";
// import { useSelector } from "react-redux";
// import { selectToken } from "../auth/authSlice";
import { useNavigate } from "react-router-dom";
import RotatingSlogan from "@/components/RotatingSlogan";

const HomeComponent = () => {
  // const token = useSelector(selectToken);
  // console.log(token);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/verifyage");
  //   }
  // }, [token, navigate]);

  const handleClickRandR = () => {
    navigate('/randr')
  }

  return (
    <>
      {/* {token && ( */}
        <div className="home-container">
          <div>
            <img className="enjoy-logo" src={enjoyLogo} />
          </div>
          <div className="content-section">
            <div className="right-illu">
              <img src={titleRightIllu} />
            </div>
            <RotatingSlogan />
            <div className="content-title">
              <img src={title} />
            </div>
            <div className="content-texts">
              <p>
                ဆန်းသစ်ထူးခြားတဲ့ ဂီတအရသာတွေကို ခံစားနိုင်မယ့် Heineken® Refresh
                Your Music, Refresh Your Nights က မြန်မာနိုင်ငံကို
                ပြန်လည်ရောက်ရှိလာပါပြီ။ ၂၀၂၂ ခုနှစ်တုန်းက... seemore..
              </p>
            </div>
            <div className="content-illu">
              <img className="content-left-illu" src={contentIllu} />
              <img className="content-right-illu" src={beerBottle} />
            </div>
            <button className="rader btn">
              <span>Party Radar</span>
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="right-bottom-clip">
              {/* <svg width="100" height="100" viewBox="0 0 168 151" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16 131C14.5 143 9 146 0 150.5H168V0L28.5 85.5C19.409 91.6 16.7985 95.4305 16 103V131Z" fill="#040658"/>
						</svg> */}
              <svg
                width="100"
                height="199"
                viewBox="0 0 176 199"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 165C22 177 16 191.5 0.5 198.5H175.5V0.5L36 86C26.909 92.1 24.2985 95.9305 23.5 103.5V165Z"
                  fill="#040658"
                />
              </svg>
            </div>
            <div className="content-section-bottom"></div>

            <div className="content-section-2">
              <img
                className="section-2-left-illu"
                src={contentsection2leftIllu}
              />
              <img className="section-2-randr-illu" src={randr} />
              <button onClick={handleClickRandR} className="randr btn">
                <span>R&R</span>
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9263 0L13.9592 0.501143C13.9592 2.83013 15.9778 5.86846 18.1466 7.61036H0.21875V10.3896H18.1454C15.9767 12.1315 13.958 15.1699 13.958 17.4989L16.9251 18C16.9251 14.6966 19.8797 10.3896 23.2188 10.3896V7.61036C19.8797 7.61036 16.9251 3.30343 16.9251 0L16.9263 0Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>

            <div className="footer-img">
              <img src={footerImg} />
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default HomeComponent;
