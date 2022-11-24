import { NavLink } from "react-router-dom";
import { appIconSrc } from "../../various_things/constants";


function AppIcon(){
    return(
        <NavLink to="/">
            <img className="appIcon" src={appIconSrc}  alt="Main page" />
        </NavLink>
    );
}

export default AppIcon;