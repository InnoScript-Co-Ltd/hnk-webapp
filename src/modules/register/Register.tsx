/* eslint-disable @typescript-eslint/no-explicit-any */
import hnkELogo from "@/assets/images/hnk_e_logo_medium.png";
import mask from "@/assets/images/mask.png";
import hnkBottle from "@/assets/images/hnk_bottle.png";
import guitter from "@/assets/images/guiter.png";
import footerImg from "@/assets/images/footer.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import { postRequest } from "@/lib/axios";

export const Register = () => {

    const [payload, setPayload] = useState({
        name: "",
        phone: "",
        email: "",
        tc_accept: false
    });

    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const submitHandler = async () => {
        setLoading(true);
        setErrors(null);
        const result: any = await postRequest('user', payload);

        if(result.status === 422) {
            setErrors(result.data.data);
        }

        if(result.status === 200) {
            navigate("/term-and-condition")
        }

        setLoading(false);
    }

    return (
        <div className="register-wrapper">
            <div className="header">
                <img src={hnkELogo} className="register-elogo" alt="Henineken E Logo" title="Henineken E Logo" />
                <div className="header-group">
                    <img src={mask} className="img-mask" alt="Henineken E Logo" title="Henineken E Logo" />
                    <img src={hnkBottle} className="hnk-bottle" alt="Henineken E Logo" title="Henineken E Logo" />
                    <img className="img-guitter" src={guitter} alt="Henineken" title="Henineken" />
                </div>
                <h1 className="hnk-text"> REGISTER </h1>
            </div>

            <div className="register-form">
                <div className="input-group">
                    <label className="input-label-text"> Name : </label>
                    <input 
                        disabled={loading}
                        type="text"
                        className="input-control" 
                        value={payload.name}
                        onChange={(e) => {
                            const updatePayload = { ...payload};
                            updatePayload.name = e.target.value;
                            setPayload(updatePayload);
                        }}
                    />
                </div>
                { errors && errors['name'] && <label className="register-error"> { errors['name'][0]}</label>}

                <div className="input-group">
                    <label className="input-label-text"> Phone : </label>
                    <input 
                        disabled={loading}
                        type="text"
                        className="input-control" 
                        value={payload.phone}
                        onChange={(e) => {
                            const updatePayload = { ...payload};
                            updatePayload.phone = e.target.value;
                            setPayload(updatePayload);
                        }}
                    />
                </div>
                { errors && errors['phone'] && <label className="register-error"> { errors['phone'][0]}</label>}


                <div className="input-group">
                    <label className="input-label-text"> Email : </label>
                    <input 
                        disabled={loading}
                        type="email"
                        className="input-control" 
                        value={payload.email}
                        onChange={(e) => {
                            const updatePayload = { ...payload};
                            updatePayload.email = e.target.value;
                            setPayload(updatePayload);
                        }}
                    />
                </div>
                { errors && errors['email'] && <label className="register-error"> { errors['email'][0]}</label>}
                

                <div className="checkbox-group">
                    <input 
                        disabled={loading}
                        className="input-checkbox" 
                        type="checkbox" 
                        checked={payload.tc_accept}
                        onChange={(e) => {
                            const updatePayload = { ...payload};
                            updatePayload.tc_accept = e.target.checked;
                            setPayload(updatePayload);
                        }}
                    />
                    <label className="checkbox-label"> I Accept terms and conditions </label>
                </div>

                <div className="btn-group">
                    <button 
                        disabled={loading}
                        style={{width: "100px"}} 
                        className="hnk-btn" 
                        onClick={() => navigate('/')}
                    > 
                        Back 
                    </button>
                        
                    <button 
                        className={`hnk-btn ${!payload.tc_accept ? 'disble' : ""}`}
                        disabled={!payload.tc_accept || loading} 
                        style={{width: "100px"}} 
                        onClick={() => submitHandler()}
                    > 
                        Next 
                    </button>
                </div>
            </div>

            <div className="footer">
                <img style={{width: "100%"}} src={footerImg} alt="Henineken" title="Henineken" />
            </div>

        </div>
    )
}