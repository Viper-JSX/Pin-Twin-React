import { NavLink } from "react-router-dom";

function MainPageIcon(){
    return(
        <NavLink to="/">
            <img className="mainPageIcon"  alt="Main page" />
        </NavLink>
    );
}

export default MainPageIcon;