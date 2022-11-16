import { useSelector } from "react-redux";
import { useLocation } from "react-router";

function UserProfileWindow(){
    const location = useLocation();

    const user = useSelector((state) => state.user); //User itself
    const otherUser = location.state.user; //Other person's profile
    
    const otherUserProfile = Boolean(otherUser); //indicates whether user viewing own profile or other person's profile
    const currentlyShownPins = useState(null)

    return(
        <div className="userProfileWindow"> 


        </div>
    );
}

export default UserProfileWindow;