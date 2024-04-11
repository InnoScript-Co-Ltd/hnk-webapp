/** 
Component Name              - Axios Config [Libs Configuration]
Development By              - InnoScript Co., Ltd
Date                        - 11/04/2024
Email                       - info@innoscript.co
**/

/* eslint-disable prefer-const */
import { serverURL } from "@/constants/endpoints";
import axios from "axios";

axios.defaults.baseURL = serverURL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const urlParams = (params : string) => {
    let paramsArray : Array<any> = [];
    Object.keys(params).map((value : any) => {
        return paramsArray.push(`${value}=${params[value]}`);
    });
    return paramsArray.join("&");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postRequest = async (path: string, body: any, options?: any) => {
    return await axios.post(path, body, options)
        .then(result => result)
        .catch(error => error.response);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRequest = async (path: string, params? :any) => {
    try {
        const url = params ? `${path}?${urlParams(params)}` : path;
        const result = await axios.get(url);
        return result
    } catch (error) {
        return error;
    }
}