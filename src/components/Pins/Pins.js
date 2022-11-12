import Pin from "./Pin";

function Pins({ pins }){
    console.log(pins)

    return(
        <div>
            Pins
            {
                pins.map((pin) => <Pin pin={pin} key={`pin_${pin.id}`} /> ) 
            }
        </div>
    );
}

export default Pins;