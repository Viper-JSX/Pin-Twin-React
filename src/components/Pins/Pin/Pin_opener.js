import { NavLink } from 'react-router-dom';
import PinOpenerPannel from "./Pin_opener_pannel";


function PinOpener({ pin }){

    return(
            <div className="pinOpener">
                <button className="savePin" onClick={() => console.log(pin)}>Save</button>
                <PinOpenerPannel pin={pin} />
            </div>

    );
}

export default PinOpener;