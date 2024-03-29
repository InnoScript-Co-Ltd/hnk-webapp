import React from 'react'
import logoIcon from "../../assets/images/HomePage/logo.png";
import { CgClose } from "react-icons/cg";
import './style.css'
import { useNavigate } from 'react-router-dom';

const navigation = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'R&R',
        path: '/randr'
    },
    {
        name: 'Party Radar',
        path: '/party-radar'
    }
]

type proptype = {
    onNavigateClose: () => void
}

const Navigation = (props: proptype) => {
    const {onNavigateClose} = props;
    const navigate = useNavigate();

    const logoutHandler = () => {
        sessionStorage.removeItem('USER_PAYLOAD');
        navigate('/')
    }
  return (
    <div className='nav-container'>
        <div
        style={{
            display: 'flex',
            justifyContent: 'space-between',
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
                fontSize: '25px'
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
                    onClick={() => navigate(value.path)}
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
            {/* <button
            onClick={logoutHandler}
            style={{
                width: '100%',
                marginTop: '20px',
                color: '#FFF'
            }}
            >
                Logout
            </button> */}
        </div>
    </div>
  )
}

export default Navigation