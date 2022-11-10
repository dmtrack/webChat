import React from "react";
import { useParams } from "react-router-dom";
import ChatListPageNew from "../components/page/chatPageList/chatListPageNew";
import ChatPage from "../components/page/chatPage";
const Chats = () => {
    const params = useParams();
    const { chatId } = params;
    return <>{chatId ? <ChatPage chatId={chatId} /> : <ChatListPageNew />}</>;
};

export default Chats;
