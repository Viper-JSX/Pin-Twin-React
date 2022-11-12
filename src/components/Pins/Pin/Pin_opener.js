import { NavLink } from 'react-router-dom';
import PinOpenerPannel from "./Pin_opener_pannel";


function PinOpener({ pin }){

    return(
        <NavLink to={`pins/${pin.id}`}>
            <div className="pinOpener">
                <PinOpenerPannel pin={pin} />
            </div>
        </NavLink>
    );
}

export default PinOpener;