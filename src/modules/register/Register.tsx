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
import { storyUpdate } from "@/store/storySlice";
import { useDispatch, useSelector } from "react-redux";
import { USER_STORY } from "@/models/story.model";
import ModalComponent from "@/components/ModalComponent";
import { AnimatePresence } from "framer-motion";
import { IReducer } from "@/store/store";
import { openModal } from "@/store/modalSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TCModal from "./TCModal";

type Genre = "Hip-hop" | "RnB" | "Pop" | "Rock" | "Classical" | "Others";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    dob: new Date(),
    fav_music: [] as (Genre | string)[],
    tc_accept: false,
    authToken: "",
  });
  const [other, setOther] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const modal = useSelector((state: IReducer) => state.modal);
  const [openTCModal, setOpenTCModal] = useState(false);
  const dispath = useDispatch();
  const story: USER_STORY = useSelector((state: any) => {
    return state.story;
  });

  const navigate = useNavigate();

  const handleDateChange = (date: Date) => {
    const updatePayload = { ...payload };
    updatePayload.dob = date;
    setPayload(updatePayload);
  };
  console.log(other);
  console.log(payload);

  const handleGenreChange = (
    genre: Genre | string,
    checked: boolean,
    value?: string
  ) => {
    let updatedGenres: (Genre | string)[] = [...payload.fav_music];
    let updatedCheckGenres: (Genre | string)[];
  
    if (checked) {
      if (genre === "Others" && value && value.trim() !== "") {
        const words = value
          .trim()
          .split(",")
          .map((word) => word.trim());
  
          updatedCheckGenres = [...updatedGenres, ...words];
          console.log(updatedCheckGenres);
          
  
        setPayload((prevPayload) => ({
          ...prevPayload,
          fav_music: updatedCheckGenres,
        }));
      } else if (!updatedGenres.includes(genre)) {
        updatedGenres.push(genre);
      }
    } else {
      updatedGenres = updatedGenres.filter((g) => g !== genre);
    }
  
    setPayload((prevPayload) => ({
      ...prevPayload,
      fav_music: updatedGenres,
    }));
  };
    
  console.log(payload);
  
  const submitHandler = async () => {
    if (
      payload.name === "" ||
      payload.phone === "" ||
      payload.email === "" ||
      payload.dob === null
    ) {
      dispath(
        openModal({
          title: "Register Failed",
          message: `All fields are required`,
          theme: "error",
        })
      );
      return;
    }
    if (payload.tc_accept === false) {
      dispath(
        openModal({
          title: "Register Failed",
          message: `All fields are required`,
          theme: "error",
        })
      );
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post(
        // `${serverURL}${endpoints.user}`,
        // "http://hnk-api.innoscript.co/api/user",
        "http://localhost:8000/api/user",
        payload
      );
      const result = response.data.data;
      const updateStory = { ...story };
      updateStory.id = result.id;
      updateStory.tc_accept = payload.tc_accept;
      updateStory.name = result.name;
      updateStory.email = result.email;
      updateStory.phone = result.phone;
      updateStory.fav_music = result.fav_music;
      updateStory.authToken = result.token;
      dispath(storyUpdate(updateStory));
      sessionStorage.setItem("USER_PAYLOAD", JSON.stringify(updateStory));
      setIsLoading(false);
      navigate("/term-and-condition");
    } catch (error: any) {
      console.error("Error submitting data:", error.response);
      setIsLoading(false);
      dispath(
        openModal({
          title: "Register Failed",
          message: `${error.response.data.message}. Please check your data and try again later.`,
          theme: "error",
        })
      );
      // alert(`${error.response.data.message}. Please check your data and try again later.`);
    }
  };

  return (
    <div className="register-wrapper">
      <AnimatePresence>{modal.isOpen && <ModalComponent />}</AnimatePresence>
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

        <div className="input-group">
          <label className="input-label-text font-extrabold pl-3">
            {" "}
            Date of Birth :{" "}
          </label>
          <DatePicker
            selected={payload.dob}
            onChange={handleDateChange}
            className="input-control z-999"
          />
        </div>

        <label className="input-label-text text-white font-extrabold pl-3 mt-3">
          {" "}
         အကြိုက်ဆုံး ဂီတအမျိုးအစား{" "}
        </label>
        <div className="checkboxes-wrapper">
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="hiphop"
              checked={payload.fav_music.includes("Hip-hop")}
              onChange={(e) => handleGenreChange("Hip-hop", e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="hiphop">
              {" "}
              Hip-hop{" "}
            </label>
          </span>
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="rnb"
              checked={payload.fav_music.includes("RnB")}
              onChange={(e) => handleGenreChange("RnB", e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="rnb">
              {" "}
              RnB{" "}
            </label>
          </span>
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="pop"
              checked={payload.fav_music.includes("Pop")}
              onChange={(e) => handleGenreChange("Pop", e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="pop">
              {" "}
              Pop{" "}
            </label>
          </span>
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="rock"
              checked={payload.fav_music.includes("Rock")}
              onChange={(e) => handleGenreChange("Rock", e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="rock">
              {" "}
              Rock{" "}
            </label>
          </span>
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="classical"
              checked={payload.fav_music.includes("Classical")}
              onChange={(e) => handleGenreChange("Classical", e.target.checked)}
            />
            <label className="checkbox-label" htmlFor="classical">
              {" "}
              Classical{" "}
            </label>
          </span>
          <span className="genre-checkbox-group">
            <input
              className="input-checkbox"
              type="checkbox"
              id="others"
              checked={payload.fav_music.includes("Others")}
              onChange={(e) =>
                handleGenreChange("Others", e.target.checked, other)
              }
            />

            <label className="checkbox-label" htmlFor="others">
              {" "}
              Others{" "}
            </label>
            {payload.fav_music.includes("Others") && (
              <input
                type="text"
                value={other}
                onChange={(e) => {
                  setOther(e.target.value); // Update the other state
                  handleGenreChange("Others", true, e.target.value); // Pass the value to handleGenreChange
                }}
              />
            )}
          </span>
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
            I accept{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpenTCModal(true);
              }}
              style={{ textDecoration: "underline" }}
            >
              terms and conditions
            </a>{" "}
          </label>
        </div>

        <div className="btn-group">
          <ButtonComponent
            minWidth="100px"
            label="Back"
            onBtnClick={() => navigate("/")}
          />
          <ButtonComponent
            disabled={!payload.tc_accept}
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

      {isLoading && <LoadingComponent />}

      {openTCModal && (
        <TCModal onClose={() => setOpenTCModal(false)} />
        // <ModalComponent>
        //   <div className="modal-content">

        //     <span className="close" onClick={() => setOpenTCModal(false)}>
        //       &times;
        //     </span>
        //   </div>
        //   </ModalComponent>
      )}
    </div>
  );
};

export default Register;
