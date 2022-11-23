import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

import Pins from "../Pins/Pins";
import Search from "../Reusable_components/Search/Search";
import WelcomePage from "./Welcome_page/Welcome_page";

function MainPage({ handleLoginFormOpen, handleSignUpFormOpen, handlePinsSearchTermChange, handlePinOpenerClick, handlePinSave, handlePinRemoveFromSaved}){
    const [ user, pinsToShow, showedPinsCount, pinsSearchTerm ] = useSelector((state) => [ state.user, state.app.pinsToShow, state.app.showedPinsCount, state.search.pinsSearch.term ]);

    useEffect(() => {
        handlePinsSearchTermChange({ target: { value: pinsSearchTerm } }); //To update pins list (pins to show when returning to MainPage)
    }, []);

    return(
        <div id="mainPage">
            {
                user ?
                <>
                    <Search value={pinsSearchTerm} handler={handlePinsSearchTermChange} />
                    <Pins 
                        pins={pinsToShow.slice(0, showedPinsCount)} 
                        handlePinOpenerClick={handlePinOpenerClick} 
                        handlePinSave={handlePinSave} 
                        handlePinRemoveFromSaved={handlePinRemoveFromSaved}
                    />
                </>
                :
                <WelcomePage handleLoginFormOpen={handleLoginFormOpen} handleSignUpFormOpen={handleSignUpFormOpen} />
            }
        </div>
    );
}

export default MainPage;