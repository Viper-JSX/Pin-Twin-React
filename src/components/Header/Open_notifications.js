import { createPortal } from "react-dom";
import NotificationsWindow from "./Notifications_window/Notifications_window";

function OpenNotifications(){
    return(
        <>
            <button>
                <img src="" alt="Show notifications" />
            </button>

            {
                createPortal(<NotificationsWindow />, document.body)
            }
        </>
    );
}

export default OpenNotifications;