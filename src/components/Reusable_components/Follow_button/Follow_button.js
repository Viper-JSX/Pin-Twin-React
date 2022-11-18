const { useSelector } = require("react-redux");

function FollowButton({ userToFollowOrUnfollowId, handleFollow, handleUnFollow }){
    const [userId, userFollowings] = useSelector((state) => [ state.user.id, state.user.followings ]);


    return(
        <>
            {

            }
        </>
    );
}