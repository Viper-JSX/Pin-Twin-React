import { useSelector } from 'react-redux';

import OpenPinEditor from './Open_pin_editor';
import SavePinOrRemovePinFromSaved from './Save_pin_or_remove_pin_from_saved';

function SaveEditPinButtons({ pin, handlePinSave, handlePinRemoveFromSaved }){
    const user = useSelector((state) => state.user);

    return(
        <div className="saveEditButtons">
            <SavePinOrRemovePinFromSaved pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />

            {
                (user?.id || user?.id === 0) && user?.id === pin.creatorId ? //If user logged in and user created current pin
                <OpenPinEditor pin={pin} />
                :
                null
            }
        </div>
    )
}

export default SaveEditPinButtons;