import { useSelector } from "react-redux";

function UserProfileWindow(){
    const user = useSelector((state) => state.user);
    console.log(user);

    return(
        <div className="userProfileWindow">
            User profile
        </div>
    );
}

export default UserProfileWindow;