import { useSelector } from "react-redux/es/exports";

function MessageModal(){
    const message = useSelector((state) => state.message);

    if(!message.text){
        return null;
    }

    return(
        <div className="messageModal">
            <b className="messageTitle">{message.title}</b>
            <p className="messageText">{message.text}</p>
        </div>
    );
}

export default MessageModal;