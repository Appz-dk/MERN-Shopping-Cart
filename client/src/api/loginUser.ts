import axios from "axios"
import { API_URL } from "./config";

export type TUser = {
    username: string;
    password: string;
};

export const loginUser = async (userInfo: TUser) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userInfo);
        return response
    } catch (error) {
        console.error(error);
    }
}

