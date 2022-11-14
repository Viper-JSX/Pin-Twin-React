import { useSelector } from "react-redux";

function NotificationsWindow( { notificationsWindowVisibility, notificationsWindowRef, handleNotificationsHide } ){
    const notifications = useSelector((state) => state.user?.notifications) || [];

    return(
        <div className={`notificationsWindow ${notificationsWindowVisibility}`} ref={notificationsWindowRef} tabIndex={1} onBlur={handleNotificationsHide}>
            <b>Notifications</b>
            {
                notifications.map((notification) => <b>{notification.text}</b>)
            }
        </div>
    );  
}

export default NotificationsWindow;