import React from "react";
import { useHistory } from "react-router-dom";
const BackToChatsButton = () => {
    const history = useHistory();
    return (
        <button
            className="btn btn-secondary"
            onClick={() => history.push("/chats")}
        >
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackToChatsButton;
