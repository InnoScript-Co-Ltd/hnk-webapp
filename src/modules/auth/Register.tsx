import { Input } from "@/components/ui/input";
import React from "react";

const Register = () => {
  return (
    <div className="bg-[#000242] min-h-screen">
      <div className="flex flex-row justify-center mx-auto items-center pt-5">
        <img src="/src/assets/bottle logo png 1.png" alt="" />
      </div>
      <div>
        <img
          src="/src/assets/Heineken E logo1.png"
          alt=""
          className="absolute top-[21px] left-[45px]"
        />
        <img
          src="/src/assets/26 1.png"
          alt=""
          className="absolute left-0 top-[70px]"
        />
        <img
          src="/src/assets/v1guiter 1.png"
          alt=""
          className="absolute right-0 top-[0px]"
        />
      </div>
      <div className="text-4xl text-white font-medium text-center">
        REGISTER
      </div>
      <div className="flex justify-center">
        <Input
          type="text"
          placeholder="Name:"
          className="w-3/4 items-center rounded-full bg-[#00EE49]"
        />
      </div>
    </div>
  );
};

export default Register;
