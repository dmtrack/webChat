import { orderBy } from "lodash";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { useParams } from "react-router-dom";
import CommentsList, { AddCommentForm } from "../common/comments";
import { getUser } from "../../utils/sessionStorage.service";

const Comments = () => {
    const currentUser = getUser();
    const { chatId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        api.comments
            .fetchCommentsForChat(chatId)
            .then((data) => setComments(data));
        window.addEventListener("storage", () => {
            api.comments
                .fetchCommentsForChat(chatId)
                .then((data) => setComments(data));
        });
        return () => {
            window.removeEventListener("storage", () =>
                alert("listenerremoved")
            );
        };
    }, []);
    const handleSubmit = (data) => {
        api.comments
            .add({ ...data, pageId: chatId, userId: currentUser._id })
            .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        api.comments.remove(id).then((id) => {
            setComments(comments.filter((x) => x._id !== id));
        });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["asc"]);
    return (
        <>
            {sortedComments && (
                <div className="card mb-3">
                    <div className="card-body" style={{ maxHeight: "80%" }}>
                        <CommentsList
                            comments={sortedComments}
                            onRemove={handleRemoveComment}
                        />
                    </div>
                    <div className="card-body ">
                        <AddCommentForm onSubmit={handleSubmit} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
