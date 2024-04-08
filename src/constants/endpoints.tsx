export const env = 2;

const baseUrls = [
    "http://localhost:8000/api", "http://hnk-api.innoscript.co/api", "https://api.refreshyourmusichnk.com/api"
];

const imageUrls = [
   "http://localhost:8000", "http://hnk-api.innoscript.co", "http://api.refreshyourmusichnk.co"
];

export const baseURL = baseUrls[env];
export const serverURL = baseUrls[env];
const imageUrl = imageUrls[env];

export const endpoints = {
    user: '/user',
    image: `${imageUrl}/storage/images`,
    audio: `${imageUrl}/storage/audio`,
    singerSlider: "singer-in-song"
}