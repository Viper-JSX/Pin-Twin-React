import PinInfo from "./Pin_info";

function PinImageAndInfo({ pin }){
    return(
        <div className="pinImageAndInfo">
            <img className="pinImage" src={pin.imageSrc} alt={`${[pin.title]} image`} />
            <PinInfo pin={pin} />
        </div>
    );
}

export default PinImageAndInfo;