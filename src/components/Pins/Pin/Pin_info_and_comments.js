import PinInfo from "./Pin_info";
import CommentsSection from "../Comment/Comments_section";
import ProfileOpener from "../../User_profile/Profile_opener";
import SaveEditButtons from "./Save_edit_buttons";

function PinInfoAndComments({ pin, handlePinSave, handlePinRemoveFromSaved, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    console.log(handlePinRemoveFromSaved)
    return(
        <div className="pinInfoAndComments">
                <SaveEditButtons pin={pin} handlePinSave={handlePinSave} handlePinRemoveFromSaved={handlePinRemoveFromSaved} />
                <PinInfo pin={pin} />
                <CommentsSection pinId={pin.id} comments={pin.comments} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />
                <b className="pinBy">Pin by: <ProfileOpener profileId={pin.creatorId} /></b>
        </div>
    );
}

export default PinInfoAndComments;