/* eslint-disable @typescript-eslint/no-explicit-any */
import hnkELogo from "@/assets/images/hnk_e_logo_medium.png";
import mask from "@/assets/images/mask.png";
import hnkBottle from "@/assets/images/hnk_bottle.png";
import guitter from "@/assets/images/guiter.png";
import footerImg from "@/assets/images/footer.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { USER_STORY, storyUpdate } from "@/store/storySlice";
import "./style.css";

export const Register = () => {

    const [payload, setPayload] = useState({
        name: "",
        phone: "",
        email: "",
        tc_accept: false
    });

    const dispath = useDispatch();
    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
      });
      
    const navigate = useNavigate();

    const submitHandler = () => {
        if(payload.name === "" || payload.phone === "" || payload.email === "") {
            alert("All fields are required");
            return;
        }

        if(payload.tc_accept === false) {
            alert("Accept T&C");
            return;
        }

        const  updateStory = {...story};

        updateStory.tc_accept = payload.tc_accept;
        updateStory.name = payload.name;
        updateStory.email = payload.email;
        updateStory.phone = payload.phone;

        dispath(storyUpdate(updateStory));
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

                <div className="input-group">
                    <label className="input-label-text"> Phone : </label>
                    <input 
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

                <div className="input-group">
                    <label className="input-label-text"> Email : </label>
                    <input 
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

                <div className="checkbox-group">
                    <input 
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
                    <button style={{width: "100px"}} className="hnk-btn" onClick={() => navigate('/')}> Back </button>
                    <button style={{width: "100px"}} className="hnk-btn" onClick={() => submitHandler()}> Next </button>
                </div>
            </div>

            <div className="footer">
                <img style={{width: "100%"}} src={footerImg} alt="Henineken" title="Henineken" />
            </div>

        </div>
    )
}