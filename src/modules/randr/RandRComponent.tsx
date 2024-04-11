import RotatingSlogan from '@/components/RotatingSlogan'
import SlideShowImageContainer from '@/components/SlideShowImageContainer';
import SliderComponent from '@/components/SliderComponent';
import ep1 from '../../assets/svgs/ep01.svg';
import ep2 from '../../assets/images/randr/ep2.png'
import ep3 from '../../assets/images/randr/ep3.png'
import ep4 from '../../assets/images/randr/ep4.png'
import ep5 from '../../assets/images/randr/ep5.png'
import enjoyLogo from '../../assets/images/HomePage/enjoyLogo.png'
import footerImg from '../../assets/images/randr/randrfooter.png'
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'
// import bgImage from '../../assets/images/util_imgs/bgtest.png'
import { useCallback, useEffect, useState } from 'react';
import { getRequest } from '@/lib/axios';
import { endpoints } from '@/constants/endpoints';
import LoadingComponent from '@/components/LoadingComponent.tsx';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/modalSlice';

// const singerDummy = [
//     {
//         id: 1,
//         singerName: 'Wai La',
//         singerSlogan: 'Refresh Rock',
//         color: '#FF00F5',
//         image: bgImage
//     },
//     {
//         id: 2,
//         singerName: 'Aung La',
//         singerSlogan: 'Refresh Pop',
//         color: '#33FF64',
//         image: bgImage
//     },
//     {
//         id: 1,
//         singerName: 'SCY',
//         singerSlogan: 'Refresh Hip Hop',
//         color: '#87CEEB',
//         image: bgImage
//     },
// ]

