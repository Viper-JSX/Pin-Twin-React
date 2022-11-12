function Comment({ comment }){
    return(
        <div className="comment">
            { comment.text }
        </div>
    );  
}

export default Comment;