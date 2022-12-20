import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
  const navigate = useNavigate();
  //@ts-ignore
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    setUser({});
    navigate("/");
  }, []);

  return <div></div>;
};

export default Logout;
