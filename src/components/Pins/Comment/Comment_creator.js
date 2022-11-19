import { useState } from "react";

function CommentCreator({ pinId, handleCommentCreate }){
    const [ commentData, setCommentData ] = useState({ commentText: "" });
    const authorId = useSelector((state) => state?.user?.id);

    function handleCommentTextChange(event){
        setCommentData({ ...commentData, commentText: event.target.value });
    }

    return (
        <div className="commentCreator">
            <textarea value={commentData.commentText} placeholder="Comment" onChange={handleCommentTextChange}></textarea>
            <button className="createComment" onClick={() => handleCommentCreate({ pinId, authorId, commentText: commentData.commentText })}>Comment</button>
        </div>
    );
}

export default CommentCreator;