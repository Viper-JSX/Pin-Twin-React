import { useSelector } from 'react-redux';
import OpenPinEditor from './Open_pin_editor';

function SaveEditButtons({ pin, handlePinSave }){
    const [ user, userSavedPins ] = useSelector((state) => [ state.user, state.user?.savedPins ]);
    console.log(userSavedPins)
    return(
        <div className="saveEditButtons">
            {
                userSavedPins && userSavedPins.find((savedPin) => savedPin.id === pin.id) ? 
                <button>Suka</button>
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