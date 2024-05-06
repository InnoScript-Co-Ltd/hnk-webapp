/** 
Component Name              - Navigation Component [App]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import logoIcon from "../../assets/images/HomePage/logo.png";
import { CgClose } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import './style.css'

const navigation = [
    {
        name: 'Home',
        path: '/home'
    },
    {
        name: 'ပြောင်းလဲဆန်းသစ်ရန်',
        path: '/randr'
    },
    {
        name: 'Party Radar',
        path: '/party-radar'
    },
    {
        name: 'Invitation',
        path: '/invitation'
    },
    {
        name: 'MOFT',
        path: '/moft'
    },
    {
        name: "Campaign အကြောင်း",
        path: "/campaign-info"
    }
]

type proptype = {
    onNavigateClose: () => void
}

const Navigation = (props: proptype) => {
    const {onNavigateClose} = props;
    const navigate = useNavigate();

    const onNavigateClick = (path: string) => {
        navigate(path);
        onNavigateClose();
    }

    const navVariant = {
        initial: { height: '0'},
        open: { height: '100vh'},
        exit: { height: '0' },
    }

  return (
    <motion.div 
    variants={navVariant}
    initial='initial'
    animate='open'
    exit='exit'
    className='nav-container'>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginTop: '20px',
            paddingRight: '10px',
            paddingLeft: '10px',
            alignItems: 'center'
        }}
        >
            <img
                src={logoIcon}
                alt="Logo"
            />
            <button
            onClick={onNavigateClose}
            style={{
                fontSize: '25px',
                position: 'absolute',
                right: '10px'
            }}
            >
                <CgClose color='#FFF' />
            </button>
        </div>
        <div
        style={{
            marginTop: '20px'
        }}
        >
            {
                navigation.map((value, index) => (
                    <button
                    key={index}
                    onClick={() => onNavigateClick(value.path)}
                    style={{
                        width: '100%',
                        marginTop: '20px',
                        color: '#FFF'
                    }}
                    >
                        {value.name}
                    </button>
                ))
            }
        </div>
    </motion.div>
  )
}

export default Navigation