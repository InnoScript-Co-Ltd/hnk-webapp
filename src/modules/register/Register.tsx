/* eslint-disable @typescript-eslint/no-explicit-any */
import hnkELogo from "@/assets/images/hnk_e_logo_medium.png";
import mask from "@/assets/images/mask.png";
import hnkBottle from "@/assets/images/hnk_bottle.png";
import guitter from "@/assets/images/guiter.png";
import footerImg from "@/assets/images/footer.png";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ButtonComponent from "@/components/ButtonComponent";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { endpoints, serverURL } from "@/constants/endpoints";
import { storyUpdate } from "@/store/storySlice";
import { useDispatch, useSelector } from "react-redux";
import ModalComponent from "@/components/ModalComponent";
import { AnimatePresence } from "framer-motion";
import { IReducer } from "@/store/store";
import { openModal } from "@/store/modalSlice";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { postRequest } from "@/lib/axios";

const Register = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    tc_accept: false,
    dob: new Date(),
    fav_music: [],
  });

  const [favMusic, setFav]: any = useState([
    { label: "Hip-Hop", value: "Hip-Hop", is_checked: false },
    { label: "RnB", value: "RnB", is_checked: false },
    { label: "Pop", value: "Pop", is_checked: false },
    { label: "Rock", value: "Rock", is_checked: false },
    { label: "Classical", value: "Classical", is_checked: false },
    { label: "Others", value: "Others", is_checked: false }
  ]);
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
        setPayload((prevPayload) => ({
          ...prevPayload,
          fav_music: updatedGenres,
        }));
      }
    } else {
      updatedGenres = updatedGenres.filter((g) => g !== genre);
      setPayload((prevPayload) => ({
        ...prevPayload,
        fav_music: updatedGenres,
      }));
    }
  
    
  };
    
  console.log(payload);
  
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

    try {

      const getFav: any= [];

      favMusic.filter((value: any) => {
        if(value.is_checked === true) {
          getFav.push(value.value);
        }
      });

      const updatePayload = {...payload};
      updatePayload.fav_music = getFav;
      
      setIsLoading(true);
      const response = await axios.post(`${serverURL}${endpoints.user}`,updatePayload);

      if(response.status === 200) {
        dispath(storyUpdate(response.data.data));

        await postRequest(`user/${response.data.data.id}/vote/genre`, {
          vote_genre: params.vote 
        });
      }

      setIsLoading(false);
      navigate("/invite");
    } catch (error: any) {
      setIsLoading(false);
      dispath(openModal({
        title: 'Register Failed',
        message: `${error.response.data.message}. Please check your data and try again later.`,
        theme: 'error',
      }));
    }

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
          {/* <input
            type="date"
            className="input-control"
            value={payload.dob}
            onChange={(e) => {
              const updatePayload = { ...payload };
              updatePayload.dob = e.target.value;
              setPayload(updatePayload);
            }}
          /> */}
          <DatePicker
            selected={payload.dob}
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
          <label className="checkbox-label" onClick={() => navigate(`/term-and-condition/${params.vote}`)}> I Accept terms and conditions </label>
        </div>

        <div className="btn-group">
          <ButtonComponent
            minWidth="100px"
            label="Back"
            onBtnClick={() => navigate("/")}
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