import { useSelector } from "react-redux";

function MessagesWindow( { messagesWindowVisibility, messagesWindowRef, handleMessagesHide } ){
    const messages = useSelector((state) => state.user?.conversations) || [];

    return(
        <div className={`messagesWindow ${messagesWindowVisibility}`} ref={messagesWindowRef} tabIndex={1} onBlur={handleMessagesHide}>
            <b>Messages</b>
            {
                messages.map((conversation) => console.log(conversation))
            }
        </div>
    );  
}

export default MessagesWindow;