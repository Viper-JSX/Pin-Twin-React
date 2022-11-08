import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function OpenProfile(){
    return(
        <NavLink to="profile">
            <button>
                <FontAwesomeIcon icon={faUser} />
            </button>
        </NavLink>
    );
}

export default OpenProfile;