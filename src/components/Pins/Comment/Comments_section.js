import Comments from "../../Reusable_components/Comments/Comments";

function CommentsSection({ comments, handleCommentCreate, handleCommentDelete }){
    return(
        <div className="commentsSection">
            <b className="commentsSectionTitle">Comments</b>
            <Comments comments={comments} handleCommentDelete={handleCommentDelete} />
        </div>
    )
}

export default CommentsSection;