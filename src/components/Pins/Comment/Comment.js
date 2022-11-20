import { NavLink } from "react-router-dom";
import { users } from "../../../various_things/users";

function Comment({ userId, comment, handleCommentDelete }){
    const commentAuthor = users.find((user) => user.id === comment.creatorId);
    return(
        <div className="comment">
            {
                userId === comment.creatorId ? 
                <button class="deleteComment" onClick={() => handleCommentDelete({ pinId: comment.pinId, commentId: comment.id })}>Delete</button>
                :
                null
            }

            <p className="commentText">{comment.text}</p>
            <NavLink>
                <b className="commentAuthor">{commentAuthor.nickname}</b>
            </NavLink>
        </div>
    );
}

export default Comment;