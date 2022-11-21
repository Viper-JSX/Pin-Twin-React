import { Link } from "react-router-dom";
import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";

function UserPinsSwitcher({ typeOfPinsToShow, handleUserPinsSwitch }){
    console.log(typeOfPinsToShow)
    return(
        <div className="userPinsSwitcher">
            <Link className={`${typeOfPinsToShow === USER_PINS ? "active" : ""}`} to="" onClick={() => handleUserPinsSwitch(USER_PINS)}>Pins</Link>
            <Link className={`${typeOfPinsToShow === SAVED_PINS ? "active" : ""}`} to="" onClick={() => handleUserPinsSwitch(SAVED_PINS)}>Saved Pins</Link>
        </div>
    );
}

export default UserPinsSwitcher;