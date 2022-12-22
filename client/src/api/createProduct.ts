import axios, { AxiosError } from "axios"
import { API_URL } from "./config";

export type TProduct = {
  name: string;
  price: string;
  description: string;
  id: string
};

export const createProduct = async (formData: TProduct, user: any) => {
  try {

    const response = await axios.post(`${API_URL}/products`, formData, {
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
