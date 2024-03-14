import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logoIcon from '../assets/images/HomePage/logo.png'
import slogan from '../assets/images/HomePage/slogan.png'
import minilogo from '../assets/images/HomePage/minilogo.png'
import './style.css'
import { useEffect, useState } from "react";
const DefaultLayout = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [isHome, setIsHome] = useState(true);
	const [scroll, setScroll] = useState(0);

	const handleScroll = () => {
			setScroll(window.scrollY)
	}

	useEffect(() => {
		if(location.pathname === '/'){
			document.addEventListener('scroll', handleScroll);

			return () => document.removeEventListener('scroll', handleScroll);
		}
	},[location.pathname])
	
	useEffect(() => {
		if(location.pathname !== '/'){
			setIsHome(false);
		}else{
			if(scroll > 300){
				setIsHome(false);
			}else{
				setIsHome(true);
			}
		}
	},[location.pathname, scroll])

	return (
		<main>
			<div className="layout-container">
				<div style={{backgroundColor: isHome ? '' : '#000242', height: '100px', transition: 'background-color 0.3s linear'}} className="top-bar">
					<div className="menu">
						<div className="menu-icon">

						</div>
					</div>
					<div onClick={() => navigate('/')} className="logo">
						<img style={{marginBottom: '10px', width: isHome?  '118px' : '65px', transition: 'width 0.3s linear'}} src={logoIcon} />
						<img style={{width: isHome? '168px' : '93px', transition: 'width 0.3s linear'}} src={slogan} />
					</div>
					<div className="mini-logo">
						<img src={minilogo} />
					</div>
				</div>
				<Outlet />
			</div>
		</main>
	);
};

export default DefaultLayout;
