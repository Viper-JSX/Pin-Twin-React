import { users } from "../../various_things/users";

import { useSearchParams, NavLink } from "react-router-dom";

function ProfileOpener({ profileId }){
    const user = users.find((user) => user.id === profileId);

    return(
        <NavLink to={`/users/${profileId}`} state={{ user }}>
            <div className="profileOpener">
                <b>{user.nickname}</b>
                <button>See</button>
            </div>
        </NavLink>
    );
}

export default ProfileOpener;