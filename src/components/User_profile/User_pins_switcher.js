import { SAVED_PINS, USER_PINS } from "../../various_things/constant_keywords";

function UserPinsSwitcher({ handleUserPinsSwitch }){
    return(
        <div className="userPinsSwitcher">
            <Link to="" onClick={() => handleUserPinsSwitch(USER_PINS)}>Pins</Link>
            <Link to="" onClick={() => handleUserPinsSwitch(SAVED_PINS)}>Saved Pins</Link>
        </div>
    );
}

export default UserPinsSwitcher;