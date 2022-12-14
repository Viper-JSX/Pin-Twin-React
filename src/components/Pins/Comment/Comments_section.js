import { useSelector } from "react-redux";
import Comments from "./Comments";
import CommentCreator from "./Comment_creator";

function CommentsSection({ pinId, comments, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    const userId = useSelector((state) => state.user?.id);
    return(
        <div className="commentsSection">
            <b className="commentsSectionTitle">Comments</b>
            <Comments comments={comments} handleCommentDelete={handleCommentDelete} />
            <CommentCreator pinId={pinId} authorId={userId} handleCommentCreate={handleCommentCreate} handleLoginFormOpen={handleLoginFormOpen} />
        </div>
    )
}

export default CommentsSection;