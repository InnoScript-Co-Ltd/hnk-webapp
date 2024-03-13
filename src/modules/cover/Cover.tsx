import "./index.css";
import BottleLogo from "@/assets/svgs/bottle-logo.svg";
import HeinekenLogo from "@/assets/svgs/heineken.svg";
import ShadowButton from "@/components/global/ShadowButton";

const Cover = () => {
    return (
        <main className="cover-container flex flex-col p-2">
            <div className="flex justify-center">
                <img src={BottleLogo} width={100} />
            </div>
            <div className="mt-auto flex flex-col">
                <ShadowButton label="Login" className="mx-auto mb-8" />
                <img className="ml-auto" src={HeinekenLogo} width={60} />
            </div>
        </main>
    );
};

export default Cover;
