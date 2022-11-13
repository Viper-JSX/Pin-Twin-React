import PinOpener from "./Pin/Pin_opener/Pin_opener";

function Pins({ pins, handlePinSave }){
    return(
        <div>
            Pins
            {
                pins.map((pin) => <PinOpener pin={pin} key={`pin_${pin.id}`} handlePinSave={handlePinSave} /> ) 
            }
        </div>
    );
}

export default Pins;