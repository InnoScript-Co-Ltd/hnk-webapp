import menuIcon from "@/assets/images/menu.png";
import hnkRefershILogo from "@/assets/images/hnk_refresh_music.png";

import "./style.css";

export const Header = ({backgroundColor, imageWidth}: any) => {

    return(
        <div className="app-header" style={{ background: backgroundColor}}>
            <img className="menu-btn" src={menuIcon} alt="" title="" />
            <img className="refresh-music-img" style={{ width: imageWidth}} src={hnkRefershILogo} alt="" title="" />
        </div>
    )
}