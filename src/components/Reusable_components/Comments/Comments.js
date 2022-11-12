import Comment from "./Comment";

function Comments({ comments }){
    return(
        <div>
            {
                comments.map((comment) => <Comment comment={comment} />)
            }
        </div>
    );
}

export default Comments;