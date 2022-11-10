import React from "react";
import PropTypes from "prop-types";
import Table from "../common/table";
import { Link } from "react-router-dom";

const ChatsTable = ({ chats, ...rest }) => {
    const columns = {
        name: {
            path: "name",
            name: "Имя",
            component: (chat) => (
                <Link to={`/chats/${chat._id}`}>{chat.name}</Link>
            )
        }
    };
    return <Table columns={columns} data={chats} />;
};

ChatsTable.propTypes = {
    chats: PropTypes.array.isRequired
};

export default ChatsTable;
