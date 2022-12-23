import axios from "axios"
import { API_URL } from "./config";

export type TUser = {
    username: string;
    password: string;
};

export const createUser = async (formData: TUser) => {
    try {
        const response = await axios.post(`${API_URL}/register`, formData);
        return response
    } catch (error) {
        console.error(error);
    }
}

