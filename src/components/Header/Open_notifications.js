import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import NotificationsWindow from "./Notifications_window/Notifications_window";

function OpenNotifications(){
    const notificationsWindowRef = useRef(null);
    const [ notificationsWindowVisibility, setNotificationsWindowVisibility ] = useState("hidden");

    function handleNotificationsShow(){
        notificationsWindowRef.current.style.display = "block";
        notificationsWindowRef.current.focus();
        setNotificationsWindowVisibility("visible");
    }

    function handleNotificationsHide(){
        setNotificationsWindowVisibility("hidden");
        setTimeout(() => notificationsWindowRef.current.style.display = "none", 1000)
    }

    return(
        <>
            <button className="openNotifications" onClick={handleNotificationsShow}>
                <FontAwesomeIcon icon={faBell} />
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