import PinInfo from "./Pin_info";
import CommentsSection from "../Comment/Comments_section";
import ProfileOpener from "../../User_profile/Profile_opener";
import SaveEditButtons from "./Save_edit_buttons";

function PinInfoAndComments({ pin, handleCommentCreate, handleCommentDelete, handleLoginFormOpen }){
    return(
        <div className="pinInfoAndComments">
                <SaveEditButtons pin={pin} />
                <PinInfo pin={pin} />
                <CommentsSection pinId={pin.id} comments={pin.comments} handleCommentCreate={handleCommentCreate} handleCommentDelete={handleCommentDelete} handleLoginFormOpen={handleLoginFormOpen} />
                <b className="pinBy">Pin by: <ProfileOpener profileId={pin.creatorId} /></b>
        </div>
    );
}

export default PinInfoAndComments;