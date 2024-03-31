import { serverURL } from "@/constants/endpoints";
import { GENRE_URL } from "@/constants/keys"
import axios from "axios"

type voteGenreBodyType = {
    vote_genre: string | null
}

export const voteGenre = async(userId: string | null, body: voteGenreBodyType) => {
    const response = await axios.post(`${serverURL}/user/${userId}/vote/genre`, body);
    return response;
}

export const getGenre = async() => {
    const response = await axios.get(`${serverURL}${GENRE_URL}`);
    return response;
}