import React from "react";
import PropTypes from "prop-types";

const ChatCard = ({ chat }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center position-relative">
                    <img src={chat.image} width="100" />
                    <div className="mt-3">
                        <h4>{chat.name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};
ChatCard.propTypes = {
    chat: PropTypes.object
};

export default ChatCard;
