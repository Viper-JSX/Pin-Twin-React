import { users } from "../../various_things/users";

import { NavLink } from "react-router-dom";

function ProfileOpener({ profileId }){
    const profile = users.find((user) => user.id === profileId);

    return(
        <NavLink to={`/users/${profileId}`}>
            <div className="profileOpener">
                <b>{profile.nickname}</b>
                <button>See</button>
            </div>
        </NavLink>
    );
}

export default ProfileOpener;