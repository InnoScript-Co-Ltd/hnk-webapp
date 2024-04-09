/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/svgs/HNK - Refresh Music Logo.svg";
import ageGateBg from "@/assets/svgs/agegate-bg.svg";
import AgeGateTitle from "@/assets/svgs/agegate-title.svg";
import "./style.css";

const AgeGate = () => {
    const navigate = useNavigate();

    return (
        <div className="agegate-wrapper">
            <div className=" flex flex-col items-center min-h-screen">
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={HNKLogo}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                    />
                    <img
                        src={AgeGateTitle}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className="mt-10 mb-10"
                    />
                </div>

                <div className="button-container flex flex-col gap-3">
                    <Button
                        onClick={() => navigate("/home")}
                        variant="hnk"
                        size="hnk"
                    >
                        Yes, I am
                    </Button>

                    <Button variant="hnk" size="hnk">
                        No, I am not
                    </Button>
                </div>

                <div className="iamge-container flex relative mt-auto pt-[20px] ">
                    <img
                        src={ageGateBg}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className="agegate-bg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AgeGate;