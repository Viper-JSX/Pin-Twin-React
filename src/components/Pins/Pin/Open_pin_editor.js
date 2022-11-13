import { NavLink } from "react-router-dom";

function OpenPinEditor({ pin }){
    return(
        <NavLink to="edit" state={{ pin }}>
            <button>Edit</button>
        </NavLink>
    );
}

export default OpenPinEditor;