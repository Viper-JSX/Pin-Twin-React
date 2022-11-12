import Pin from "./Pin";

function Pins({ pins }){
    return(
        <div>
            Pins
            {
                pins.map((pin) => <Pin pin={pin} />)
            }
        </div>
    );
}

export default Pins;