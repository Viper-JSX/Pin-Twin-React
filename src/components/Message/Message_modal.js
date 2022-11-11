import { useSelector } from "react-redux/es/exports";

function MessageModal(){
    const message = useSelector((state) => state.message);
    console.log(message)
    if(!message.text){
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