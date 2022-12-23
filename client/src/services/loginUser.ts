import axios, { AxiosError } from "axios"
import { API_URL } from "./config";

export type TUser = {
    username: string;
    password: string;
};

export const loginUser = async (userInfo: TUser, setUser: (user: any) => void) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userInfo);
        const { token, user } = response?.data;
        setUser({ token, user });

    } catch (err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
            // Access to config, request, and response
            console.log(err)
            return err
        } else {
            // Just a stock error or unknown
            console.log(err)
        }
    }
}

