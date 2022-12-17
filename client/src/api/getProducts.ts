import axios from "axios";
import { API_URL } from "./config";

type TDbProduct = {
    name: string;
    price: string;
    description: string;
    _id: string;
};

export const getProducts = async () => {
    try {
        const { data: products } = await axios.get(`${API_URL}/products`);
        // return data and convert _id to id
        return products.map((product: TDbProduct) => ({
            name: product.name,
            price: product.price,
            description: product.description,
            id: product._id,
        }));

    } catch (error) {
        console.error(error);
    }
};
