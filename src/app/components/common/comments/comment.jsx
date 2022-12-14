import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { displayDate } from "../../../utils/displayDate";
import API from "../../../api";
import { getUserById } from "../../../api/fake.api/users.api";
import { getUser } from "../../../utils/sessionStorage.service";
const Comment = ({
    content,
    created_at: created,
    _id: id,
    userId,
    chatId,
    onRemove
}) => {
    const currentUser = getUser();
    const user = getUserById(userId);
    const [chat, setChat] = useState();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        API.chats.getById(chatId).then((data) => {
            setChat(data);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="bg-light card-body  mb-1">
            <div className="row">
                {isLoading ? (
                    "Loading ..."
                ) : (
                    <div className="col">
                        <div className="d-flex flex-start ">
                            <img
                                src={`https://avatars.dicebear.com/api/avataaars/${(
                                    Math.random() + 1
                                )
                                    .toString(36)
                                    .substring(7)}.svg`}
                                className="rounded-circle shadow-1-strong me-3"
                                alt="avatar"
                                width="30"
                                height="30"
                            />
                            <div className="flex-grow-1 flex-shrink-1">
                                <div className="mb-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-1 ">
                                            {chat && chat.name}{" "}
                                            <span className="small">
                                                <span>{user.name} </span>
                                                {displayDate(created)}
                                            </span>
                                        </p>
                                        {currentUser._id === userId ? (
                                            <button
                                                className="btn btn-sm text-primary d-flex align-items-center"
                                                onClick={() => onRemove(id)}
                                            >
                                                <i className="bi bi-x-lg"></i>
                                            </button>
                                        ) : null}
                                    </div>
                                    <p className="small mb-0">{content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
Comment.propTypes = {
    content: PropTypes.string,
    edited_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    chatId: PropTypes.string,
    userId: PropTypes.string,
    onRemove: PropTypes.func,
    _id: PropTypes.string
};

export default Comment;
