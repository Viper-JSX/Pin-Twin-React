import { useLocation } from "react-router";

function Pin(){
    const location = useLocation();
    const pin = location.state.pin;
    console.log(pin)

    return(
        <div className="pin">

        </div>
    );  
}

export default Pin;