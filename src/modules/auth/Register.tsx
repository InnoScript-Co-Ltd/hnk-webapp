import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";
import axios from "axios";
import Logo from "@/assets/images/Heineken E logo1.png";
import LeftGift from "@/assets/images/26 1.png";
import Guitar from "@/assets/images/v1guiter 1.png";
import Bottle from "@/assets/images/bottle logo png 1.png";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import { baseURL } from "@/constants/endpoints";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Toast } from "@/components/ui/toast";

interface formData {
  name: string;
  phone: string;
  email: string;
  is_accept: boolean;
}

const Register = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    phone: "",
    email: "",
    is_accept: false,
  });

  const dispatch = useDispatch();
  const [error, setError] = useState({
    email: "",
    name: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      is_accept: !prevFormData.is_accept,
    }));
  };

  const handleRegister = async () => {
    if (formData) {
      try {
        const response = await axios.post(`${baseURL}/user`, formData);
        console.log(response);
        
        const token = response.data.data.token;
        console.log(token);
        
        dispatch(setToken(token));
        navigate("/");
      } catch (e) {
        if (e) {
          console.log(e.response.data.data);
          const eMessage = e.response.data.data || "Registration failed";
          setError(eMessage);
          console.log("Registration failed:", eMessage);
        } else {
          console.log("Registration failed:");
        }
      }
    }
  };

  console.log(error.email[0]);

  return (
    <div className="home-container">
      <div className="bg-[#000242] min-h-screen">
        <div className="flex flex-row justify-center mx-auto items-center pt-5">
          <img src={Bottle} alt="" />
        </div>
        <div>
          <img src={Logo} alt="" className="absolute top-[21px] left-[45px]" />
          <img src={LeftGift} alt="" className="absolute left-0 top-[70px]" />
          <img src={Guitar} alt="" className="absolute right-0 top-[0px]" />
        </div>
        <div className="text-4xl text-white font-medium text-center">
          REGISTER
        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-6">
          <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
            <span className="flex items-center justify-center text-center">
              Name:
            </span>
            <input
              type="text"
              inputMode="text"
              value={formData.name}
              className="bg-transparent focus:outline-none focus:ring-0 ml-3"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          {error && (
            <div className="error text-red-700 w-[312px]">{error?.name[0]}</div>
          )}
          <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
            <span className="flex items-center justify-center text-center">
              Phone:
            </span>
            <input
              type="text"
              inputMode="tel"
              className="bg-transparent focus:outline-none focus:ring-0 ml-3"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              value={formData.phone}
              required
            />
          </div>
          {error && (
            <div className="error text-red-700 w-[312px]">
              {error?.phone[0]}
            </div>
          )}
          <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
            <span className="flex items-center justify-center text-center">
              Mail:
            </span>
            <input
              type="text"
              inputMode="email"
              className="bg-transparent focus:outline-none focus:ring-0 ml-3"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              required
            />
          </div>
          {error && (
            <div className="error text-red-700 w-[312px]">
              {error?.email[0]}
            </div>
          )}
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-2 mt-8 justify-start w-[312px]">
            <Checkbox
              id="terms"
              checked={formData.is_accept}
              onClick={handleCheckboxChange}
            />
            <label
              htmlFor="terms"
              className="text-[15px] text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          <Button
           onClick={() => navigate('/verifyage')}
           className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95">
            Back
          </Button>
          <Button
            onClick={handleRegister}
            disabled={formData.is_accept == false}
            className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
