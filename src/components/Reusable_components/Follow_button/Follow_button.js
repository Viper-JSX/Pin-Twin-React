const { useSelector } = require("react-redux");

function FollowButton({ userToFollowOrUnfollowId, handleFollow, handleUnfollow }){
    const user = useSelector((state) => state.user);
    const isAlreadyFollowing = user && user.followings.includes(userToFollowOrUnfollowId); //Whether user is logged in and whether user already follows
    console.log(user.followings)
    return(
        <>
            {
                !isAlreadyFollowing ? 
                <button className="followButton" onClick={() => handleFollow({ userToFollowId: userToFollowOrUnfollowId })}>
                    Follow
                </button>
                :
                <button className="unfollowButton" onClick={() => handleUnfollow({ userToUnfollowId: userToFollowOrUnfollowId })}>
                    Unfollow
                </button>
            }
        </>
    );
}

export default FollowButton;