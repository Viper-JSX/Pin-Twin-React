import { useSelector } from "react-redux/es/exports";

import Pins from "../Pins/Pins";

function MainPage({ handlePinOpenerClick, handlePinSave }){
    const [ user, pinsToShow ] = useSelector((state) => [ state.user, state.app.pinsToShow ]);

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