import { useSelector } from 'react-redux';
import RemovePinFromSaved from '../Saved_pins/Remove_pin_from_saved';
import OpenPinEditor from './Open_pin_editor';

function SaveEditButtons({ pin, handlePinSave, handlePinRemoveFromSaved }){
    const [ user, userSavedPins ] = useSelector((state) => [ state.user, state.user?.savedPins ]);
    console.log(userSavedPins)
    return(
        <div className="saveEditButtons">
            {
                userSavedPins && userSavedPins.find((savedPin) => savedPin.id === pin.id) ? 
                <RemovePinFromSaved userId={user.id} pinId={pin.id} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
                :
                <button className="savePi" onClick={() => handlePinSave(pin)}>Save</button>
            }

            {
                (user?.id || user?.id === 0) && user?.id === pin.creatorId ? //If user logged in and user created current pin
                <OpenPinEditor pin={pin} />
                :
                null
            }
        </div>
    )
}

export default SaveEditButtons;