import { useSelector } from "react-redux";
import Comment from "./Comment";

function Comments({ comments, handleCommentDelete }){
    const userId = useSelector((state) => state.user.id);
    console.log("Commm")
    return(
        <div className="comments">
            {
                comments.map((comment) => <Comment userId={userId} comment={comment} handleCommentDelete={handleCommentDelete} key={comment.id} />)
            }
        </div>
    );
}

export default Comments;