import React from "react";
import { getUser } from "../utils/sessionStorage.service";
import { useHistory } from "react-router-dom";
import RegisterFormNew from "../components/ui/registerFormNew";

const Main = () => {
    const currentUser = getUser();
    const history = useHistory();

    return <> {currentUser ? history.push("/chats") : <RegisterFormNew />}</>;
};

export default Main;
