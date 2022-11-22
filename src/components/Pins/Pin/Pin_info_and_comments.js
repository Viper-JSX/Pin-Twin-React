import PinInfo from "./Pin_info";
import CommentsSection from "../Comment/Comments_section";
import ProfileOpener from "../../User_profile/Profile_opener";
import SaveEditPinButtons from "./Save_edit_pin_buttons";

function PinInfoAndComments({ pin, handlePinSave, handlePinRemoveFromSaved, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){

    return(
        <div className="pinInfoAndComments">
                <SaveEditPinButtons pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
                <PinInfo pin={pin} />
                <CommentsSection pinId={pin.id} comments={pin.comments} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />
                <b className="pinBy">Pin by: <ProfileOpener profileId={pin.creatorId} /></b>
        </div>
    );
}

export default PinInfoAndComments;