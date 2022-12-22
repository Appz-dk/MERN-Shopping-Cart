import { useContext } from "react";
import { userContext } from "../App";


export const useIsAdmin = () => {
    // @ts-ignore
    const [user] = useContext(userContext);
    return user.user?.role === "admin"
}