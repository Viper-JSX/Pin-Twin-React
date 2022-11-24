import { NavLink } from "react-router-dom";
import { appIconSrc } from "../../various_things/constants";


function MainPageIcon(){
    return(
        <NavLink to="/">
            <img className="mainPageIcon" src={appIconSrc}  alt="Main page" />
        </NavLink>
    );
}

export default MainPageIcon;