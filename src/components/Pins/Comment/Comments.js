import { useSelector } from "react-redux";
import Comment from "./Comment";

function Comments({ comments, handleCommentDelete }){
    const userId = useSelector((state) => state.user.id);

    return(
        <div className="comments">
            {
                comments.map((comment) => <Comment userId={userId} comment={comment} handleCommentDelete={handleCommentDelete} />)
            }
        </div>
    );
}

export default Comments;