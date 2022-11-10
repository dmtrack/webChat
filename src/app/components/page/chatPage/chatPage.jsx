import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import ChatCard from "../../ui/chatCard";
import Comments from "../../ui/comments";

const ChatPage = ({ chatId }) => {
    const [chat, setChat] = useState();

    useEffect(() => {
        api.chats.getById(chatId).then((data) => setChat(data));
    }, []);

    if (chat) {
        return (
            <div className="container">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <ChatCard chat={chat} />
                    </div>
                    <div className="col-md-8">
                        <Comments />
                    </div>
                </div>
            </div>
        );
    } else {
        return <div className="chat-list">Loading...</div>;
    }
};

ChatPage.propTypes = {
    chatId: PropTypes.string.isRequired
};

export default ChatPage;
