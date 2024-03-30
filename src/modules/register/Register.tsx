/* eslint-disable @typescript-eslint/no-explicit-any */
import hnkELogo from "@/assets/images/hnk_e_logo_medium.png";
import mask from "@/assets/images/mask.png";
import hnkBottle from "@/assets/images/hnk_bottle.png";
import guitter from "@/assets/images/guiter.png";
import footerImg from "@/assets/images/footer.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";
import axios from "axios";
import ButtonComponent from "@/components/ButtonComponent";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { endpoints, serverURL } from "@/constants/endpoints";
import { USER_STORY, storyUpdate } from "@/store/storySlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    tc_accept: false,
    authToken: "",
  });
  const [isLoading, setIsLoading] = useState(false)

  const dispath = useDispatch();
  const story: USER_STORY = useSelector((state: any) => {
    return state.story;
  });

  const navigate = useNavigate();

  const submitHandler = async () => {
    if (payload.name === "" || payload.phone === "" || payload.email === "") {
      alert("All fields are required");
      return;
    }
    if (payload.tc_accept === false) {
      alert("Accept Terms & Conditions");
      return;
    }
    try {
    setIsLoading(true)
      const response = await axios.post(
        `${serverURL}${endpoints.user}`,
        // "http://hnk-api.innoscript.co/api/user",
        // "http://localhost:8000/api/user",
        payload
      );
      const result = response.data.data;
      const updateStory = { ...story };
      updateStory.tc_accept = payload.tc_accept;
      updateStory.name = result.name;
      updateStory.email = result.email;
      updateStory.phone = result.phone;
      updateStory.authToken = result.token;
      dispath(storyUpdate(updateStory));
      sessionStorage.setItem("USER_PAYLOAD", JSON.stringify(updateStory));
      navigate("/term-and-condition");
    } catch (error:any) {
      console.error("Error submitting data:", error.response);
      alert(`${error.response.data.message}. Please check your data and try again later.`);
    }
    
    setTimeout(() => {
        setIsLoading(false)
    },2000)
  };
  
  return (
    <div className="register-wrapper">
      <div className="header">
        <img
          src={hnkELogo}
          className="register-elogo"
          alt="Henineken E Logo"
          title="Henineken E Logo"
        />
        <div className="header-group">
          <img
            src={mask}
            className="img-mask"
            alt="Henineken E Logo"
            title="Henineken E Logo"
          />
          <img
            src={hnkBottle}
            className="hnk-bottle"
            alt="Henineken E Logo"
            title="Henineken E Logo"
          />
          <img
            className="img-guitter"
            src={guitter}
            alt="Henineken"
            title="Henineken"
          />
        </div>
        <h1 className="hnk-text"> REGISTER </h1>
      </div>

      <div className="register-form">
        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3">
            {" "}
            Name :{" "}
          </label>
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
          <label className="input-label-text font-extrabold pl-3">
            {" "}
            Phone :{" "}
          </label>
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
          <label className="input-label-text font-extrabold pl-3">
            {" "}
            Email :{" "}
          </label>
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
          <label className="checkbox-label">
            {" "}
            I Accept terms and conditions{" "}
          </label>
        </div>

        <div className="btn-group">
          <ButtonComponent
            minWidth="100px"
            label="Back"
            onBtnClick={() => navigate("/")}
          />
          <ButtonComponent
            minWidth="100px"
            label="Next"
            onBtnClick={() => submitHandler()}
          />
        </div>
      </div>

      <div className="footer">
        <img
          style={{ width: "100%" }}
          src={footerImg}
          alt="Henineken"
          title="Henineken"
        />
      </div>

      {
        isLoading && <LoadingComponent />
      }
    </div>
  );
};

export default Register;
