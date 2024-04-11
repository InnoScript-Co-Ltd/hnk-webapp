/** 
Component Name              - Age Gate Page Component
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/svgs/HNK - Refresh Music Logo.svg";
import ageGateBg from "@/assets/svgs/agegate-bg.svg";
import AgeGateTitle from "@/assets/svgs/agegate-title.svg";
import { imageTitle, loadingTimeOut } from "@/constants/config";
import LoadingComponent from "@/components/LoadingComponent.tsx";
import { useEffect, useState } from "react";
import "./style.css";

const AgeGate = () => {
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, loadingTimeOut)
    }, []);

    return (
        <div className="agegate-wrapper">
            <div className=" flex flex-col items-center min-h-screen">
                <div className="flex flex-col items-center gap-2">
                    <img
                        src={HNKLogo}
                        alt={imageTitle}
                        title={imageTitle}
                    />
                    <img
                        src={AgeGateTitle}
                        alt={imageTitle}
                        title={imageTitle}
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
                        alt={imageTitle}
                        title={imageTitle}
                        className="agegate-bg"
                    />
                </div>
            </div>
            { loading && (<LoadingComponent />)}
        </div>
    );
};

export default AgeGate;