import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import Pins from "../Pins/Pins";

function MainPage({ handlePinsSearchTermChange, handlePinOpenerClick, handlePinSave }){
    const [ user, pinsToShow, pinsSearchTerm ] = useSelector((state) => [ state.user, state.app.pinsToShow, state.search.pinsSearch.term ]);

    useEffect(() => {
        handlePinsSearchTermChange({ target: { value: pinsSearchTerm } }); //To update pins list (pins to show when returning to MainPage)
    }, []);

    return(
        <div id="mainPage">
            Main

            {
                user ? 
                <Pins 
                    pins={pinsToShow} 
                    handlePinOpenerClick={handlePinOpenerClick} 
                    handlePinSave={handlePinSave} 
                />
                :
                "Some other content"
            }
        </div>
    );
}

export default MainPage;