import { NavLink } from 'react-router-dom';

function PinOpenerPannel({ pin, handlePinOpenerClick }){
    return(
        <NavLink to={`/pins/${pin.id}`} state={{ pin }}>
            <div className="pinOpenerPannel" onClick={() => handlePinOpenerClick({ pinTags: pin.tags })}>
                <b>Open {pin.title}</b>
            </div>
        </NavLink>
    );
}

export default PinOpenerPannel;