import { NavLink } from 'react-router-dom';

function PinOpenerPannel({ pin, handlePinOpenerClick }){
    return(
        <NavLink to={{ pathname: `/pins/${pin.id}`, search: `?id=${pin.id}` }} state={{ pinId: pin.id }}>
            <div className="pinOpenerPannel" onClick={() => handlePinOpenerClick({ pinTags: pin.tags })}>
                <b>Open {pin.title}</b>
            </div>
        </NavLink>
    );
}

export default PinOpenerPannel;