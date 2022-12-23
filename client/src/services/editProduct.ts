import axios, { AxiosError } from "axios"
import { API_URL } from "./config";
import { TProduct } from "./createProduct";

export const editProduct = async (data: TProduct, user: any) => {
    try {

        const formData = new FormData();
        if (data.image) formData.append('image', data.image)

        formData.append('name', data.name)
        formData.append('description', data.description)
        formData.append('price', data.price)

        await axios.put(`${API_URL}/products/${data.id}`, formData, {
            headers: {
                "Authorization": `Bearer ${user.token}`,
                'content-type': 'multipart/form-data'
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

