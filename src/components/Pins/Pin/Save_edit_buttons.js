import { useSelector } from 'react-redux';
import OpenPinEditor from './Open_pin_editor';

function SaveEditButtons({ pin }){
    const user = useSelector((state) => state.user);

    return(
        <div className="saveEditButtons">
            <button className="savePi">Save</button>
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