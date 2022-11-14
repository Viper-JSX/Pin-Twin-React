import { useSelector } from "react-redux";

function MessagesWindow( { messagesWindowVisibility, messagesWindowRef, handleMessagesHide } ){
    const messages = useSelector((state) => state.user?.conversations) || [];

    return(
        <div className={`messagesWindow ${messagesWindowVisibility}`} ref={messagesWindowRef} tabIndex={1} onBlur={handleMessagesHide}>
            <b>Messages</b>
            {
                messages.map((conversation) => <b>{conversation.text}</b>)
            }
        </div>
    );  
}

export default MessagesWindow;