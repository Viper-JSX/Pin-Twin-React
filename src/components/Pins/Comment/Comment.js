import { NavLink } from "react-router-dom";
import { users } from "../../../various_things/users";

function Comment({ userId, comment, handleCommentDelete }){
    const commentAuthor = users.find((user) => user.id === comment.authorId);
    return(
        <div className="comment">
            <NavLink>
                <b className="commentAuthor">{commentAuthor.nickname}: </b>
            </NavLink>
            <span className="commentText">{comment.text}</span>
            <br />
            {
                userId === comment.authorId ? 
                <button className="deleteComment" onClick={() => handleCommentDelete({ pinId: comment.pinId, commentId: comment.id })}>Delete</button>
                :
                null
            }
        </div>
    );
}

export default Comment;