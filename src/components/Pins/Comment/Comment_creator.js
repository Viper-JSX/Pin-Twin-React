import { useState } from "react";
import { useSelector } from "react-redux";

function CommentCreator({ pinId, handleCommentCreate, handleLoginFormOpen }){
    const [ commentData, setCommentData ] = useState({ commentText: "" });
    const authorId = useSelector((state) => state.user?.id);

    function handleCommentTextChange(event){
        setCommentData({ ...commentData, commentText: event.target.value });
    }

    function handleCreateCommentButtonClick(){
        if(!authorId && authorId !== 0){ //User not logged in
            handleLoginFormOpen();
            return;
        }
        setCommentData({ ...commentData, commentText: "" });
        handleCommentCreate({ pinId, authorId, commentText: commentData.commentText });
    }

    return (
        <div className="commentCreator">
            <textarea value={commentData.commentText} placeholder="Comment" onChange={handleCommentTextChange}></textarea>
            <button className="createComment" onClick={handleCreateCommentButtonClick}>Comment</button>
        </div>
    );
}

export default CommentCreator;