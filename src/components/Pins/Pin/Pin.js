import { useLocation } from "react-router";
import PinInfo from "./Pin_info";

function Pin(){
    const location = useLocation();
    const pin = location.state.pin;
    console.log(pin)

    return(
        <div className="pin">
            <img src={pin.imageSrc} alt={`${[pin.title]} image`} />
            <PinInfo pin={pin} />
        </div> 
    );  
}

export default Pin;