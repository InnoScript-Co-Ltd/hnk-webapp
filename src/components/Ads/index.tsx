import "./stye.css";

import starIcon from "@/assets/images/star.png";

const adsItems = [
    { alt: "HNK Refresh Music", label: "Refresh Your Music" },
    { alt: "HNK Refresh Music", label: "Refresh Your Night" },
    { alt: "HNK Refresh Music", label: "Refresh Your Music" },
    { alt: "HNK Refresh Music", label: "Refresh Your Night" },
    { alt: "HNK Refresh Music", label: "Refresh Your Music" },
    { alt: "HNK Refresh Music", label: "Refresh Your Night" },
];

const Ads = () => {
    return (
        <div className="ads-content">
            {adsItems.map((item) => (
                <div className="ads-item loop-text">
                    <img
                        src={starIcon}
                        alt={item.alt}
                        title="HNK Refresh Music"
                    />
                    <label> {item.label}</label>
                </div>
            ))}
        </div>
    );
};

export default Ads;
