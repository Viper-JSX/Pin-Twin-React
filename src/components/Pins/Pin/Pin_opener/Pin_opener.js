import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PinOpenerPannel from "./Pin_opener_pannel";


function PinOpener({ pin, handlePinSave }){
    const userSavedPins = useSelector((state) => state.user.savedPins)

    return(
        <div className="pinOpener">
            {
                userSavedPins.find((savedPin) => savedPin.id === pin.id) ? 
                null
                :
               <button className="savePin" onClick={() => handlePinSave(pin)}>Save</button>
            }
            <PinOpenerPannel pin={pin} />
        </div>

    );
}

export default PinOpener;