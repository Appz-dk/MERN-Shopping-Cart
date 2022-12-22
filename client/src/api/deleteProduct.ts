import axios, { AxiosError } from "axios"
import { API_URL } from "./config";

export const deletedProduct = async (id: string) => {
    try {

        const response = await axios.delete(`${API_URL}/products`, {
            data: {
                id
            }
        });
        return response

    } catch (err: unknown | AxiosError) {
        if (axios.isAxiosError(err)) {
            // Access to config, request, and response
            console.log(err)
            return err
        } else {
            console.log(err)
        }
    }
}
