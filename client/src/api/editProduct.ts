import axios, { AxiosError } from "axios"
import { API_URL } from "./config";
import { TProduct } from "./createProduct";

export const editProduct = async (formData: TProduct, user: any) => {
    try {

        const response = await axios.put(`${API_URL}/products/${formData.id}`, formData, {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        });

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
