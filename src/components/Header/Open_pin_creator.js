import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function OpenPinCreator({ handleLoginFormOpen }){
    const user = useSelector((state) => state.user);

    return(
        <>
        {
            user ? 
            <NavLink to='pins/create/' >
                <button className="openPinCreator">Create <br /> pin</button>
            </NavLink>
            :
            <button className="openPinCreator" onClick={handleLoginFormOpen}>Create <br /> pin</button>
        }
        </>
    );
}

export default OpenPinCreator;