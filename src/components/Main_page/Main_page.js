import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import Pins from "../Pins/Pins";
import WelcomePage from "./Welcome_page/Welcome_page";

function MainPage({ handleLoginFormOpen, handleSignUpFormOpen, handlePinsSearchTermChange, handlePinOpenerClick, handlePinSave }){
    const [ user, pinsToShow, pinsSearchTerm ] = useSelector((state) => [ state.user, state.app.pinsToShow, state.search.pinsSearch.term ]);

    useEffect(() => {
        handlePinsSearchTermChange({ target: { value: pinsSearchTerm } }); //To update pins list (pins to show when returning to MainPage)
    }, []);

    return(
        <div id="mainPage">
            {
                user ? 
                <Pins 
                    pins={pinsToShow} 
                    handlePinOpenerClick={handlePinOpenerClick} 
                    handlePinSave={handlePinSave} 
                />
                :
                <WelcomePage handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} />
            }
        </div>
    );
}

export default MainPage;