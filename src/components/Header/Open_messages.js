import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

import MessagesWindow from "./Messages_window/Messages_window";

function OpenMessages(){
    const messagesWindowRef = useRef(null);
    const [ messagesWindowVisibility, setMessagesWindowVisibility ] = useState("hidden");

    function handleMessagesShow(){
        messagesWindowRef.current.style.display = "block";
        messagesWindowRef.current.focus();
        setMessagesWindowVisibility("visible");
    }

    function handleMessagesHide(){
        setMessagesWindowVisibility("hidden");
        setTimeout(() => messagesWindowRef.current.style.display = "none", 1000)
    }

    return(
        <>
            <button className="openMessages" onClick={handleMessagesShow}>
                <FontAwesomeIcon icon={faMessage} />
            </button>

            {
                createPortal(
                    <MessagesWindow messagesWindowVisibility={messagesWindowVisibility} messagesWindowRef={messagesWindowRef} handleMessagesHide={handleMessagesHide} />,
                    document.body
                )
            }
        </>
    );
}

export default OpenMessages;