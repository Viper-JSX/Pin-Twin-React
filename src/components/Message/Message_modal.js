function MessageModal(){
    const message = useSelector((state) => state.message);

    if(!message.messageText){
        return null;
    }

    return(
        <div>
            <b className="messageTitle">{message.title}</b>
            <p className="messageText">{message.text}</p>
        </div>
    );
}

export default MessageModal;