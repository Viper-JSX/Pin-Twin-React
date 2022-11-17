function ProfileOpener({ profileId }){
    return(
        <NavLink to={`./users/${profile.id}`}>
            <div className="profileOpener">
                <b>{profile.name}</b>
                <button>See</button>
            </div>
        </NavLink>
    );
}

export default ProfileOpener;