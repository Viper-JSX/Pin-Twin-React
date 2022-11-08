import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import NotificationsWindow from "./Notifications_window/Notifications_window";

function OpenNotifications(){
    const notificationsWindowRef = useRef(null);
    const [ notificationsWindowVisibility, setNotificationsWindowVisibility ] = useState("hidden");

    function handleNotificationsShow(){
        console.log("Show")
        notificationsWindowRef.current.style.display = "block";
        notificationsWindowRef.current.focus();
        setNotificationsWindowVisibility("visible");
    }

    function handleNotificationsHide(){
        console.log("Hide")
        notificationsWindowRef.current.style.display = "none";
        setNotificationsWindowVisibility("hidden");
        console.log(notificationsWindowRef.current)
    }

    return(
        <>
            <button onClick={handleNotificationsShow}>
                <img src="" alt="Show notifications" />
            </button>

            {
                createPortal(
                    <NotificationsWindow notificationsWindowVisibility={notificationsWindowVisibility} notificationsWindowRef={notificationsWindowRef} handleNotificationsHide={handleNotificationsHide} />,
                    document.body
                )
            }
        </>
    );
}

export default OpenNotifications;