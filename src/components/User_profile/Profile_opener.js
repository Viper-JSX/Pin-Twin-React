import { users } from "../../various_things/users";

import { useSearchParams, NavLink } from "react-router-dom";

function ProfileOpener({ profileId }){
    const user = users.find((user) => user.id === profileId);

    return(
        <NavLink to={`/users/${profileId}`} state={{ user }}>
            <b className="profileOpener">{user.nickname}</b>
        </NavLink>
    );
}

export default ProfileOpener;