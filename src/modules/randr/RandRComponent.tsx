/** 
Component Name              - Refresh Music Component
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

// import { getRequest } from '@/lib/axios';
// import { endpoints } from '@/constants/endpoints';
// import { useDispatch } from 'react-redux';
// import { openModal } from '@/store/modalSlice';
// import SlideShowImageContainer from '@/components/SlideShowImageContainer';
// import SliderComponent from '@/components/SliderComponent';
// import { useCallback, useEffect, useState } from 'react';

import RotatingSlogan from '@/components/RotatingSlogan'
import ep1 from '../../assets/svgs/ep01.svg';
import ep2 from '../../assets/images/randr/ep2.png'
import ep3 from '../../assets/images/randr/ep3.png'
import ep4 from '../../assets/images/randr/ep4.png'
import ep5 from '../../assets/images/randr/ep5.png'
import enjoyLogo from '../../assets/images/HomePage/enjoyLogo.png'
import footerImg from '../../assets/images/randr/randrfooter.png'
import titleImg from "@/assets/svgs/home-title.svg";
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import LoadingComponent from '@/components/LoadingComponent.tsx';
import { imageTitle } from '@/constants/config';
import { getRequest } from '@/lib/axios';
import styles from './style.module.css'

const RandRComponent = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [episode, setEpisode] = useState<any>([]);
    // const [singerSlider, setSingerSlider]: any = useState([]);

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const EpOneCLickHandler = (url: string) => {
        navigate(url)
    }

    const loadingEpisode = useCallback(async () => {
        setLoading(true);
        const result: any = await getRequest("episode?");
        if (result.status === 200) {
            setEpisode(result.data.data);
        }
        setLoading(false);
    }, []);

    // const onClickSinger = (id: string) => {
    //     navigate('/play/' + id);
    // }

    /**
     * Info[ singer slider code is wrok and complete.]
     * Singer is tempory disable by client request 
     * 
     */

    // const loadingSingerSlider = useCallback(async () => {
    //     setLoading(true);
    //     const result: any = await getRequest(`${endpoints.singerSlider}`);

    //     if(result.status === 200) {
    //         setLoading(false);
    //         setSingerSlider(result.data.data);
    //     }else{
    //         setLoading(false);
    //         dispatch(openModal({
    //             title: 'Error loading Genres',
    //             message: `${result?.data?.message}. Please check your data and try again later.`,
    //             theme: 'error'
    //           }));
    //     }
    // }, [dispatch]);

    // useEffect(() => {
    //     loadingSingerSlider();
    // }, [loadingSingerSlider]);

    { /* setTimeout need to disable when slider component is enabled */ }
    useEffect(() => {
        loadingEpisode();
    }, [loadingEpisode]);

    return (
        <div className={styles.page_container}>
            {loading && (<LoadingComponent />)}
            {/* <div className={styles.slider_container}>
                <RotatingSlogan />
                <SliderComponent
                    autoPlay
                >
                    {
                        singerSlider.map((value: any) => (
                            <SlideShowImageContainer
                                key={value.id}
                                color={"#FF00F5"}
                                image={value.singer.profile.image}
                                singerName={value.singer.name}
                                singerSlogan={"Refresh with"}
                                onContainerClicked={() => onClickSinger(value.id)}
                            />
                        ))
                    }
                </SliderComponent>
            </div> */}

            <RotatingSlogan /> { /** Rotating Slogan is need to disable when slider component is enable **/}

            <div className={styles.level_section}>
                {/* <p className={styles.level_title}>
                    ပြောင်းလဲဆန်းသစ် ဂီတခံစားမှုအသစ်
                </p> */}
                <div className={styles.home_title_wrapper}>
                    <img src={titleImg} alt={imageTitle} title={imageTitle} />
                </div>


                <div className={styles.ep_section}>
                    <svg className={styles.line} width="420" height="200" viewBox="0 0 390 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-30.5 0.5H81.5C97.5163 0.5 110.5 13.4837 110.5 29.5V172.5H400L493.5 129.5L408.5 249.5H316.5C301.036 249.5 288.5 262.036 288.5 277.5V394H102.5H-60" stroke="#00FF0A" />
                    </svg>

                    <div className={styles.flex_relative}>
                        <img src={ep1} alt={imageTitle} title={imageTitle} />
                        <div className={styles.ep_right_text} style={{ position: "relative", right: "30px" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[0] && (
                                    <p className={styles.btn_label_text}>
                                        “ရေခဲရိုက်အပြုံး” by {episode[0].singer.name} ကို ဘယ်လို Music Style နဲ့ နားထောင်ချင်လဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn}>
                                {episode && episode[0] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[0].url)} style={{ width: "170px", top: "10px" }} disabled={episode[0].status === "ENABLE" ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[0].singer.name} </span>
                                    </button>
                                )}
                                {/* <ButtonComponent label='Refresh with Double J' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ep_section}>
                    <svg className={styles.svg_line_2} width="420" height="395" viewBox="0 0 390 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-30.5 0.5H81.5C97.5163 0.5 110.5 13.4837 110.5 29.5V172.5H400L493.5 129.5L408.5 249.5H316.5C301.036 249.5 288.5 262.036 288.5 277.5V394H102.5H-60" stroke="#00FF0A"></path>
                    </svg>
                    <div className={styles.top_adj_200} style={{ justifyContent: 'flex-end' }}>
                        <div className={styles.ep_right_text} style={{ top: "-20px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[1] && (
                                    <p className={styles.btn_label_text}>
                                        {episode[1].singer.name}  ရဲ့ ပြန်ဆန်းသစ်ထားတဲ့ ခေတ်ဟောင်းသီချင်းလေးက ဘာဖြစ်မလဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn}>
                                {episode && episode[1] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[1].url)} style={{ width: "170px", top: "10px" }} disabled={episode[1].status === 'ENABLE' ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[1].singer.name} </span>
                                    </button>
                                )}
                                {/* <ButtonComponent disabled={true} label='Episode-2' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>
                        <img src={ep2} style={{ position: "relative", right: "22px" }} alt={imageTitle} title={imageTitle} />
                    </div>
                </div>

                <div className={styles.ep_section} style={{ overflow: "inherit", height: "inherit" }}>
                    <svg className={styles.line_2} width="420" height="634" viewBox="0 0 390 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-37 1H96C108.703 1 119 11.2975 119 24V205C119 217.703 129.297 228 142 228H250.5C263.203 228 273.5 217.703 273.5 205V165.5H437V466.5H305.5C292.797 466.5 282.5 456.203 282.5 443.5V382H-65.5V526H94C106.703 526 117 536.297 117 549V610.5C117 623.203 127.297 633.5 140 633.5H364.164C372.255 633.5 379.885 629.733 384.805 623.31L413 586.5" stroke="#00FF0A" />
                    </svg>

                    <div className={styles.flex_relative}>
                        <img src={ep3} style={{ top: "-440px", position: "relative", left: "20px" }} alt={imageTitle} title={imageTitle} />
                        <div className={styles.ep_right_text} style={{ top: "-435px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[2] && (
                                    <p className={styles.btn_label_text}>
                                        {episode[2].singer.name} ရဲ့ ပြန်ဆန်းသစ်ထားတဲ့ ခေတ်ဟောင်းသီချင်းလေးက ဘာဖြစ်မလဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn}>
                                {episode && episode[2] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[2].url)} style={{ width: "170px", top: "10px" }} disabled={episode[2].status === 'ENABLE' ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[2].singer.name} </span>
                                    </button>
                                )}
                                {/* <ButtonComponent disabled={true} label='Episode-3' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>
                    </div>

                    <div className={styles.flex_relative} style={{ justifyContent: "flex-end" }}>
                        <div className={styles.ep_right_text} style={{ top: "-435px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[3] && (
                                    <p className={styles.btn_label_text}>
                                        Take Care by {episode[3].singer.name} ကို ဘယ်လို Music Style နဲ နားထောင်ချင်လဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn} style={{ left: "20px", position: "relative" }}>
                                {episode && episode[3] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[3].url)} style={{ width: "170px", top: "10px" }} disabled={episode[3].status === 'ENABLE' ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[3].singer.name} </span>
                                    </button>
                                )}
                                {/* <ButtonComponent disabled={true} label='Episode-4' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>

                        <img src={ep4} style={{ top: "-430px", position: "relative", right: "-30px" }} alt={imageTitle} title={imageTitle} />
                    </div>

                    <div className={styles.flex_relative}>
                        <img src={ep5} style={{ top: "-400px", position: "relative", left: "20px" }} alt={imageTitle} title={imageTitle} />
                        <div className={styles.ep_right_text} style={{ top: "-390px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[4] && (
                                    <p className={styles.btn_label_text}>
                                        Take Care by {episode[4].singer.name} ကို ဘယ်လို Music Style နဲ နားထောင်ချင်လဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn} style={{ left: "20px", position: "relative" }}>
                                {episode && episode[4] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[4].url)} style={{ width: "170px", top: "10px" }} disabled={episode[4].status === 'ENABLE' ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[4].singer.name} </span>
                                    </button>
                                )}
                                {/* <ButtonComponent disabled={true} label='Episode-5' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.ep_section_end}>
                    <svg className={styles.svg_line_2} width="420" height="395"  viewBox="0 0 390 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-30.5 0.5H81.5C97.5163 0.5 110.5 13.4837 110.5 29.5V172.5H400L493.5 129.5L408.5 249.5H316.5C301.036 249.5 288.5 262.036 288.5 277.5V394H102.5H-60" stroke="#00FF0A"></path>
                    </svg>
                    <div className={styles.top_adj_200} style={{ justifyContent: 'flex-end' }}>
                        <div className={styles.ep_right_text} style={{ top: "-20px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                {episode && episode[5] && (
                                    <p className={styles.btn_label_text}>
                                        Take Care by {episode[5].singer.name} ကို ဘယ်လို Music Style နဲ နားထောင်ချင်လဲ?
                                    </p>
                                )}
                            </div>

                            <div className={styles.ep_btn}>
                                {episode && episode[5] && (
                                    <button className={styles.btn_style} onClick={() => EpOneCLickHandler(episode[5].url)} style={{ width: "170px", top: "10px" }} disabled={episode[5].status === 'ENABLE' ? false : true}>
                                        <span className={styles.button_label}>  Refresh with {episode[5].singer.name} </span>
                                    </button>
                                )}
                            </div>
                        </div>
                        <img src={ep2} style={{ position: "relative", right: "22px" }} alt={imageTitle} title={imageTitle} />
                    </div>
                </div>

                

                {/* <div className={styles.getstars_btn}>
                <ButtonComponent minWidth='200px' backgroundColor="#2AFF6A" label='Get Stars' onBtnClick={EpOneCLickHandler} />
            </div> */}

                {/* <svg className={styles.line_2} width="420" height="634" viewBox="0 0 390 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-37 1H96C108.703 1 119 11.2975 119 24V205C119 217.703 129.297 228 142 228H250.5C263.203 228 273.5 217.703 273.5 205V165.5H437V466.5H305.5C292.797 466.5 282.5 456.203 282.5 443.5V382H-65.5V526H94C106.703 526 117 536.297 117 549V610.5C117 623.203 127.297 633.5 140 633.5H364.164C372.255 633.5 379.885 629.733 384.805 623.31L413 586.5" stroke="#00FF0A"/>
            </svg>

            <svg className={styles.line_3} width="147" height="69" viewBox="0 0 147 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-66 1H129C138.389 1 146 8.61116 146 18V69" stroke="#00FF0A"/>
            </svg> */}

                <img width={'100%'} src={footerImg} alt={imageTitle} title={imageTitle} />
                <img className={styles.randr_enjoy} src={enjoyLogo} alt={imageTitle} title={imageTitle} />

            </div>
        </div>
    )
}

export default RandRComponent;