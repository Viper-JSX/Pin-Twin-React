import { NavLink } from "react-router-dom";

function MainPageIcon(){
    return(
        <NavLink to="/">
            <img className="mainPageIcon" alt="Icon leading to main page" />
        </NavLink>
    );
}

export default MainPageIcon;