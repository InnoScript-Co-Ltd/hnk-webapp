import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React from "react";

const Register = () => {
  return (
    <div className="bg-[#000242] min-h-screen">
      <div className="flex flex-row justify-center mx-auto items-center pt-5">
        <img src="/src/assets/images/bottle logo png 1.png" alt="" />
      </div>
      <div>
        <img
          src="/src/assets/images/Heineken E logo1.png"
          alt=""
          className="absolute top-[21px] left-[45px]"
        />
        <img
          src="/src/assets/images/26 1.png"
          alt=""
          className="absolute left-0 top-[70px]"
        />
        <img
          src="/src/assets/images/v1guiter 1.png"
          alt=""
          className="absolute right-0 top-[0px]"
        />
      </div>
      <div className="text-4xl text-white font-medium text-center">
        REGISTER
      </div>
      <div className="flex flex-col justify-center items-center gap-5 mt-6">
        <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
          <span className="flex items-center justify-center text-center">
            Name:
          </span>
          <input
            type="text"
            inputMode="text"
            className="bg-transparent focus:outline-none focus:ring-0 ml-3"
          />
        </div>
        <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
          <span className="flex items-center justify-center text-center">
            Phone:
          </span>
          <input
            type="text"
            inputMode="tel"
            className="bg-transparent focus:outline-none focus:ring-0 ml-3"
          />
        </div>
        <div className="flex flex-row login-button justify-between px-3 rounded-full bg-[#00EE49] w-[312px] h-11">
          <span className="flex items-center justify-center text-center">
            Mail:
          </span>
          <input
            type="text"
            inputMode="email"
            className="bg-transparent focus:outline-none focus:ring-0 ml-3"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center space-x-2 mt-8 justify-start w-[312px]">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-[15px] text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
      <div className=" mx-auto ">
        <Button className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95">
          Back
        </Button>
        <Button
          // onClick={ageGate}
          className="text-dark login-button h-[44px] w-[116px] rounded-full border-[1px] border-black bg-white font-serif text-2xl font-medium hover:bg-white/95"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Register;
