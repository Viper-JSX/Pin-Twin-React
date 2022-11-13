import { NavLink } from 'react-router-dom';

function OpenPinCreator(){
    return(
        <NavLink to='pins/create/' >
            <button>Create <br /> pin</button>
        </NavLink>
    );
}

export default OpenPinCreator;