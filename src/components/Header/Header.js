import Search from "../Reusable_components/Search/Search";
import MainPageIcon from "./Main_page_icon";
import MessagesToggle from "./Messages_toggle";
import NotificationsToggle from "./Notifications_toggle";
import OpenPinCreator from "./Open_pin_creator";

function Header(){
    return(
        <header id="header">
            <MainPageIcon />
            <OpenPinCreator />
            <Search value={""} handler={null} />
            <NotificationsToggle />
            <MessagesToggle />
        </header>
    );
}

export default Header;