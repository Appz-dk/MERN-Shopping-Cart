import { useContext } from "react";
import { userContext } from "../App";


export const useIsLoggedIn = () => {
    // @ts-ignore
    const [user] = useContext(userContext);
    return user.token
}