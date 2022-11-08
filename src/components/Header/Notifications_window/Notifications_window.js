function NotificationsWindow( { notificationsWindowVisibility, notificationsWindowRef, handleNotificationsHide } ){

    return(
        <div className={`notificationsWindow ${notificationsWindowVisibility}`} ref={notificationsWindowRef} tabIndex={1} onBlur={handleNotificationsHide}>
            <b>Notifications</b>
        </div>
    );  
}

export default NotificationsWindow;