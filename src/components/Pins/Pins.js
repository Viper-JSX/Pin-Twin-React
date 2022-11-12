import PinOpener from "./Pin/Pin_opener/Pin_opener";

function Pins({ pins }){
    return(
        <div>
            Pins
            {
                pins.map((pin) => <PinOpener pin={pin} key={`pin_${pin.id}`} /> ) 
            }
        </div>
    );
}

export default Pins;