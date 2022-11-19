export function filterPinsBasedOnUserPreferences( pins, userFollowings, userFavouriteTags){ //Put recent pins to the front
    const pinsToShow = [];

    for(let i = pins.length - 1; i >= 0; i--){
        let suitable = false;

        userFavouriteTags.forEach((favTag) => {
            if(pins[i].tags.includes(favTag)){
                suitable = true;
            }          
        })

        if( !suitable && userFollowings.includes(pins[i].creatorId) ){
            suitable = true;
        }

        if(suitable){
            pinsToShow.unshift(pins[i]); //Put pin to the front
        }
        else{
            pinsToShow.push(pins[i]); //Put pin to the end
        }
    }

    console.log(pins, pinsToShow)
    return pinsToShow;
}