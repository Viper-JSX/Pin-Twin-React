import { useSelector } from "react-redux/es/exports";

import Pins from "../Pins/Pins";

function MainPage(){
    const user = useSelector((state) => state.user);

    return(
        <div id="mainPage">
            Main

            {
                user ? 
                <Pins pins={[]} />
                :
                "Some other content"
            }
        </div>
    );
}

export default MainPage;