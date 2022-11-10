import React from "react";
import { useHistory } from "react-router-dom";

import RegisterFormNew from "../components/ui/registerFormNew";
import { getUser } from "../utils/sessionStorage.service";

const Register = () => {
    const history = useHistory();
    const isAuth = getUser();
    console.log(isAuth);

    if (isAuth) {
        history.push("/chats");
    }

    return (
        <div className="my-5">
            <RegisterFormNew />
        </div>
    );
};

export default Register;
