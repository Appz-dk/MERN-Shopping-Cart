import axios, { AxiosError } from "axios"
import { API_URL } from "./config";

export type TProduct = {
  name: string;
  price: string;
  description: string;
  id: string
  image?: File
};


export const createProduct = async (data: TProduct, user: any) => {
  try {

    let formData = new FormData();
    if (data.image) formData.append('image', data.image)

    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('price', data.price)

    const response = await axios.post(`${API_URL}/products`, formData, {
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
