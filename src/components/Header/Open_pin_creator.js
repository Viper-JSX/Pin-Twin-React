import { NavLink } from 'react-router-dom';

function OpenPinCreator(){
    return(
        <NavLink to='create'>
            <button>Create <br /> pin</button>
        </NavLink>
    );
}

export default OpenPinCreator;