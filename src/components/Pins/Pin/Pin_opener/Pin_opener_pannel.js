import { NavLink } from 'react-router-dom';

function PinOpenerPannel({ pin, handlePinOpenerClick }){
    return(
        <NavLink to={{ pathname: `/pins/pin/`, search: `?id=${pin.id}` }} state={{ pinId: pin.id }}>
            <div className="pinOpenerPannel" onClick={() => handlePinOpenerClick({ pinTags: pin.tags })}>
                <img className='pinOpenerImage' src={pin.imageSrc} alt={pin.title} />
            </div>
        </NavLink>
    );
}

export default PinOpenerPannel;