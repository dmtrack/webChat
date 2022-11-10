import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ChatListPageNew = () => {
    const [chats, setChats] = useState();
    useEffect(() => {
        api.chats.fetchAll().then((data) => setChats(data));
    }, []);
    return (
        <>
            <div className="chat-list">
                {chats ? (
                    chats.map((chat) => (
                        <div className="nav-item" key={chat._id}>
                            <Link to={`/chats/${chat._id}`} key={chat._id}>
                                {chat.name}
                            </Link>
                        </div>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};

ChatListPageNew.propTypes = {
    chats: PropTypes.array
};
export default ChatListPageNew;
