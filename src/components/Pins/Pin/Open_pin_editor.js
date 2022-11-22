import { NavLink } from "react-router-dom";

function OpenPinEditor({ pin }){
    return(
        <NavLink to="edit" state={{ pin }}>
            <button className="openPinEditor">Edit</button>
        </NavLink>
    );
}

export default OpenPinEditor;