const RandRComponent = () => {
    const navigate = useNavigate();
    const [singerSlider, setSingerSlider] :any = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const EpOneCLickHandler = () => {
        navigate('/randr/episode-1')
    }

    const onClickSinger = (id: string) => {
        navigate('/play/' + id);
    }

    const loadingSingerSlider = useCallback(async () => {
        setLoading(true);
        const result: any = await getRequest(`${endpoints.singerSlider}`);

        if(result.status === 200) {
            setLoading(false);
            setSingerSlider(result.data.data);
        }else{
            setLoading(false);
            dispatch(openModal({
                title: 'Error loading Genres',
                message: `${result?.data?.message}. Please check your data and try again later.`,
                theme: 'error'
              }));
        }
    }, []);

    useEffect(() => {
        loadingSingerSlider();
    }, [loadingSingerSlider]);

    return (
        <div className={styles.page_container}>
            {
                loading && (
                    <LoadingComponent />
                )
            }
            <div className={styles.slider_container}>
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
            </div>
            <div className={styles.level_section}>
                <p className={styles.level_title}>
                    ပြောင်းလဲဆန်းသစ် ဂီတခံစားမှုအသစ်
                </p>

                <div className={styles.ep_section}>
                    <svg className={styles.line} width="420" height="200" viewBox="0 0 390 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-30.5 0.5H81.5C97.5163 0.5 110.5 13.4837 110.5 29.5V172.5H400L493.5 129.5L408.5 249.5H316.5C301.036 249.5 288.5 262.036 288.5 277.5V394H102.5H-60" stroke="#00FF0A" />
                    </svg>

                    <div className={styles.flex_relative}>
                        <img src={ep1} />
                        <div className={styles.ep_right_text} style={{position: "relative", right: "30px"}}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                <p className={styles.btn_label_text}>
                                Take Care by Double J ကို ဘယ်လို Music Style နဲ နားထောင်ချင်လဲ?
                                </p>
                            </div>

                            <div className={styles.ep_btn}>
                                <button className={styles.btn_style} onClick={EpOneCLickHandler} style={{width: "170px"}}>
                                    <span className={styles.button_label}>  Refresh with Double J </span>
                                </button>
                                {/* <ButtonComponent label='Refresh with Double J' onBtnClick={EpOneCLickHandler} /> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.ep_section}>
                    <svg className={styles.svg_line_2} width="420" height="395" viewBox="0 0 390 395" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-30.5 0.5H81.5C97.5163 0.5 110.5 13.4837 110.5 29.5V172.5H400L493.5 129.5L408.5 249.5H316.5C301.036 249.5 288.5 262.036 288.5 277.5V394H102.5H-60" stroke="#00FF0A"></path>
                    </svg>
                    <div className={styles.top_adj_200} style={{justifyContent: 'flex-end'}}>
                        <div className={styles.ep_right_text} style={{ top: "-20px", position: "relative" }}>
                            {/* <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                <p className={styles.btn_label_text}>
                                    Refresh Your Lyric
                                </p>
                            </div>

                            <div className={styles.ep_btn}>
                                <ButtonComponent disabled={true} label='Episode-2' onBtnClick={EpOneCLickHandler} />
                            </div> */}
                        </div>
                        <img src={ep2} style={{position: "relative", right: "22px"}} />
                    </div>
                </div>

                <div className={styles.ep_section} style={{ overflow: "inherit", height: "inherit" }}>
                    <svg className={styles.line_2} width="420" height="634" viewBox="0 0 390 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-37 1H96C108.703 1 119 11.2975 119 24V205C119 217.703 129.297 228 142 228H250.5C263.203 228 273.5 217.703 273.5 205V165.5H437V466.5H305.5C292.797 466.5 282.5 456.203 282.5 443.5V382H-65.5V526H94C106.703 526 117 536.297 117 549V610.5C117 623.203 127.297 633.5 140 633.5H364.164C372.255 633.5 379.885 629.733 384.805 623.31L413 586.5" stroke="#00FF0A" />
                    </svg>

                    <div className={styles.flex_relative}>
                        <img src={ep3} style={{ top: "-440px", position: "relative", left: "20px" }} />
                        {/* <div className={styles.ep_right_text} style={{ top: "-435px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                <p className={styles.btn_label_text}>
                                    Pass in on Challenge
                                </p>
                            </div>

                            <div className={styles.ep_btn}>
                                <ButtonComponent disabled={true} label='Episode-3' onBtnClick={EpOneCLickHandler} />
                            </div>
                        </div> */}
                    </div>

                    <div className={styles.flex_relative} style={{justifyContent: "flex-end"}}>
                        {/* <div className={styles.ep_right_text} style={{ top: "-435px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                <p className={styles.btn_label_text}>
                                    Voice on the Street
                                </p>
                            </div>

                            <div className={styles.ep_btn} style={{ left: "20px", position: "relative" }}>
                                <ButtonComponent disabled={true} label='Episode-4' onBtnClick={EpOneCLickHandler} />
                            </div>
                        </div> */}

                        <img src={ep4} style={{ top: "-430px", position: "relative", right: "-30px" }} />
                    </div>

                    <div className={styles.flex_relative}>
                        <img src={ep5} style={{ top: "-400px", position: "relative", left: "20px" }} />
                        {/* <div className={styles.ep_right_text} style={{ top: "-390px", position: "relative" }}>
                            <div className={styles.ep_right_label}>
                                <IoIosStarOutline color='#00FF0A' />
                                <p className={styles.btn_label_text}>
                                    Together & Refresh
                                </p>
                            </div>

                            <div className={styles.ep_btn} style={{ left: "20px", position: "relative" }}>
                                <ButtonComponent disabled={true} label='Episode-5' onBtnClick={EpOneCLickHandler} />
                            </div>
                        </div> */}
                    </div>
                </div>


                {/* <img className={styles.ep3} src={ep3} /> */}
                {/* <div className={styles.ep3_btn_label}>
                <div className={styles.start_label}>
                    <IoIosStarOutline color='#00FF0A' />
                    <p className={styles.btn_label}>
                        Pass it on Challenge
                    </p>
                </div>
                <ButtonComponent label='Episode-3' onBtnClick={EpOneCLickHandler} />
            </div> */}


                {/* <img className={styles.ep4} src={ep4} /> */}
                {/* <div className={styles.ep4_btn_label}>
                <div className={styles.start_label}>
                    <IoIosStarOutline color='#00FF0A' />
                    <p className={styles.btn_label}>
                        Voces on the Street
                    </p>
                </div>
                <ButtonComponent label='Episode-4' onBtnClick={EpOneCLickHandler} />
            </div> */}

                {/* <img className={styles.ep5} src={ep5} /> */}
                {/* <div className={styles.ep5_btn_label}>
                <div className={styles.start_label}>
                    <IoIosStarOutline color='#00FF0A' />
                    <p className={styles.btn_label}>
                        Together & Refresh
                    </p>
                </div>
                <ButtonComponent label='Episode-5' onBtnClick={EpOneCLickHandler} />
            </div> */}

                {/* <div className={styles.getstars_btn}>
                <ButtonComponent minWidth='200px' backgroundColor="#2AFF6A" label='Get Stars' onBtnClick={EpOneCLickHandler} />
            </div> */}

                {/* <svg className={styles.line_2} width="420" height="634" viewBox="0 0 390 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-37 1H96C108.703 1 119 11.2975 119 24V205C119 217.703 129.297 228 142 228H250.5C263.203 228 273.5 217.703 273.5 205V165.5H437V466.5H305.5C292.797 466.5 282.5 456.203 282.5 443.5V382H-65.5V526H94C106.703 526 117 536.297 117 549V610.5C117 623.203 127.297 633.5 140 633.5H364.164C372.255 633.5 379.885 629.733 384.805 623.31L413 586.5" stroke="#00FF0A"/>
            </svg>

            <svg className={styles.line_3} width="147" height="69" viewBox="0 0 147 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-66 1H129C138.389 1 146 8.61116 146 18V69" stroke="#00FF0A"/>
            </svg> */}

                <img width={'100%'} src={footerImg} />

                <img className={styles.randr_enjoy} src={enjoyLogo} />

            </div>
        </div>
    )
}

export default RandRComponent