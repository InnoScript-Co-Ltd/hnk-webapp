/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import HNKLogo from "@/assets/images/hnk_logo.png";
import LabelLogo from "@/assets/images/hnk_label_logo.png";
import BgMask from "@/assets/images/mask_group_bg.png";
import KpopOp from "@/assets/images/K_POP_OP01.png";
import Punk from "@/assets/images/PUNK.png";
import AgeGateTitle from "@/assets/images/ageGateTitle.png";
import { useDispatch, useSelector } from "react-redux";
import { storyUpdate } from "@/store/storySlice";
import { USER_STORY } from '@/models/story.model';

const AgeGate = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const story: USER_STORY = useSelector((state: any) => {
        return state.story;
    });

    const ageGate = (value: boolean) => {
        const updateStory: USER_STORY = { ...story };
        updateStory.is_over_twentyone = value;
        dispatch(storyUpdate(updateStory));
        navigate("/home");
    };

    return (
        <div className=" min-h-screen h-full w-full overflow-hidden bg-[#009D1B] flex justify-center items-center pt-[30px]">
            
            <div className=" flex flex-col items-center min-h-screen">
                <div className="flex flex-col items-center gap-2">
                    <img
                        className="age-gate-hnk-logo w-[6rem]"
                        src={HNKLogo}
                        alt="Heineken"
                        title="Heineken"
                    />
                    <img
                        src={LabelLogo}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className="age-gate-refresh-music-logo w-[13rem]"
                    />
                    <img
                        src={AgeGateTitle}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className=" w-[14rem]"
                    />
                </div>

                <div className="button-container flex flex-col gap-3 mt-7 md:mt-5">
                    <Button
                        onClick={() => ageGate(true)}
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
                        src={BgMask}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className=" absolute bottom-0"
                    />
                    <img
                        src={KpopOp}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className="w-[300px] z-[2]"
                    />
                    <img
                        src={Punk}
                        alt="Heineken Refresh Your Music"
                        title="Heineken Refresh Your Music"
                        className=" h-auto z-[3] ml-[-15px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AgeGate;
