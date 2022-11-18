export function filterPinsBasedOnUserPreferences(userFollowings, userFavouriteTags, pins){
    const pinsToShow = [];

    for(let i = pins.length - 1; i >= 0; i--){
        let suitable = false;

        userFavouriteTags.forEach((favTag) => {
            if(pins[i].tags.includes(favTag) || userFollowings.includes(pins[i].creatorId)){
                pinsToShow.unshift(pins[i]);
            }          
            else{
                pinsToShow.push(pins[i])
            }
        })
    }

    console.log(pinsToShow);
}