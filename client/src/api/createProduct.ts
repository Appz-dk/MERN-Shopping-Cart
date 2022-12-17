import axios from "axios"
import { API_URL } from "./config";

export type TProduct = {
  name: string;
  price: string;
  description: string;
  id: string
};

export const createProduct = async (formData: TProduct) => {
    try {
        const response = await axios.post(`${API_URL}/products`, formData);
        return response
      } catch (error) {
        console.error(error);
      }
}

