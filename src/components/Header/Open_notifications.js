import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import NotificationsWindow from "./Notifications_window/Notifications_window";

function OpenNotifications(){
    const notificationsWindowRef = useRef(null);
    const [ notificationsWindowVisibility, setNotificationsWindowVisibility ] = useState("hidden");

    return(
        <>
            <button>
                <img src="" alt="Show notifications" />
            </button>

            {
                createPortal(<NotificationsWindow notificationsWindowVisibility={notificationsWindowVisibility} notificationsWindowRef={notificationsWindowRef} />, document.body)
            }
        </>
    );
}

export default OpenNotifications;