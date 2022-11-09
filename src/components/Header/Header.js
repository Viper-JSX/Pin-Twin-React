import { useSelector } from "react-redux";
import Search from "../Reusable_components/Search/Search";
import MainPageIcon from "./Main_page_icon";
import OpenMessages from "./Open_messages";
import OpenNotifications from "./Open_notifications";
import OpenPinCreator from "./Open_pin_creator";
import OpenProfile from "./Open_profile";

function Header({ handlePinsSearchTermChange }){
    const [ pinsSearchTerm ] = useSelector((state) => [ state.search.pinsSearch.term ]);

    return(
        <header id="header">
            <MainPageIcon />
            <OpenPinCreator />
            <Search value={pinsSearchTerm} placeholder={"Search"} handler={handlePinsSearchTermChange} />
            <OpenNotifications />
            <OpenMessages />
            <OpenProfile />
        </header>
    );
}

export default Header;