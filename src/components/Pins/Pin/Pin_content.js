import { useSelector } from 'react-redux';

import PinImage from "./Pin_image";
import PinInfoAndComments from "./Pin_info_and_comments";

function PinContent({ pin, handlePinSave, handlePinRemoveFromSaved, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    return(
        <div className="pinContent">
            <PinImage imageSrc={pin.imageSrc} />
            <PinInfoAndComments pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />
        </div>
    );
}

export default PinContent