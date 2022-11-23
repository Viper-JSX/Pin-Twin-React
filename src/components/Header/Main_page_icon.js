import { NavLink } from "react-router-dom";


function MainPageIcon(){
    return(
        <NavLink to="/">
            <img className="mainPageIcon" src={"../../files/images/app_icon.svg"} alt="Main page" />
        </NavLink>
    );
}

export default MainPageIcon;