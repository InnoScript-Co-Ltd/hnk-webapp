import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logoIcon from "../assets/images/HomePage/logo.png";
import slogan from "../assets/images/HomePage/slogan.png";
import "./style.css";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AnimatePresence, motion } from "framer-motion"
// import { selectToken } from "@/modules/auth/authSlice";
const DefaultLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHome, setIsHome] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    if (location.pathname === "/home") {
      document.addEventListener("scroll", handleScroll);

      return () => document.removeEventListener("scroll", handleScroll);
    }
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [location.pathname]);

  const closeNavigation = () => {
    setNavOpen(false);
  }

  useEffect(() => {
    if (location.pathname !== "/home") {
      setIsHome(false);
    } else {
      if (scroll > 300) {
        setIsHome(false);
      } else {
        setIsHome(true);
      }
    }
  }, [location.pathname, scroll]);

  const navVariant = {
      initial: { x: "-200%"},
      open: { x: 0 },
      exit: { x: "-100%" },
  }

  return (
    <main>
      <div className="layout-container">
        {location.pathname !== "/" &&
          location.pathname !== "/register" && (
            <div
              style={{
                backgroundColor: isHome ? "" : "#000242",
                height: "100px",
                transition: "background-color 0.3s linear",
              }}
              className="top-bar"
            >
              <AnimatePresence>
              {
                navOpen && (
                  <motion.div 
                  variants={navVariant}
                  initial={"initial"}
                  animate={"open"}
                  exit={'exit'}
                >
                  <Navigation onNavigateClose={closeNavigation} />
                </motion.div>
                )
              }
              </AnimatePresence>
              <div style={{cursor: "pointer"}} onClick={() => setNavOpen(prev => !prev)} className="menu">
                  <div className="menu-icon"></div>
              </div>
              <div 
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }} 
              onClick={() => navigate("/")} 
              className="logo">
                <img
                  style={{
                    marginBottom: "10px",
                    width: isHome ? "118px" : "65px",
                    transition: "width 0.3s linear",
                  }}
                  src={logoIcon}
                  alt="Logo"
                />
                <img
                  style={{
                    width: isHome ? "168px" : "93px",
                    transition: "width 0.3s linear",
                  }}
                  src={slogan}
                  alt="Slogan"
                />
              </div>
              <div style={{width: '50px'}}>
                {/* <img className="profile" src={profile} alt="Mini Logo" /> */}
              </div>
            </div>
          )}
        <div
        style={{marginTop: location.pathname === '/home' || location.pathname === '/' ? '' : '100px', width: '100%'}}
        >
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DefaultLayout;
