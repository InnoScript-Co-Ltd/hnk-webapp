import axios from "axios";

export const baseUrl = "http://hnk-api.innoscript.co/api";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postRequest = async (path: string, body: any, options?: any) => {
    return await axios.post(`${baseUrl}/${path}`, body, options)
        .then(result => result)
        .catch(error => error.response);
};