/** 
Component Name              - Api Endpoints [Constant Global Data]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

export const env = 2;

const baseUrls = [
    "http://localhost:8000", "http://hnk-innoscript.co", "https://refreshyourmusichnk.com"
];

const serverURLs = [
    "http://localhost:8000", "http://hnk-api.innoscript.co", "https://api.refreshyourmusichnk.com"
];

export const baseURL = baseUrls[env];
export const serverURL = `${serverURLs[env]}/api`;

export const endpoints = {
    user: '/user',
    image: `${serverURLs[env]}/storage/images`,
    audio: `${serverURLs[env]}/storage/audio`,
    video: `${serverURLs[env]}/storage/video`,
    singerSlider: "singer-in-song",
    singer: "singer",
    genre: "/genre",
    outlet: "/outlet",
    eventSlider: "/event-slider",
    episode: "/episode"
}