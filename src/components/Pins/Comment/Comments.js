import Comment from "./Comment";

function Comments({ comments, handleCommentDelete }){
    return(
        <div className="comments">
            {
                comments.map((comment) => <Comment comment={comment} handleCommentDelete={handleCommentDelete} />)
            }
        </div>
    );
}

export default Comments;