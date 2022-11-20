import { useSelector } from "react-redux";
import OpenAuthorization from "../Authorization/Open_authorization/Open_authorization";
import Search from "../Reusable_components/Search/Search";
import MainPageIcon from "./Main_page_icon";
import OpenMessages from "./Open_messages";
import OpenNotifications from "./Open_notifications";
import OpenPinCreator from "./Open_pin_creator";
import OpenProfile from "./Open_profile";

function Header({ handlePinsSearchTermChange, handleLoginFormOpen, handleSignUpFormOpen }){
    const [ user, pinsSearchTerm ] = useSelector((state) => [ state.user, state.search.pinsSearch.term ]);

    return(
        <header id="header">
            <MainPageIcon />
            <OpenPinCreator handleLoginFormOpen={handleLoginFormOpen} />
            <Search value={pinsSearchTerm} placeholder={"Search"} handler={handlePinsSearchTermChange} />
            <OpenNotifications />
            <OpenMessages />

            {
                user ? //If logged in
                <OpenProfile />
                :
                <OpenAuthorization handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} />
            }
        </header>
    );
}

export default Header;