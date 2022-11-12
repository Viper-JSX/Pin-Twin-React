import { NavLink } from 'react-router-dom';

function PinOpenerPannel({ pin }){
    return(
        <NavLink to={`pins/${pin.id}`}>
            <div className="pinOpenerPannel">
                <b>Open {pin.title}</b>
            </div>
        </NavLink>
    );
}

export default PinOpenerPannel;