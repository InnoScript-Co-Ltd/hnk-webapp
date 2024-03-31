import menuIcon from "@/assets/images/menu.png";
import hnkRefershILogo from "@/assets/images/hnk_refresh_music.png";

import "./style.css";

export const Header = () => {

    return(
        <div className="app-header">
            <img className="menu-btn" src={menuIcon} alt="" title="" />
            <img className="refresh-music-img" src={hnkRefershILogo} alt="" title="" />
        </div>
    )
}