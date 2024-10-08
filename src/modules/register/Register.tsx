/** 
Component Name              - Register Page Component
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import hnkELogo from "@/assets/images/hnk_e_logo_medium.png";
import mask from "@/assets/images/mask.png";
import hnkBottle from "@/assets/images/hnk_bottle.png";
import guitter from "@/assets/images/guiter.png";
import footerImg from "@/assets/images/footer.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { endpoints } from "@/constants/endpoints";
import { storyUpdate } from "@/store/storySlice";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "@/components/ModalComponent";
import { AnimatePresence } from "framer-motion";
import { IReducer } from "@/store/store";
import { openModal } from "@/store/modalSlice";
import DatePicker from "react-datepicker";
import { postRequest } from "@/lib/axios";
import { INTERNAL_SERVER, favouriteGenres, imageTitle } from "@/constants/config";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    tc_accept: false,
    dob: new Date(),
    fav_music: [],
    type: ""
  });

  const [favMusic, setFav]: any = useState(favouriteGenres);
  const [isLoading, setIsLoading] = useState(false)
  const modal = useSelector((state: IReducer) => state.modal);
  const dispath = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const handleDateChange = (date: Date) => {
    const updatePayload: any = { ...payload };
    updatePayload.dob = new Date(date);
    setPayload(updatePayload);
  };

  const submitHandler = async () => {
    if (payload.name === "" || payload.phone === "" || payload.email === "") {
      dispath(openModal({
        title: 'Register Failed',
        message: `All fields are required`,
        theme: 'error',
      }));
      return;
    }

    if (payload.tc_accept === false) {
      dispath(openModal({
        title: 'Register Failed',
        message: `All fields are required`,
        theme: 'error',
      }));
      return;
    }

    const getFav: any = [];

    favMusic.filter((value: any) => {
      if (value.is_checked === true) {
        getFav.push(value.value);
      }
    });

    const updatePayload = { ...payload };
    updatePayload.fav_music = getFav;
    updatePayload.type = params.type ? params.type : ""

    setIsLoading(true);
    const registerResult: any = await postRequest(`${endpoints.user}`, updatePayload);

    if(registerResult.status === 200) {
      dispath(storyUpdate(registerResult.data.data));

      await postRequest(`user/${registerResult.data.data.id}/vote/genre`, {
        vote_genre: params.vote,
        type: params.type
      });
      setIsLoading(false);
      navigate(`/invite/${params.episode}`);
      return;
    }

    dispath(openModal({
      title: 'Something Went Wrong!',
      message: INTERNAL_SERVER,
      theme: 'error',
    }));

    setIsLoading(false);
    return;
  };

  return (
    <div className="register-wrapper">
      <AnimatePresence>
        {
          modal.isOpen && (
            <ModalComponent />
          )
        }
      </AnimatePresence>
      <div className="header">
        <img
          src={hnkELogo}
          className="register-elogo"
          alt={imageTitle}
          title={imageTitle}
        />
        <div className="header-group">
          <img
            src={mask}
            className="img-mask"
            alt={imageTitle}
            title={imageTitle}
          />
          <img
            src={hnkBottle}
            className="hnk-bottle"
            alt={imageTitle}
            title={imageTitle}
          />
          <img
            className="img-guitter"
            src={guitter}
            alt={imageTitle}
            title={imageTitle}
          />
        </div>
        <h1 className="hnk-text"> REGISTER </h1>
      </div>

      <div className="register-form">
        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3"> Name : </label>
          <input
            type="text"
            className="input-control"
            value={payload.name}
            onChange={(e) => {
              const updatePayload = { ...payload };
              updatePayload.name = e.target.value;
              setPayload(updatePayload);
            }}
          />
        </div>

        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3"> Birthday: </label>
          <DatePicker
            selected={payload.dob}
            dateFormat={"dd/MM/yyyy"}
            onChange={handleDateChange}
            className="input-control z-999"
          />
        </div>

        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3"> Phone : </label>
          <input
            type="text"
            className="input-control"
            value={payload.phone}
            onChange={(e) => {
              const updatePayload = { ...payload };
              updatePayload.phone = e.target.value;
              setPayload(updatePayload);
            }}
          />
        </div>

        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3"> Email : </label>
          <input
            type="email"
            className="input-control"
            value={payload.email}
            onChange={(e) => {
              const updatePayload = { ...payload };
              updatePayload.email = e.target.value;
              setPayload(updatePayload);
            }}
          />
        </div>

        <div className="flex-checkbox">
          <label className="input-label-text font-extrabold pl-3" style={{ color: "#fff", lineHeight: "25px" }}> အကြိုက်ဆုံး ဂီတအမျိုးအစား </label>
          {favMusic.length > 0 && favMusic.map((value: any, index: number) => {
            return (
              <div key={index}>
                <div className="checkbox-group">
                  <input
                    className="input-checkbox"
                    type="checkbox"
                    checked={value.is_checked}
                    onChange={(e) => {
                      const updateFav: any = [...favMusic];
                      updateFav[index].is_checked = e.target.checked;
                      setFav(updateFav);
                    }}
                  />
                  <label className="checkbox-label" style={{ textDecoration: "none", cursor: "none" }}> {value.label} </label>
                </div>
              </div>
            )
          })}
        </div>

        <div className="checkbox-group">
          <input
            className="input-checkbox"
            type="checkbox"
            checked={payload.tc_accept}
            onChange={(e) => {
              const updatePayload = { ...payload };
              updatePayload.tc_accept = e.target.checked;
              setPayload(updatePayload);
            }}
          />
          <label className="checkbox-label" onClick={() => navigate(`/term-and-condition/${params.vote}/${params.type}`)}> I Accept terms and conditions </label>
        </div>

        <div className="btn-group">
          <ButtonComponent
            minWidth="100px"
            label="Back"
            onBtnClick={() => navigate("/home")}
          />
          <ButtonComponent
            className="btn-register"
            disabled={!payload.tc_accept}
            minWidth="100px"
            label="Next"
            onBtnClick={() => submitHandler()}
          />
        </div>
      </div>

      <div className="regiser-footer">
        <img
          style={{ width: "100%" }}
          src={footerImg}
          alt={imageTitle}
          title={imageTitle}
        />
      </div>

      {
        isLoading && <LoadingComponent />
      }
    </div>
  );
};

export default Register;