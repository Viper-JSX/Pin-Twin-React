import Search from "../Reusable_components/Search/Search";
import MainPageIcon from "./Main_page_icon";
import OpenPinCreator from "./Open_pin_creator";

function Header(){
    return(
        <header id="header">
            <MainPageIcon />
            <OpenPinCreator />
            <Search value={""} handler={null} />
        </header>
    );
}

export default Header;